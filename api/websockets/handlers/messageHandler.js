
import Message from '../../models/messageModel.js';
import mongoose from 'mongoose';
import Creator from '../../models/creatorModel.js';
import Editor from '../../models/editorModel.js';

export const handleAuthentication = (ws, data, clients) => {
  if (!data.userId) {
    ws.send(JSON.stringify({
      type: 'error',
      error: 'Authentication failed: userId is required'
    }));
    return;
  }
  ws.userId = data.userId;
  clients.set(data.userId, ws);
 
  ws.send(JSON.stringify({
    type: 'auth_success',
    message: 'Authentication successful'
  }));
  broadcastUserStatus(clients, data.userId, 'online');
};

export const handleChatMessage = async (ws, data, clients) => {
  try {
    const { senderId, recipientId, content, tempId } = data;
    
    if (!senderId || !recipientId || !content) {
      ws.send(JSON.stringify({
        type: 'error',
        messageId: tempId,
        error: 'Invalid message data: missing required fields'
      }));
      return;
    }

    let sender, recipient;
    let senderModel, recipientModel;
    
    sender = await Creator.findById(senderId);
    if (sender) {
      senderModel = 'Creator';
    } else {
      sender = await Editor.findById(senderId);
      if (sender) {
        senderModel = 'Editor';
      }
    }
    
    recipient = await Creator.findById(recipientId);
    if (recipient) {
      recipientModel = 'Creator';
    } else {
      recipient = await Editor.findById(recipientId);
      if (recipient) {
        recipientModel = 'Editor';
      }
    }
    
    if (!sender || !recipient) {
      ws.send(JSON.stringify({
        type: 'error',
        messageId: tempId,
        error: 'Invalid sender or recipient'
      }));
      return;
    }

    const newMessage = new Message({
      sender: senderId,
      senderModel,
      receiver: recipientId,
      receiverModel: recipientModel,
      content,
      read: false,
      createdAt: new Date()
    });
    
    await newMessage.save();
    console.log(`📬 Message saved: ${sender.name} to ${recipient.name}`);
    
    const messageForRecipient = {
      _id: newMessage._id.toString(),
      content: newMessage.content,
      timestamp: newMessage.createdAt,
      isCurrentUser: false,
      sender: {
        _id: senderId,
        name: sender.name,
        username: sender.username,
        avatar: sender.avatar
      },
      receiver: {
        _id: recipientId
      }
    };
    
    const messageForSender = {
      ...messageForRecipient,
      isCurrentUser: true,
      tempId
    };
    const receiverWs = clients.get(recipientId);
    if (receiverWs) {
      receiverWs.send(JSON.stringify({
        type: 'new_message',
        message: messageForRecipient
      }));
      console.log(`📤 Message delivered to recipient ${recipientId}`);
    } else {
      console.log(`📪 Recipient ${recipientId} is offline, message stored only`);
    }
    
    ws.send(JSON.stringify({
      type: 'message_sent',
      message: messageForSender
    }));
  } catch (error) {
    console.error('❌ Error saving or sending message:', error);
    ws.send(JSON.stringify({
      type: 'error',
      messageId: data.tempId,
      error: 'Failed to send message'
    }));
  }
};

export const handleTyping = (data, clients) => {
  const { senderId, recipientId, isTyping } = data;
  
  if (!senderId || !recipientId) {
    return;
  }
  
  const receiverWs = clients.get(recipientId);
  if (receiverWs) {
    receiverWs.send(JSON.stringify({
      type: 'typing_status',
      senderId,
      isTyping
    }));
  }
};

export const handleUserStatus = (ws, data, clients) => {
  const { userIds } = data;
  
  if (!Array.isArray(userIds)) {
    ws.send(JSON.stringify({
      type: 'error',
      error: 'userIds must be an array'
    }));
    return;
  }
  
  const statuses = {};
  
  userIds.forEach(id => {
    statuses[id] = clients.has(id) ? 'online' : 'offline';
  });
  
  ws.send(JSON.stringify({
    type: 'user_statuses',
    statuses
  }));
};

export const broadcastUserStatus = (clients, userId, status) => {
  
  clients.forEach((clientWs, clientId) => {
    if (clientId !== userId) { 
      clientWs.send(JSON.stringify({
        type: 'user_status',
        userId,
        status
      }));
    }
  });
};

export const handleDisconnect = (userId, clients) => {
  if (userId) {
    clients.delete(userId);
    console.log(`👋 User ${userId} disconnected`);
    
    broadcastUserStatus(clients, userId, 'offline');
  }
};