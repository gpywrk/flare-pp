import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
  participants: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'participants.model'
      },
      model: {
        type: String,
        required: true,
        enum: ['Creator', 'Editor'] 
      }
    }
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message'
    }
  ],
  lastMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
  },
  unreadCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

conversationSchema.index({ "participants.user": 1, "participants.model": 1 });

const Conversation = mongoose.model('Conversation', conversationSchema);
export default Conversation;