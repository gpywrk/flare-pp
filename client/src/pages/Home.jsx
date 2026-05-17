// // // import React, { useEffect, useState } from "react";
// // // import { Button } from "@/components/ui/button";
// // // import {
// // //   Upload,
// // //   Edit2,
// // //   Youtube,
// // //   Users,
// // //   Globe,
// // //   Shield,
// // //   Zap,
// // //   FileVideo,
// // //   CheckCircle,
// // //   Layers,
// // //   PenTool,
// // //   PlayCircle,
// // //   ArrowRight,
// // //   Star,
// // //   Sparkles,
// // // } from "lucide-react";
// // // import { motion } from "framer-motion";
// // // import { useNavigate } from "react-router-dom";
// // // import { useSelector } from "react-redux";

// // // const Home = () => {
// // //   const [activeTab, setActiveTab] = useState("creators");
// // //   const userRole = useSelector((state) => state.user.role);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     if (userRole == "editor") {
// // //       navigate("/editor-dashboard");
// // //     } else if (userRole == "creator") {
// // //       navigate("/creator-dashboard");
// // //     }
// // //   }, []);

// // //   const features = {
// // //     creators: [
// // //       {
// // //         icon: Upload,
// // //         title: "Seamless Uploads",
// // //         description: "Instant video uploads with smart compression."
// // //       },
// // //       {
// // //         icon: Users,
// // //         title: "Editor Collaboration",
// // //         description: "Connect with skilled editors effortlessly."
// // //       },
// // //       {
// // //         icon: Youtube,
// // //         title: "Direct Publishing",
// // //         description: "Publish to YouTube with one click."
// // //       },
// // //     ],
// // //     editors: [
// // //       {
// // //         icon: PenTool,
// // //         title: "Advanced Editing",
// // //         description: "Professional tools with AI assistance."
// // //       },
// // //       {
// // //         icon: Layers,
// // //         title: "Project Management",
// // //         description: "Track workflows and communicate."
// // //       },
// // //       {
// // //         icon: CheckCircle,
// // //         title: "Quality Control",
// // //         description: "Automated checks and version control."
// // //       },
// // //     ],
// // //   };

// // //   const testimonials = [
// // //     {
// // //       quote: "Flare transformed my workflow completely. What took days now happens in hours.",
// // //       author: "Alex Johnson",
// // //       role: "YouTube Creator, 1.2M subscribers",
// // //       rating: 5
// // //     },
// // //     {
// // //       quote: "The feedback system is incredible. I always know exactly what my clients want.",
// // //       author: "Daniel Kim",
// // //       role: "Professional Video Editor",
// // //       rating: 5
// // //     },
// // //     {
// // //       quote: "Direct publishing saves me hours every week. Game-changing platform.",
// // //       author: "Maya Williams",
// // //       role: "Travel Vlogger, 890K subscribers",
// // //       rating: 5
// // //     }
// // //   ];

// // //   const fadeInUp = {
// // //     initial: { opacity: 0, y: 20 },
// // //     animate: { opacity: 1, y: 0 },
// // //     transition: { duration: 0.6 }
// // //   };

// // //   const staggerChildren = {
// // //     animate: {
// // //       transition: {
// // //         staggerChildren: 0.1
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <div className="bg-black text-white min-h-screen">
// // //       {/* Navigation */}
// // //       <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
// // //         <div className="container mx-auto px-6 py-4">
// // //           <div className="flex justify-between items-center">
// // //             <div className="flex items-center space-x-3">
// // //               <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
// // //                 <Sparkles className="w-5 h-5 text-white" />
// // //               </div>
// // //               <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
// // //                 Flare
// // //               </span>
// // //             </div>
            
// // //             <div className="hidden md:flex items-center space-x-8">
// // //               <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
// // //               <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Reviews</a>
// // //               <Button
// // //                 onClick={() => navigate("/login")}
// // //                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-6"
// // //               >
// // //                 Get Started
// // //               </Button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </nav>

// // //       {/* Hero Section */}
// // //       <section className="pt-32 pb-20 px-6">
// // //         <div className="container mx-auto text-center max-w-4xl">
// // //           <motion.div {...fadeInUp}>
// // //             {/* <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
// // //               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
// // //               <span className="text-sm text-gray-300">Used by 10,000+ creators</span>
// // //             </div> */}
            
// // //             <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
// // //               Video Production
// // //               <br />
// // //               <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
// // //                 Simplified
// // //               </span>
// // //             </h1>
            
// // //             <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
// // //               Streamline collaboration between creators and editors. Upload, edit, and publish faster than ever.
// // //             </p>

// // //             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
// // //               <Button 
// // //                 size="lg"
// // //                 onClick={() => navigate("/login")}
// // //                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-8 py-4 text-lg shadow-lg shadow-purple-500/25"
// // //               >
// // //                 Start Free Trial
// // //                 <ArrowRight className="ml-2 h-5 w-5" />
// // //               </Button>
              
// // //               <Button 
// // //                 size="lg"
// // //                 variant="outline"
// // //                 className="border-white/20 bg-white/5 hover:bg-white/10 rounded-full px-8 py-4 text-lg backdrop-blur-sm"
// // //               >
// // //                 <PlayCircle className="mr-2 h-5 w-5" />
// // //                 Watch Demo
// // //               </Button>
// // //             </div>

// // //             {/* Stats */}
// // //             <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
// // //               {[
// // //                 { number: "10K+", label: "Active Users" },
// // //                 { number: "50K+", label: "Videos Processed" },
// // //                 { number: "99.9%", label: "Uptime" }
// // //               ].map((stat, i) => (
// // //                 <div key={i} className="text-center">
// // //                   <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
// // //                   <div className="text-sm text-gray-500">{stat.label}</div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* Features Section */}
// // //       <section id="features" className="py-20 px-6">
// // //         <div className="container mx-auto max-w-6xl">
// // //           <motion.div className="text-center mb-16" {...fadeInUp}>
// // //             <h2 className="text-4xl md:text-5xl font-bold mb-4">
// // //               Built for <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Everyone</span>
// // //             </h2>
// // //             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
// // //               Whether you're a creator or editor, we have the tools you need
// // //             </p>
// // //           </motion.div>

// // //           {/* Tab Selector */}
// // //           <div className="flex justify-center mb-12">
// // //             <div className="bg-white/5 backdrop-blur-lg rounded-full p-1 border border-white/10">
// // //               {["creators", "editors"].map((tab) => (
// // //                 <Button
// // //                   key={tab}
// // //                   variant="ghost"
// // //                   onClick={() => setActiveTab(tab)}
// // //                   className={`rounded-full px-8 py-2 text-sm font-medium transition-all ${
// // //                     activeTab === tab
// // //                       ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
// // //                       : "text-gray-400 hover:text-white"
// // //                   }`}
// // //                 >
// // //                   For {tab.charAt(0).toUpperCase() + tab.slice(1)}
// // //                 </Button>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* Feature Cards */}
// // //           <motion.div 
// // //             className="grid md:grid-cols-3 gap-8"
// // //             variants={staggerChildren}
// // //             initial="initial"
// // //             animate="animate"
// // //           >
// // //             {features[activeTab].map((feature, index) => (
// // //               <motion.div
// // //                 key={index}
// // //                 variants={fadeInUp}
// // //                 className="group relative"
// // //               >
// // //                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
// // //                 <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
// // //                   <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl inline-flex mb-6">
// // //                     <feature.icon className="text-white w-6 h-6" />
// // //                   </div>
// // //                   <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
// // //                   <p className="text-gray-400 leading-relaxed">{feature.description}</p>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* Testimonials */}
// // //       <section id="testimonials" className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-950/10">
// // //         <div className="container mx-auto max-w-6xl">
// // //           <motion.div className="text-center mb-16" {...fadeInUp}>
// // //             <h2 className="text-4xl md:text-5xl font-bold mb-4">
// // //               Loved by <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Creators</span>
// // //             </h2>
// // //             <p className="text-xl text-gray-400">See what our community is saying</p>
// // //           </motion.div>

// // //           <motion.div 
// // //             className="grid md:grid-cols-3 gap-8"
// // //             variants={staggerChildren}
// // //             initial="initial"
// // //             animate="animate"
// // //           >
// // //             {testimonials.map((testimonial, i) => (
// // //               <motion.div
// // //                 key={i}
// // //                 variants={fadeInUp}
// // //                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
// // //               >
// // //                 <div className="flex mb-4">
// // //                   {[...Array(testimonial.rating)].map((_, i) => (
// // //                     <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
// // //                   ))}
// // //                 </div>
// // //                 <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
// // //                 <div className="flex items-center">
// // //                   <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold mr-3">
// // //                     {testimonial.author[0]}
// // //                   </div>
// // //                   <div>
// // //                     <p className="font-medium text-white text-sm">{testimonial.author}</p>
// // //                     <p className="text-gray-500 text-xs">{testimonial.role}</p>
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* CTA Section */}
// // //       <section className="py-20 px-6">
// // //         <div className="container mx-auto text-center max-w-4xl">
// // //           <motion.div {...fadeInUp}>
// // //             <h2 className="text-4xl md:text-6xl font-bold mb-6">
// // //               Ready to <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Transform</span> Your Workflow?
// // //             </h2>
// // //             <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
// // //               Join thousands of creators and editors who have revolutionized their video production.
// // //             </p>
            
// // //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// // //               <Button 
// // //                 size="lg"
// // //                 onClick={() => navigate("/login")}
// // //                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-8 py-4 text-lg shadow-lg shadow-purple-500/25"
// // //               >
// // //                 Start Free Trial
// // //                 <ArrowRight className="ml-2 h-5 w-5" />
// // //               </Button>
              
// // //               <Button 
// // //                 size="lg"
// // //                 variant="outline"
// // //                 className="border-white/20 bg-white/5 hover:bg-white/10 rounded-full px-8 py-4 text-lg backdrop-blur-sm"
// // //                 onClick={() => navigate("/login")}
// // //               >
// // //                 Learn More
// // //               </Button>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>
      
// // //       {/* Footer */}
// // //       <footer className="border-t border-white/10 py-12 px-6">
// // //         <div className="container mx-auto">
// // //           <div className="flex flex-col md:flex-row justify-between items-center">
// // //             <div className="flex items-center space-x-3 mb-6 md:mb-0">
// // //               <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
// // //                 <Sparkles className="w-5 h-5 text-white" />
// // //               </div>
// // //               <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
// // //                 Flare
// // //               </span>
// // //             </div>
// // //             <div className="flex space-x-8 text-gray-400 text-sm">
// // //               <a href="#" className="hover:text-white transition-colors">Privacy</a>
// // //               <a href="#" className="hover:text-white transition-colors">Terms</a>
// // //               <a href="#" className="hover:text-white transition-colors">Contact</a>
// // //             </div>
// // //           </div>
// // //           <div className="mt-8 text-center text-gray-500 text-sm">
// // //             © {new Date().getFullYear()} Flare. All rights reserved.
// // //           </div>
// // //         </div>
// // //       </footer>
// // //     </div>
// // //   ); 
// // // };

// // // export default Home;

// // // import React, { useEffect, useState } from "react";
// // // import { Button } from "@/components/ui/button";
// // // import { Badge } from "@/components/ui/badge";
// // // import {
// // //   Upload,
// // //   Edit2,
// // //   Youtube,
// // //   Users,
// // //   Globe,
// // //   Shield,
// // //   Zap,
// // //   FileVideo,
// // //   CheckCircle,
// // //   Layers,
// // //   PenTool,
// // //   PlayCircle,
// // //   ArrowRight,
// // //   Star,
// // //   Sparkles,
// // //   Video,
// // //   Clock,
// // //   TrendingUp,
// // //   Workflow,
// // //   MessageSquare,
// // //   BarChart3,
// // // } from "lucide-react";
// // // import { motion, useScroll, useTransform } from "framer-motion";
// // // import { useNavigate } from "react-router-dom";
// // // import { useSelector } from "react-redux";
// // // import { cn } from "@/lib/utils";

// // // const Home = () => {
// // //   const [activeTab, setActiveTab] = useState("creators");
// // //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// // //   const userRole = useSelector((state) => state.user.role);
// // //   const navigate = useNavigate();
// // //   const { scrollYProgress } = useScroll();
// // //   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

// // //   useEffect(() => {
// // //     if (userRole === "editor") {
// // //       navigate("/editor-dashboard");
// // //     } else if (userRole === "creator") {
// // //       navigate("/creator-dashboard");
// // //     }
// // //   }, [userRole, navigate]);

// // //   useEffect(() => {
// // //     const handleMouseMove = (e) => {
// // //       setMousePosition({ x: e.clientX, y: e.clientY });
// // //     };
// // //     window.addEventListener("mousemove", handleMouseMove);
// // //     return () => window.removeEventListener("mousemove", handleMouseMove);
// // //   }, []);

// // //   const features = {
// // //     creators: [
// // //       {
// // //         icon: Upload,
// // //         title: "Instant Upload",
// // //         description: "Drag, drop, done. Smart compression keeps quality pristine while uploading 3x faster.",
// // //         color: "from-blue-500 to-cyan-500",
// // //       },
// // //       {
// // //         icon: Users,
// // //         title: "Find Your Editor",
// // //         description: "Match with vetted professionals based on style, niche, and budget in seconds.",
// // //         color: "from-purple-500 to-pink-500",
// // //       },
// // //       {
// // //         icon: Youtube,
// // //         title: "One-Click Publish",
// // //         description: "Direct integration with YouTube, TikTok, and Instagram. Schedule or go live instantly.",
// // //         color: "from-orange-500 to-red-500",
// // //       },
// // //       {
// // //         icon: MessageSquare,
// // //         title: "Real-Time Feedback",
// // //         description: "Annotate videos frame-by-frame. Your editor sees changes instantly—no more email chains.",
// // //         color: "from-green-500 to-emerald-500",
// // //       },
// // //       {
// // //         icon: Clock,
// // //         title: "Version History",
// // //         description: "Never lose a cut. Access every revision with timestamps and automatic backups.",
// // //         color: "from-indigo-500 to-blue-500",
// // //       },
// // //       {
// // //         icon: BarChart3,
// // //         title: "Analytics Dashboard",
// // //         description: "Track project status, deadlines, and performance metrics in one beautiful view.",
// // //         color: "from-yellow-500 to-orange-500",
// // //       },
// // //     ],
// // //     editors: [
// // //       {
// // //         icon: PenTool,
// // //         title: "Pro Tools",
// // //         description: "Industry-standard editing suite with AI-powered color grading and audio enhancement.",
// // //         color: "from-violet-500 to-purple-500",
// // //       },
// // //       {
// // //         icon: Layers,
// // //         title: "Project Hub",
// // //         description: "Manage multiple clients, track deadlines, and communicate—all in one workspace.",
// // //         color: "from-cyan-500 to-blue-500",
// // //       },
// // //       {
// // //         icon: Workflow,
// // //         title: "Smart Workflow",
// // //         description: "Automated file organization, render queues, and export presets save hours daily.",
// // //         color: "from-pink-500 to-rose-500",
// // //       },
// // //       {
// // //         icon: CheckCircle,
// // //         title: "Quality Control",
// // //         description: "Built-in error detection catches issues before export. Automated compliance checks included.",
// // //         color: "from-emerald-500 to-green-500",
// // //       },
// // //       {
// // //         icon: TrendingUp,
// // //         title: "Get Discovered",
// // //         description: "Showcase your portfolio. Get matched with creators actively seeking your expertise.",
// // //         color: "from-orange-500 to-amber-500",
// // //       },
// // //       {
// // //         icon: Shield,
// // //         title: "Secure Payment",
// // //         description: "Escrow protection, milestone payments, and instant payouts. Your work, your money, safe.",
// // //         color: "from-blue-500 to-indigo-500",
// // //       },
// // //     ],
// // //   };

// // //   const testimonials = [
// // //     {
// // //       quote: "Flare cut my production time in half. I went from 4 videos a month to 8—same quality, less stress.",
// // //       author: "Sarah Chen",
// // //       role: "Tech YouTuber",
// // //       subscribers: "2.4M",
// // //       avatar: "SC",
// // //       rating: 5,
// // //     },
// // //     {
// // //       quote: "Finally, a platform that respects editors. Fair pay, clear communication, and clients who value my work.",
// // //       author: "Marcus Rodriguez",
// // //       role: "Video Editor",
// // //       years: "8 years",
// // //       avatar: "MR",
// // //       rating: 5,
// // //     },
// // //     {
// // //       quote: "The feedback tools are insane. Frame-accurate annotations mean no more 'make it pop' confusion.",
// // //       author: "Zoe Williams",
// // //       role: "Content Creator",
// // //       subscribers: "890K",
// // //       avatar: "ZW",
// // //       rating: 5,
// // //     },
// // //   ];

// // //   const process = [
// // //     {
// // //       step: "01",
// // //       title: "Upload Raw Footage",
// // //       description: "Drag files or sync from cloud storage. Automatic organization by date and project.",
// // //       icon: Upload,
// // //     },
// // //     {
// // //       step: "02",
// // //       title: "Brief Your Editor",
// // //       description: "Use templates or custom guidelines. Share references, music, and brand assets.",
// // //       icon: FileVideo,
// // //     },
// // //     {
// // //       step: "03",
// // //       title: "Collaborate in Real-Time",
// // //       description: "Review drafts, leave timestamped notes, approve changes—all in your browser.",
// // //       icon: MessageSquare,
// // //     },
// // //     {
// // //       step: "04",
// // //       title: "Publish Everywhere",
// // //       description: "Export in any format or publish directly to your channels. We handle the tech.",
// // //       icon: Youtube,
// // //     },
// // //   ];

// // //   const stats = [
// // //     { number: "12K+", label: "Active Creators", suffix: "" },
// // //     { number: "84K+", label: "Videos Delivered", suffix: "" },
// // //     { number: "4.9", label: "Average Rating", suffix: "/5" },
// // //     { number: "68%", label: "Faster Production", suffix: "" },
// // //   ];

// // //   const fadeInUp = {
// // //     initial: { opacity: 0, y: 30 },
// // //     animate: { opacity: 1, y: 0 },
// // //     transition: { duration: 0.6, ease: "easeOut" },
// // //   };

// // //   const staggerContainer = {
// // //     animate: {
// // //       transition: {
// // //         staggerChildren: 0.1,
// // //       },
// // //     },
// // //   };

// // //   return (
// // //     <div className="relative bg-black text-white min-h-screen overflow-hidden">
// // //       {/* Animated Background Grid */}
// // //       <div className="fixed inset-0 z-0">
// // //         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
// // //       </div>

// // //       {/* Gradient Orbs */}
// // //       <motion.div
// // //         className="fixed pointer-events-none z-0"
// // //         animate={{
// // //           x: mousePosition.x - 250,
// // //           y: mousePosition.y - 250,
// // //         }}
// // //         transition={{ type: "spring", damping: 30, stiffness: 200 }}
// // //       >
// // //         <div className="w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
// // //       </motion.div>
// // //       <div className="fixed top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px] z-0" />

// // //       {/* Navigation */}
// // //       <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/5">
// // //         <div className="container mx-auto px-6 py-4">
// // //           <div className="flex justify-between items-center">
// // //             <div className="flex items-center space-x-3 group cursor-pointer">
// // //               <div className="relative">
// // //                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-md group-hover:blur-lg transition-all" />
// // //                 <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
// // //                   <Video className="w-6 h-6 text-white" />
// // //                 </div>
// // //               </div>
// // //               <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
// // //                 Flare
// // //               </span>
// // //             </div>

// // //             <div className="hidden md:flex items-center space-x-8">
// // //               <a
// // //                 href="#features"
// // //                 className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
// // //               >
// // //                 Features
// // //               </a>
// // //               <a
// // //                 href="#process"
// // //                 className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
// // //               >
// // //                 How it Works
// // //               </a>
// // //               <a
// // //                 href="#testimonials"
// // //                 className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
// // //               >
// // //                 Reviews
// // //               </a>
// // //               <Button
// // //                 onClick={() => navigate("/login")}
// // //                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-6 shadow-lg shadow-purple-500/25 transition-all hover:shadow-purple-500/40"
// // //               >
// // //                 Get Started
// // //                 <ArrowRight className="ml-2 h-4 w-4" />
// // //               </Button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </nav>

// // //       {/* Hero Section */}
// // //       <section className="relative pt-32 pb-20 px-6 z-10">
// // //         <div className="container mx-auto text-center max-w-6xl">
// // //           <motion.div {...fadeInUp}>
// // //             <Badge className="mb-6 bg-white/5 border-white/10 text-white hover:bg-white/10 backdrop-blur-sm px-4 py-2">
// // //               <Sparkles className="w-3 h-3 mr-2 text-yellow-400" />
// // //               Trusted by 12,000+ creators worldwide
// // //             </Badge>

// // //             <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
// // //               Create. Collaborate.
// // //               <br />
// // //               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
// // //                 Publish.
// // //               </span>
// // //             </h1>

// // //             <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
// // //               The all-in-one platform connecting{" "}
// // //               <span className="text-white font-semibold">video creators</span>{" "}
// // //               with{" "}
// // //               <span className="text-white font-semibold">
// // //                 professional editors
// // //               </span>
// // //               . From upload to publish—faster, smarter, better.
// // //             </p>

// // //             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
// // //               <Button
// // //                 size="lg"
// // //                 onClick={() => navigate("/login")}
// // //                 className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-8 py-6 text-lg font-semibold shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all"
// // //               >
// // //                 <span className="relative z-10 flex items-center">
// // //                   Start Free Trial
// // //                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
// // //                 </span>
// // //                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
// // //               </Button>

// // //               <Button
// // //                 size="lg"
// // //                 variant="outline"
// // //                 className="border-white/20 bg-white/5 hover:bg-white/10 rounded-full px-8 py-6 text-lg backdrop-blur-sm group"
// // //               >
// // //                 <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
// // //                 Watch Demo
// // //               </Button>
// // //             </div>

// // //             {/* Stats */}
// // //             <motion.div
// // //               className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
// // //               variants={staggerContainer}
// // //               initial="initial"
// // //               animate="animate"
// // //             >
// // //               {stats.map((stat, i) => (
// // //                 <motion.div
// // //                   key={i}
// // //                   variants={fadeInUp}
// // //                   className="group cursor-default"
// // //                 >
// // //                   <div className="relative">
// // //                     <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
// // //                     <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
// // //                       <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
// // //                         {stat.number}
// // //                         <span className="text-lg">{stat.suffix}</span>
// // //                       </div>
// // //                       <div className="text-sm text-gray-400">{stat.label}</div>
// // //                     </div>
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </motion.div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* How It Works */}
// // //       <section id="process" className="relative py-24 px-6 z-10">
// // //         <div className="container mx-auto max-w-6xl">
// // //           <motion.div className="text-center mb-20" {...fadeInUp}>
// // //             <Badge className="mb-4 bg-purple-500/10 border-purple-500/20 text-purple-300">
// // //               Simple Process
// // //             </Badge>
// // //             <h2 className="text-5xl md:text-6xl font-bold mb-6">
// // //               From Raw to{" "}
// // //               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
// // //                 Ready
// // //               </span>
// // //             </h2>
// // //             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
// // //               Four steps to professional videos. No learning curve. No hassle.
// // //             </p>
// // //           </motion.div>

// // //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// // //             {process.map((item, i) => (
// // //               <motion.div
// // //                 key={i}
// // //                 initial={{ opacity: 0, y: 30 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 transition={{ delay: i * 0.1, duration: 0.6 }}
// // //                 viewport={{ once: true }}
// // //                 className="group relative"
// // //               >
// // //                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
// // //                 <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-300">
// // //                   <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-4">
// // //                     {item.step}
// // //                   </div>
// // //                   <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform">
// // //                     <item.icon className="text-white w-6 h-6" />
// // //                   </div>
// // //                   <h3 className="text-xl font-semibold mb-3 text-white">
// // //                     {item.title}
// // //                   </h3>
// // //                   <p className="text-gray-400 leading-relaxed text-sm">
// // //                     {item.description}
// // //                   </p>
// // //                 </div>
// // //                 {i < process.length - 1 && (
// // //                   <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-purple-500/50 to-transparent" />
// // //                 )}
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Features Section */}
// // //       <section id="features" className="relative py-24 px-6 z-10">
// // //         <div className="container mx-auto max-w-7xl">
// // //           <motion.div className="text-center mb-16" {...fadeInUp}>
// // //             <Badge className="mb-4 bg-blue-500/10 border-blue-500/20 text-blue-300">
// // //               Powerful Features
// // //             </Badge>
// // //             <h2 className="text-5xl md:text-6xl font-bold mb-6">
// // //               Built for{" "}
// // //               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
// // //                 Your Success
// // //               </span>
// // //             </h2>
// // //             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
// // //               Everything you need, nothing you don't. Creators and editors get
// // //               their own tailored experience.
// // //             </p>
// // //           </motion.div>

// // //           {/* Tab Selector */}
// // //           <div className="flex justify-center mb-16">
// // //             <div className="relative inline-flex bg-white/5 backdrop-blur-lg rounded-full p-1.5 border border-white/10">
// // //               <div
// // //                 className={cn(
// // //                   "absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 shadow-lg shadow-purple-500/50",
// // //                   activeTab === "creators"
// // //                     ? "left-1.5 right-1/2 mr-0.75"
// // //                     : "left-1/2 right-1.5 ml-0.75"
// // //                 )}
// // //               />
// // //               {["creators", "editors"].map((tab) => (
// // //                 <button
// // //                   key={tab}
// // //                   onClick={() => setActiveTab(tab)}
// // //                   className={cn(
// // //                     "relative z-10 px-8 py-3 text-sm font-semibold transition-all rounded-full",
// // //                     activeTab === tab ? "text-white" : "text-gray-400"
// // //                   )}
// // //                 >
// // //                   For {tab.charAt(0).toUpperCase() + tab.slice(1)}
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* Feature Cards */}
// // //           <motion.div
// // //             className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
// // //             variants={staggerContainer}
// // //             initial="initial"
// // //             animate="animate"
// // //             key={activeTab}
// // //           >
// // //             {features[activeTab].map((feature, index) => (
// // //               <motion.div
// // //                 key={index}
// // //                 variants={fadeInUp}
// // //                 className="group relative"
// // //               >
// // //                 <div
// // //                   className={cn(
// // //                     "absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br",
// // //                     feature.color.replace("from-", "from-").replace("to-", "to-") + "/20"
// // //                   )}
// // //                 />
// // //                 <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-300">
// // //                   <div
// // //                     className={cn(
// // //                       "bg-gradient-to-br p-4 rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform shadow-lg",
// // //                       feature.color
// // //                     )}
// // //                   >
// // //                     <feature.icon className="text-white w-6 h-6" />
// // //                   </div>
// // //                   <h3 className="text-2xl font-semibold mb-3 text-white">
// // //                     {feature.title}
// // //                   </h3>
// // //                   <p className="text-gray-400 leading-relaxed">
// // //                     {feature.description}
// // //                   </p>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* Testimonials */}
// // //       <section
// // //         id="testimonials"
// // //         className="relative py-24 px-6 z-10 overflow-hidden"
// // //       >
// // //         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />
// // //         <div className="container mx-auto max-w-6xl relative">
// // //           <motion.div className="text-center mb-16" {...fadeInUp}>
// // //             <Badge className="mb-4 bg-pink-500/10 border-pink-500/20 text-pink-300">
// // //               Wall of Love
// // //             </Badge>
// // //             <h2 className="text-5xl md:text-6xl font-bold mb-6">
// // //               Loved by{" "}
// // //               <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
// // //                 Thousands
// // //               </span>
// // //             </h2>
// // //             <p className="text-xl text-gray-400">
// // //               Real creators. Real results. Real testimonials.
// // //             </p>
// // //           </motion.div>

// // //           <motion.div
// // //             className="grid md:grid-cols-3 gap-6"
// // //             variants={staggerContainer}
// // //             initial="initial"
// // //             whileInView="animate"
// // //             viewport={{ once: true }}
// // //           >
// // //             {testimonials.map((testimonial, i) => (
// // //               <motion.div
// // //                 key={i}
// // //                 variants={fadeInUp}
// // //                 className="group relative"
// // //               >
// // //                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
// // //                 <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
// // //                   <div className="flex mb-4">
// // //                     {[...Array(testimonial.rating)].map((_, i) => (
// // //                       <Star
// // //                         key={i}
// // //                         className="w-5 h-5 text-yellow-400 fill-yellow-400"
// // //                       />
// // //                     ))}
// // //                   </div>
// // //                   <p className="text-gray-300 mb-6 leading-relaxed flex-grow text-lg">
// // //                     "{testimonial.quote}"
// // //                   </p>
// // //                   <div className="flex items-center">
// // //                     <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center text-sm font-bold mr-4 shadow-lg">
// // //                       {testimonial.avatar}
// // //                     </div>
// // //                     <div>
// // //                       <p className="font-semibold text-white">
// // //                         {testimonial.author}
// // //                       </p>
// // //                       <p className="text-gray-400 text-sm">
// // //                         {testimonial.role}
// // //                       </p>
// // //                       <p className="text-gray-500 text-xs">
// // //                         {testimonial.subscribers || testimonial.years}
// // //                       </p>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* CTA Section */}
// // //       <section className="relative py-24 px-6 z-10">
// // //         <div className="container mx-auto text-center max-w-5xl">
// // //           <motion.div
// // //             initial={{ opacity: 0, scale: 0.95 }}
// // //             whileInView={{ opacity: 1, scale: 1 }}
// // //             transition={{ duration: 0.6 }}
// // //             viewport={{ once: true }}
// // //             className="relative"
// // //           >
// // //             <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-[3rem] blur-3xl" />
// // //             <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-[3rem] p-16">
// // //               <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
// // //                 Ready to{" "}
// // //                 <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
// // //                   10x
// // //                 </span>{" "}
// // //                 <br />
// // //                 Your Content?
// // //               </h2>
// // //               <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
// // //                 Join 12,000+ creators and editors who've revolutionized their
// // //                 workflow. Start free—no credit card required.
// // //               </p>

// // //               <div className="flex flex-col sm:flex-row gap-4 justify-center">
// // //                 <Button
// // //                   size="lg"
// // //                   onClick={() => navigate("/login")}
// // //                   className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-10 py-6 text-xl font-semibold shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 transition-all"
// // //                 >
// // //                   <span className="relative z-10 flex items-center">
// // //                     Start Free Trial
// // //                     <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
// // //                   </span>
// // //                 </Button>

// // //                 <Button
// // //                   size="lg"
// // //                   variant="outline"
// // //                   className="border-white/30 bg-white/10 hover:bg-white/20 rounded-full px-10 py-6 text-xl backdrop-blur-sm"
// // //                   onClick={() => navigate("/login")}
// // //                 >
// // //                   Talk to Sales
// // //                 </Button>
// // //               </div>

// // //               <p className="text-sm text-gray-400 mt-8">
// // //                 Free 14-day trial · No credit card required · Cancel anytime
// // //               </p>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* Footer */}
// // //       <footer className="relative border-t border-white/5 py-12 px-6 z-10">
// // //         <div className="container mx-auto">
// // //           <div className="flex flex-col md:flex-row justify-between items-center mb-8">
// // //             <div className="flex items-center space-x-3 mb-6 md:mb-0 group cursor-pointer">
// // //               <div className="relative">
// // //                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-md group-hover:blur-lg transition-all" />
// // //                 <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
// // //                   <Video className="w-6 h-6 text-white" />
// // //                 </div>
// // //               </div>
// // //               <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
// // //                 Flare
// // //               </span>
// // //             </div>
// // //             <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
// // //               <a
// // //                 href="#"
// // //                 className="hover:text-white transition-colors hover:underline underline-offset-4"
// // //               >
// // //                 Privacy Policy
// // //               </a>
// // //               <a
// // //                 href="#"
// // //                 className="hover:text-white transition-colors hover:underline underline-offset-4"
// // //               >
// // //                 Terms of Service
// // //               </a>
// // //               <a
// // //                 href="#"
// // //                 className="hover:text-white transition-colors hover:underline underline-offset-4"
// // //               >
// // //                 Contact Us
// // //               </a>
// // //               <a
// // //                 href="#"
// // //                 className="hover:text-white transition-colors hover:underline underline-offset-4"
// // //               >
// // //                 Careers
// // //               </a>
// // //             </div>
// // //           </div>
// // //           <div className="text-center text-gray-500 text-sm">
// // //             © {new Date().getFullYear()} Flare Technologies, Inc. All rights
// // //             reserved. Made with{" "}
// // //             <span className="text-red-500 animate-pulse">❤</span> for creators
// // //             worldwide.
// // //           </div>
// // //         </div>
// // //       </footer>
// // //     </div>
// // //   );
// // // };

// // // export default Home;

// // import React, { useEffect, useState, useRef } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Badge } from "@/components/ui/badge";
// // import {
// //   Upload,
// //   FileVideo,
// //   CheckCircle,
// //   Layers,
// //   PenTool,
// //   PlayCircle,
// //   ArrowRight,
// //   Star,
// //   Sparkles,
// //   Video,
// //   Clock,
// //   TrendingUp,
// //   Workflow,
// //   MessageSquare,
// //   BarChart3,
// //   Users,
// //   Youtube,
// //   Zap,
// //   Shield,
// // } from "lucide-react";
// // import { motion, useScroll, useTransform, useInView } from "framer-motion";
// // import { useNavigate } from "react-router-dom";
// // import { useSelector } from "react-redux";
// // import { cn } from "@/lib/utils";

// // const Home = () => {
// //   const [activeTab, setActiveTab] = useState("creators");
// //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// //   const userRole = useSelector((state) => state.user.role);
// //   const navigate = useNavigate();
// //   const { scrollYProgress } = useScroll();
// //   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

// //   useEffect(() => {
// //     if (userRole === "editor") {
// //       navigate("/editor-dashboard");
// //     } else if (userRole === "creator") {
// //       navigate("/creator-dashboard");
// //     }
// //   }, [userRole, navigate]);

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       setMousePosition({ x: e.clientX, y: e.clientY });
// //     };
// //     window.addEventListener("mousemove", handleMouseMove);
// //     return () => window.removeEventListener("mousemove", handleMouseMove);
// //   }, []);

// //   // Animated Counter Component
// //   const AnimatedCounter = ({ value, duration = 2, suffix = "" }) => {
// //     const nodeRef = useRef();
// //     const inView = useInView(nodeRef, { once: true, margin: "-100px" });
// //     const [hasAnimated, setHasAnimated] = useState(false);
// //     const [displayValue, setDisplayValue] = useState("0");

// //     useEffect(() => {
// //       if (inView && !hasAnimated) {
// //         setHasAnimated(true);
// //         const targetValue = parseFloat(value.toString().replace(/[^0-9.]/g, ""));
// //         const isDecimal = value.includes(".");
// //         const hasK = value.includes("K");
// //         const hasPercent = value.includes("%");
        
// //         let startTime;
// //         const animate = (currentTime) => {
// //           if (!startTime) startTime = currentTime;
// //           const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
          
// //           // Easing function for smooth animation
// //           const easeOutQuart = 1 - Math.pow(1 - progress, 4);
// //           const current = targetValue * easeOutQuart;
          
// //           let formatted;
// //           if (hasK) {
// //             formatted = `${Math.floor(current)}K`;
// //           } else if (hasPercent) {
// //             formatted = `${Math.floor(current)}%`;
// //           } else if (isDecimal) {
// //             formatted = current.toFixed(1);
// //           } else {
// //             formatted = Math.floor(current).toLocaleString();
// //           }
          
// //           setDisplayValue(formatted);
          
// //           if (progress < 1) {
// //             requestAnimationFrame(animate);
// //           }
// //         };
        
// //         requestAnimationFrame(animate);
// //       }
// //     }, [inView, hasAnimated, value, duration]);

// //     return (
// //       <span ref={nodeRef}>
// //         {displayValue}
// //         {suffix}
// //       </span>
// //     );
// //   };

// //   const features = {
// //     creators: [
// //       {
// //         icon: Upload,
// //         title: "Instant Upload",
// //         description: "Drag, drop, done. Smart compression keeps quality pristine while uploading 3x faster.",
// //         color: "from-blue-500 to-cyan-500",
// //       },
// //       {
// //         icon: Users,
// //         title: "Find Your Editor",
// //         description: "Match with vetted professionals based on style, niche, and budget in seconds.",
// //         color: "from-purple-500 to-pink-500",
// //       },
// //       {
// //         icon: Youtube,
// //         title: "One-Click Publish",
// //         description: "Direct integration with YouTube, TikTok, and Instagram. Schedule or go live instantly.",
// //         color: "from-orange-500 to-red-500",
// //       },
// //       {
// //         icon: MessageSquare,
// //         title: "Real-Time Feedback",
// //         description: "Annotate videos frame-by-frame. Your editor sees changes instantly—no more email chains.",
// //         color: "from-green-500 to-emerald-500",
// //       },
// //       {
// //         icon: Clock,
// //         title: "Version History",
// //         description: "Never lose a cut. Access every revision with timestamps and automatic backups.",
// //         color: "from-indigo-500 to-blue-500",
// //       },
// //       {
// //         icon: BarChart3,
// //         title: "Analytics Dashboard",
// //         description: "Track project status, deadlines, and performance metrics in one beautiful view.",
// //         color: "from-yellow-500 to-orange-500",
// //       },
// //     ],
// //     editors: [
// //       {
// //         icon: PenTool,
// //         title: "Pro Tools",
// //         description: "Industry-standard editing suite with AI-powered color grading and audio enhancement.",
// //         color: "from-violet-500 to-purple-500",
// //       },
// //       {
// //         icon: Layers,
// //         title: "Project Hub",
// //         description: "Manage multiple clients, track deadlines, and communicate—all in one workspace.",
// //         color: "from-cyan-500 to-blue-500",
// //       },
// //       {
// //         icon: Workflow,
// //         title: "Smart Workflow",
// //         description: "Automated file organization, render queues, and export presets save hours daily.",
// //         color: "from-pink-500 to-rose-500",
// //       },
// //       {
// //         icon: CheckCircle,
// //         title: "Quality Control",
// //         description: "Built-in error detection catches issues before export. Automated compliance checks included.",
// //         color: "from-emerald-500 to-green-500",
// //       },
// //       {
// //         icon: TrendingUp,
// //         title: "Get Discovered",
// //         description: "Showcase your portfolio. Get matched with creators actively seeking your expertise.",
// //         color: "from-orange-500 to-amber-500",
// //       },
// //       {
// //         icon: Shield,
// //         title: "Secure Payment",
// //         description: "Escrow protection, milestone payments, and instant payouts. Your work, your money, safe.",
// //         color: "from-blue-500 to-indigo-500",
// //       },
// //     ],
// //   };

// //   const testimonials = [
// //     {
// //       quote: "Flare cut my production time in half. I went from 4 videos a month to 8—same quality, less stress.",
// //       author: "Sarah Chen",
// //       role: "Tech YouTuber",
// //       subscribers: "2.4M",
// //       avatar: "SC",
// //       rating: 5,
// //     },
// //     {
// //       quote: "Finally, a platform that respects editors. Fair pay, clear communication, and clients who value my work.",
// //       author: "Marcus Rodriguez",
// //       role: "Video Editor",
// //       years: "8 years",
// //       avatar: "MR",
// //       rating: 5,
// //     },
// //     {
// //       quote: "The feedback tools are insane. Frame-accurate annotations mean no more 'make it pop' confusion.",
// //       author: "Zoe Williams",
// //       role: "Content Creator",
// //       subscribers: "890K",
// //       avatar: "ZW",
// //       rating: 5,
// //     },
// //   ];

// //   const process = [
// //     {
// //       step: "01",
// //       title: "Upload Raw Footage",
// //       description: "Drag files or sync from cloud storage. Automatic organization by date and project.",
// //       icon: Upload,
// //     },
// //     {
// //       step: "02",
// //       title: "Brief Your Editor",
// //       description: "Use templates or custom guidelines. Share references, music, and brand assets.",
// //       icon: FileVideo,
// //     },
// //     {
// //       step: "03",
// //       title: "Collaborate in Real-Time",
// //       description: "Review drafts, leave timestamped notes, approve changes—all in your browser.",
// //       icon: MessageSquare,
// //     },
// //     {
// //       step: "04",
// //       title: "Publish Everywhere",
// //       description: "Export in any format or publish directly to your channels. We handle the tech.",
// //       icon: Youtube,
// //     },
// //   ];

// //   const stats = [
// //     { number: "12", label: "Active Creators", suffix: "K+", icon: Users, color: "from-blue-500 to-cyan-500" },
// //     { number: "84", label: "Videos Delivered", suffix: "K+", icon: Video, color: "from-purple-500 to-pink-500" },
// //     { number: "4.9", label: "Average Rating", suffix: "/5", icon: Star, color: "from-yellow-500 to-orange-500" },
// //     { number: "68", label: "Faster Production", suffix: "%", icon: Zap, color: "from-green-500 to-emerald-500" },
// //   ];

// //   const fadeInUp = {
// //     initial: { opacity: 0, y: 30 },
// //     animate: { opacity: 1, y: 0 },
// //     transition: { duration: 0.6, ease: "easeOut" },
// //   };

// //   const staggerContainer = {
// //     animate: {
// //       transition: {
// //         staggerChildren: 0.1,
// //       },
// //     },
// //   };

// //   return (
// //     <div className="relative bg-black text-white min-h-screen overflow-hidden">
// //       {/* Animated Background Grid */}
// //       <div className="fixed inset-0 z-0">
// //         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
// //       </div>

// //       {/* Gradient Orbs */}
// //       <motion.div
// //         className="fixed pointer-events-none z-0"
// //         animate={{
// //           x: mousePosition.x - 250,
// //           y: mousePosition.y - 250,
// //         }}
// //         transition={{ type: "spring", damping: 30, stiffness: 200 }}
// //       >
// //         <div className="w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
// //       </motion.div>
// //       <div className="fixed top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px] z-0" />

// //       {/* Navigation */}
// //       <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/5">
// //         <div className="container mx-auto px-6 py-4">
// //           <div className="flex justify-between items-center">
// //             <div className="flex items-center space-x-3 group cursor-pointer">
// //               <div className="relative">
// //                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-md group-hover:blur-lg transition-all" />
// //                 <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
// //                   <Video className="w-6 h-6 text-white" />
// //                 </div>
// //               </div>
// //               <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
// //                 Flare
// //               </span>
// //             </div>

// //             <div className="hidden md:flex items-center space-x-8">
// //               <a
// //                 href="#features"
// //                 className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
// //               >
// //                 Features
// //               </a>
// //               <a
// //                 href="#process"
// //                 className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
// //               >
// //                 How it Works
// //               </a>
// //               <a
// //                 href="#testimonials"
// //                 className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
// //               >
// //                 Reviews
// //               </a>
// //               <Button
// //                 onClick={() => navigate("/login")}
// //                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-6 shadow-lg shadow-purple-500/25 transition-all hover:shadow-purple-500/40"
// //               >
// //                 Get Started
// //                 <ArrowRight className="ml-2 h-4 w-4" />
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Hero Section */}
// //       <section className="relative pt-24 pb-16 px-6 z-10">
// //         <div className="container mx-auto text-center max-w-6xl">
// //           <motion.div {...fadeInUp}>
// //             <Badge className="mb-8 bg-white/5 border-white/10 text-white hover:bg-white/10 backdrop-blur-sm px-6 py-2.5 text-sm font-medium">
// //               <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
// //               Trusted by 12,000+ creators worldwide
// //             </Badge>

// //             <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[1.1] tracking-tight">
// //               Video Production,
// //               <br />
// //               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
// //                 Perfected
// //               </span>
// //             </h1>

// //             <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
// //               Connect creators with professional editors. Upload, collaborate, and publish 
// //               <span className="text-white font-semibold"> 3x faster</span> than traditional workflows.
// //             </p>

// //             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
// //               <Button
// //                 size="lg"
// //                 onClick={() => navigate("/login")}
// //                 className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-10 py-6 text-base font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all"
// //               >
// //                 <span className="relative z-10 flex items-center">
// //                   Start Free Trial
// //                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
// //                 </span>
// //               </Button>

// //               <Button
// //                 size="lg"
// //                 variant="outline"
// //                 className="border-white/20 bg-white/5 hover:bg-white/10 rounded-full px-10 py-6 text-base backdrop-blur-sm group"
// //               >
// //                 <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
// //                 Watch Demo
// //               </Button>
// //             </div>

// //             {/* Stats */}
// //             <motion.div
// //               className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
// //               variants={staggerContainer}
// //               initial="initial"
// //               animate="animate"
// //             >
// //               {stats.map((stat, i) => (
// //                 <motion.div
// //                   key={i}
// //                   variants={fadeInUp}
// //                   className="group cursor-default"
// //                 >
// //                   <div className="relative h-full">
// //                     <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
// //                       {/* Icon */}
// //                       <div className={cn(
// //                         "mb-3 p-2.5 rounded-xl bg-gradient-to-br shadow-md",
// //                         stat.color
// //                       )}>
// //                         <stat.icon className="w-5 h-5 text-white" />
// //                       </div>
                      
// //                       {/* Number */}
// //                       <div className="text-3xl md:text-4xl font-bold text-white mb-1.5">
// //                         <AnimatedCounter 
// //                           value={stat.number} 
// //                           suffix={stat.suffix}
// //                         />
// //                       </div>
                      
// //                       {/* Label */}
// //                       <div className="text-xs font-medium text-gray-400">{stat.label}</div>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* How It Works */}
// //       <section id="process" className="relative py-16 px-6 z-10">
// //         <div className="container mx-auto max-w-6xl">
// //           <motion.div className="text-center mb-12" {...fadeInUp}>
// //             <Badge className="mb-4 bg-purple-500/10 border-purple-500/20 text-purple-300">
// //               Simple Process
// //             </Badge>
// //             <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
// //               From Raw to{" "}
// //               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
// //                 Ready
// //               </span>
// //             </h2>
// //             <p className="text-base text-gray-400 max-w-2xl mx-auto">
// //               Four steps to professional videos. No learning curve, no hassle.
// //             </p>
// //           </motion.div>

// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
// //             {process.map((item, i) => (
// //               <motion.div
// //                 key={i}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: i * 0.1, duration: 0.5 }}
// //                 viewport={{ once: true }}
// //                 className="group relative"
// //               >
// //                 <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 h-full">
// //                   {/* Step number and icon */}
// //                   <div className="flex items-center justify-between mb-5">
// //                     <span className="text-5xl font-bold text-white/10">
// //                       {item.step}
// //                     </span>
// //                     <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl shadow-lg">
// //                       <item.icon className="text-white w-5 h-5" />
// //                     </div>
// //                   </div>
                  
// //                   {/* Content */}
// //                   <h3 className="text-lg font-bold mb-2 text-white">
// //                     {item.title}
// //                   </h3>
// //                   <p className="text-gray-400 leading-relaxed text-sm">
// //                     {item.description}
// //                   </p>
// //                 </div>
                
// //                 {/* Connector arrow */}
// //                 {i < process.length - 1 && (
// //                   <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-[2px] bg-gradient-to-r from-purple-500/40 to-transparent z-10">
// //                     <ArrowRight className="absolute -right-1 -top-2 w-4 h-4 text-purple-500/40" />
// //                   </div>
// //                 )}
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Features Section */}
// //       <section id="features" className="relative py-16 px-6 z-10">
// //         <div className="container mx-auto max-w-7xl">
// //           <motion.div className="text-center mb-12" {...fadeInUp}>
// //             <Badge className="mb-4 bg-blue-500/10 border-blue-500/20 text-blue-300">
// //               Powerful Features
// //             </Badge>
// //             <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
// //               Built for{" "}
// //               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
// //                 Your Success
// //               </span>
// //             </h2>
// //             <p className="text-base text-gray-400 max-w-2xl mx-auto">
// //               Everything creators and editors need in one powerful platform.
// //             </p>
// //           </motion.div>

// //           {/* Tab Selector */}
// //           <div className="flex justify-center mb-12">
// //             <div className="relative inline-flex bg-white/5 backdrop-blur-lg rounded-full p-1 border border-white/10">
// //               <div
// //                 className={cn(
// //                   "absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 shadow-md",
// //                   activeTab === "creators"
// //                     ? "left-1 right-1/2 mr-0.5"
// //                     : "left-1/2 right-1 ml-0.5"
// //                 )}
// //               />
// //               {["creators", "editors"].map((tab) => (
// //                 <button
// //                   key={tab}
// //                   onClick={() => setActiveTab(tab)}
// //                   className={cn(
// //                     "relative z-10 px-8 py-2.5 text-sm font-semibold transition-all rounded-full",
// //                     activeTab === tab ? "text-white" : "text-gray-400"
// //                   )}
// //                 >
// //                   For {tab.charAt(0).toUpperCase() + tab.slice(1)}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Feature Cards */}
// //           <motion.div
// //             className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
// //             variants={staggerContainer}
// //             initial="initial"
// //             animate="animate"
// //             key={activeTab}
// //           >
// //             {features[activeTab].map((feature, index) => (
// //               <motion.div
// //                 key={index}
// //                 variants={fadeInUp}
// //                 className="group relative"
// //               >
// //                 <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
// //                   {/* Icon container */}
// //                   <div className={cn(
// //                     "bg-gradient-to-br p-3 rounded-xl inline-flex mb-4 shadow-md",
// //                     feature.color
// //                   )}>
// //                     <feature.icon className="text-white w-5 h-5" />
// //                   </div>
                  
// //                   {/* Content */}
// //                   <h3 className="text-lg font-bold mb-2 text-white">
// //                     {feature.title}
// //                   </h3>
// //                   <p className="text-gray-400 leading-relaxed text-sm">
// //                     {feature.description}
// //                   </p>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Testimonials */}
// //       <section
// //         id="testimonials"
// //         className="relative py-16 px-6 z-10"
// //       >
// //         <div className="container mx-auto max-w-6xl relative">
// //           <motion.div className="text-center mb-12" {...fadeInUp}>
// //             <Badge className="mb-4 bg-pink-500/10 border-pink-500/20 text-pink-300">
// //               Wall of Love
// //             </Badge>
// //             <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
// //               Loved by{" "}
// //               <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
// //                 Thousands
// //               </span>
// //             </h2>
// //             <p className="text-base text-gray-400">
// //               Real creators. Real results. Real testimonials.
// //             </p>
// //           </motion.div>

// //           <motion.div
// //             className="grid md:grid-cols-3 gap-5"
// //             variants={staggerContainer}
// //             initial="initial"
// //             whileInView="animate"
// //             viewport={{ once: true }}
// //           >
// //             {testimonials.map((testimonial, i) => (
// //               <motion.div
// //                 key={i}
// //                 variants={fadeInUp}
// //                 className="group relative"
// //               >
// //                 <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 h-full flex flex-col">
// //                   {/* Stars */}
// //                   <div className="flex mb-4">
// //                     {[...Array(testimonial.rating)].map((_, i) => (
// //                       <Star
// //                         key={i}
// //                         className="w-4 h-4 text-yellow-400 fill-yellow-400"
// //                       />
// //                     ))}
// //                   </div>
                  
// //                   {/* Quote */}
// //                   <p className="text-gray-300 mb-6 leading-relaxed flex-grow text-sm">
// //                     "{testimonial.quote}"
// //                   </p>
                  
// //                   {/* Author */}
// //                   <div className="flex items-center pt-4 border-t border-white/10">
// //                     <div className="w-11 h-11 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center text-sm font-bold shadow-md mr-3">
// //                       {testimonial.avatar}
// //                     </div>
// //                     <div>
// //                       <p className="font-bold text-white text-sm">
// //                         {testimonial.author}
// //                       </p>
// //                       <p className="text-gray-400 text-xs">
// //                         {testimonial.role}
// //                       </p>
// //                       <p className="text-gray-500 text-xs">
// //                         {testimonial.subscribers || testimonial.years}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="relative py-16 px-6 z-10">
// //         <div className="container mx-auto text-center max-w-4xl">
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.95 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.5 }}
// //             viewport={{ once: true }}
// //             className="relative"
// //           >
// //             <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl" />
// //             <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16">
// //               <h2 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight">
// //                 Ready to{" "}
// //                 <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
// //                   Transform
// //                 </span>
// //                 <br />
// //                 Your Workflow?
// //               </h2>
// //               <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
// //                 Join 12,000+ creators and editors who've revolutionized their content production. Start free—no credit card required.
// //               </p>

// //               <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
// //                 <Button
// //                   size="lg"
// //                   onClick={() => navigate("/login")}
// //                   className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-10 py-6 text-base font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all"
// //                 >
// //                   <span className="relative z-10 flex items-center">
// //                     Start Free Trial
// //                     <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
// //                   </span>
// //                 </Button>

// //                 <Button
// //                   size="lg"
// //                   variant="outline"
// //                   className="border-white/20 bg-white/5 hover:bg-white/10 rounded-full px-10 py-6 text-base backdrop-blur-sm"
// //                   onClick={() => navigate("/login")}
// //                 >
// //                   Talk to Sales
// //                 </Button>
// //               </div>

// //               <p className="text-xs text-gray-500 font-medium">
// //                 14-day free trial · No credit card required · Cancel anytime
// //               </p>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="relative border-t border-white/5 py-10 px-6 z-10">
// //         <div className="container mx-auto">
// //           <div className="flex flex-col md:flex-row justify-between items-center mb-6">
// //             <div className="flex items-center space-x-3 mb-6 md:mb-0 group cursor-pointer">
// //               <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
// //                 <Video className="w-5 h-5 text-white" />
// //               </div>
// //               <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
// //                 Flare
// //               </span>
// //             </div>
// //             <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
// //               <a
// //                 href="#"
// //                 className="hover:text-white transition-colors"
// //               >
// //                 Privacy Policy
// //               </a>
// //               <a
// //                 href="#"
// //                 className="hover:text-white transition-colors"
// //               >
// //                 Terms of Service
// //               </a>
// //               <a
// //                 href="#"
// //                 className="hover:text-white transition-colors"
// //               >
// //                 Contact Us
// //               </a>
// //             </div>
// //           </div>
// //           <div className="text-center text-gray-500 text-xs">
// //             © {new Date().getFullYear()} Flare Technologies, Inc. All rights reserved.
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default Home;

// import React, { useEffect, useState, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   Upload,
//   FileVideo,
//   CheckCircle,
//   Layers,
//   PenTool,
//   PlayCircle,
//   ArrowRight,
//   Star,
//   Sparkles,
//   Video,
//   Clock,
//   TrendingUp,
//   Workflow,
//   MessageSquare,
//   BarChart3,
//   Users,
//   Youtube,
//   Zap,
//   Shield,
// } from "lucide-react";
// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { cn } from "@/lib/utils";

// const Home = () => {
//   const [activeTab, setActiveTab] = useState("creators");
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const userRole = useSelector((state) => state.user.role);
//   const navigate = useNavigate();
//   const { scrollYProgress } = useScroll();
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//   useEffect(() => {
//     if (userRole === "editor") {
//       navigate("/editor-dashboard");
//     } else if (userRole === "creator") {
//       navigate("/creator-dashboard");
//     }
//   }, [userRole, navigate]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Animated Counter Component
//   const AnimatedCounter = ({ value, duration = 2, suffix = "" }) => {
//     const nodeRef = useRef();
//     const inView = useInView(nodeRef, { once: true, margin: "-100px" });
//     const [hasAnimated, setHasAnimated] = useState(false);
//     const [displayValue, setDisplayValue] = useState("0");

//     useEffect(() => {
//       if (inView && !hasAnimated) {
//         setHasAnimated(true);
//         const targetValue = parseFloat(value.toString().replace(/[^0-9.]/g, ""));
//         const isDecimal = value.includes(".");
//         const hasK = value.includes("K");
//         const hasPercent = value.includes("%");
        
//         let startTime;
//         const animate = (currentTime) => {
//           if (!startTime) startTime = currentTime;
//           const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
          
//           // Easing function for smooth animation
//           const easeOutQuart = 1 - Math.pow(1 - progress, 4);
//           const current = targetValue * easeOutQuart;
          
//           let formatted;
//           if (hasK) {
//             formatted = `${Math.floor(current)}K`;
//           } else if (hasPercent) {
//             formatted = `${Math.floor(current)}%`;
//           } else if (isDecimal) {
//             formatted = current.toFixed(1);
//           } else {
//             formatted = Math.floor(current).toLocaleString();
//           }
          
//           setDisplayValue(formatted);
          
//           if (progress < 1) {
//             requestAnimationFrame(animate);
//           }
//         };
        
//         requestAnimationFrame(animate);
//       }
//     }, [inView, hasAnimated, value, duration]);

//     return (
//       <span ref={nodeRef}>
//         {displayValue}
//         {suffix}
//       </span>
//     );
//   };

//   const features = {
//     creators: [
//       {
//         icon: Upload,
//         title: "Instant Upload",
//         description: "Drag, drop, done. Smart compression keeps quality pristine while uploading 3x faster.",
//         color: "from-blue-500 to-cyan-500",
//       },
//       {
//         icon: Users,
//         title: "Find Your Editor",
//         description: "Match with vetted professionals based on style, niche, and budget in seconds.",
//         color: "from-purple-500 to-pink-500",
//       },
//       {
//         icon: Youtube,
//         title: "One-Click Publish",
//         description: "Direct integration with YouTube, TikTok, and Instagram. Schedule or go live instantly.",
//         color: "from-orange-500 to-red-500",
//       },
//       {
//         icon: MessageSquare,
//         title: "Real-Time Feedback",
//         description: "Annotate videos frame-by-frame. Your editor sees changes instantly—no more email chains.",
//         color: "from-green-500 to-emerald-500",
//       },
//       {
//         icon: Clock,
//         title: "Version History",
//         description: "Never lose a cut. Access every revision with timestamps and automatic backups.",
//         color: "from-indigo-500 to-blue-500",
//       },
//       {
//         icon: BarChart3,
//         title: "Analytics Dashboard",
//         description: "Track project status, deadlines, and performance metrics in one beautiful view.",
//         color: "from-yellow-500 to-orange-500",
//       },
//     ],
//     editors: [
//       {
//         icon: PenTool,
//         title: "Pro Tools",
//         description: "Industry-standard editing suite with AI-powered color grading and audio enhancement.",
//         color: "from-violet-500 to-purple-500",
//       },
//       {
//         icon: Layers,
//         title: "Project Hub",
//         description: "Manage multiple clients, track deadlines, and communicate—all in one workspace.",
//         color: "from-cyan-500 to-blue-500",
//       },
//       {
//         icon: Workflow,
//         title: "Smart Workflow",
//         description: "Automated file organization, render queues, and export presets save hours daily.",
//         color: "from-pink-500 to-rose-500",
//       },
//       {
//         icon: CheckCircle,
//         title: "Quality Control",
//         description: "Built-in error detection catches issues before export. Automated compliance checks included.",
//         color: "from-emerald-500 to-green-500",
//       },
//       {
//         icon: TrendingUp,
//         title: "Get Discovered",
//         description: "Showcase your portfolio. Get matched with creators actively seeking your expertise.",
//         color: "from-orange-500 to-amber-500",
//       },
//       {
//         icon: Shield,
//         title: "Secure Payment",
//         description: "Escrow protection, milestone payments, and instant payouts. Your work, your money, safe.",
//         color: "from-blue-500 to-indigo-500",
//       },
//     ],
//   };

//   const testimonials = [
//     {
//       quote: "Flare cut my production time in half. I went from 4 videos a month to 8—same quality, less stress.",
//       author: "Sarah Chen",
//       role: "Tech YouTuber",
//       subscribers: "2.4M",
//       avatar: "SC",
//       rating: 5,
//     },
//     {
//       quote: "Finally, a platform that respects editors. Fair pay, clear communication, and clients who value my work.",
//       author: "Marcus Rodriguez",
//       role: "Video Editor",
//       years: "8 years",
//       avatar: "MR",
//       rating: 5,
//     },
//     {
//       quote: "The feedback tools are insane. Frame-accurate annotations mean no more 'make it pop' confusion.",
//       author: "Zoe Williams",
//       role: "Content Creator",
//       subscribers: "890K",
//       avatar: "ZW",
//       rating: 5,
//     },
//   ];

//   const process = [
//     {
//       step: "01",
//       title: "Upload Raw Footage",
//       description: "Drag files or sync from cloud storage. Automatic organization by date and project.",
//       icon: Upload,
//     },
//     {
//       step: "02",
//       title: "Brief Your Editor",
//       description: "Use templates or custom guidelines. Share references, music, and brand assets.",
//       icon: FileVideo,
//     },
//     {
//       step: "03",
//       title: "Collaborate in Real-Time",
//       description: "Review drafts, leave timestamped notes, approve changes—all in your browser.",
//       icon: MessageSquare,
//     },
//     {
//       step: "04",
//       title: "Publish Everywhere",
//       description: "Export in any format or publish directly to your channels. We handle the tech.",
//       icon: Youtube,
//     },
//   ];

//   const stats = [
//     { number: "12", label: "Active Creators", suffix: "K+", icon: Users, color: "from-blue-500 to-cyan-500" },
//     { number: "84", label: "Videos Delivered", suffix: "K+", icon: Video, color: "from-purple-500 to-pink-500" },
//     { number: "4.9", label: "Average Rating", suffix: "/5", icon: Star, color: "from-yellow-500 to-orange-500" },
//     { number: "68", label: "Faster Production", suffix: "%", icon: Zap, color: "from-green-500 to-emerald-500" },
//   ];

//   const fadeInUp = {
//     initial: { opacity: 0, y: 30 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6, ease: "easeOut" },
//   };

//   const staggerContainer = {
//     animate: {
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   return (
//     <div className="relative bg-black text-white min-h-screen overflow-hidden">
//       {/* Animated Background Grid */}
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
//       </div>

//       {/* Gradient Orbs */}
//       <motion.div
//         className="fixed pointer-events-none z-0"
//         animate={{
//           x: mousePosition.x - 250,
//           y: mousePosition.y - 250,
//         }}
//         transition={{ type: "spring", damping: 30, stiffness: 200 }}
//       >
//         <div className="w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
//       </motion.div>
//       <div className="fixed top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px] z-0" />

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/5">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-3 group cursor-pointer">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-md group-hover:blur-lg transition-all" />
//                 <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
//                   <Video className="w-6 h-6 text-white" />
//                 </div>
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Flare
//               </span>
//             </div>

//             <div className="hidden md:flex items-center space-x-8">
//               <a
//                 href="#features"
//                 className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
//               >
//                 Features
//               </a>
//               <a
//                 href="#process"
//                 className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
//               >
//                 How it Works
//               </a>
//               <a
//                 href="#testimonials"
//                 className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
//               >
//                 Reviews
//               </a>
//               <Button
//                 onClick={() => navigate("/login")}
//                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-6 shadow-lg shadow-purple-500/25 transition-all hover:shadow-purple-500/40"
//               >
//                 Get Started
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative pt-24 pb-16 px-6 z-10">
//         <div className="container mx-auto text-center max-w-6xl">
//           <motion.div {...fadeInUp}>
//             <Badge className="mb-8 bg-white/5 border-white/10 text-white hover:bg-white/10 backdrop-blur-sm px-6 py-2.5 text-sm font-medium">
//               <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
//               Trusted by 12,000+ creators worldwide
//             </Badge>

//             <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[1.1] tracking-tight">
//               Video Production,
//               <br />
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Perfected
//               </span>
//             </h1>

//             <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
//               Connect creators with professional editors. Upload, collaborate, and publish 
//               <span className="text-white font-semibold"> 3x faster</span> than traditional workflows.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
//               <Button
//                 size="lg"
//                 onClick={() => navigate("/login")}
//                 className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-10 py-6 text-base font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all"
//               >
//                 <span className="relative z-10 flex items-center">
//                   Start Free Trial
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </span>
//               </Button>

//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-white/20 bg-white/5 hover:bg-white/10 rounded-full px-10 py-6 text-base backdrop-blur-sm group"
//               >
//                 <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//                 Watch Demo
//               </Button>
//             </div>

//             {/* Stats */}
//             <motion.div
//               className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
//               variants={staggerContainer}
//               initial="initial"
//               animate="animate"
//             >
//               {stats.map((stat, i) => (
//                 <motion.div
//                   key={i}
//                   variants={fadeInUp}
//                   className="group cursor-default"
//                 >
//                   <div className="relative h-full">
//                     <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
//                       {/* Icon */}
//                       <div className={cn(
//                         "mb-3 p-2.5 rounded-xl bg-gradient-to-br shadow-md",
//                         stat.color
//                       )}>
//                         <stat.icon className="w-5 h-5 text-white" />
//                       </div>
                      
//                       {/* Number */}
//                       <div className="text-3xl md:text-4xl font-bold text-white mb-1.5">
//                         <AnimatedCounter 
//                           value={stat.number} 
//                           suffix={stat.suffix}
//                         />
//                       </div>
                      
//                       {/* Label */}
//                       <div className="text-xs font-medium text-gray-400">{stat.label}</div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section id="process" className="relative py-16 px-6 z-10">
//         <div className="container mx-auto max-w-6xl">
//           <motion.div className="text-center mb-12" {...fadeInUp}>
//             <Badge className="mb-4 bg-purple-500/10 border-purple-500/20 text-purple-300">
//               Simple Process
//             </Badge>
//             <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
//               From Raw to{" "}
//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Ready
//               </span>
//             </h2>
//             <p className="text-base text-gray-400 max-w-2xl mx-auto">
//               Four steps to professional videos. No learning curve, no hassle.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
//             {process.map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1, duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="group relative"
//               >
//                 <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 h-full">
//                   {/* Step number and icon */}
//                   <div className="flex items-center justify-between mb-5">
//                     <span className="text-5xl font-bold text-white/10">
//                       {item.step}
//                     </span>
//                     <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl shadow-lg">
//                       <item.icon className="text-white w-5 h-5" />
//                     </div>
//                   </div>
                  
//                   {/* Content */}
//                   <h3 className="text-lg font-bold mb-2 text-white">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-400 leading-relaxed text-sm">
//                     {item.description}
//                   </p>
//                 </div>
                
//                 {/* Connector arrow */}
//                 {i < process.length - 1 && (
//                   <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-[2px] bg-gradient-to-r from-purple-500/40 to-transparent z-10">
//                     <ArrowRight className="absolute -right-1 -top-2 w-4 h-4 text-purple-500/40" />
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="relative py-16 px-6 z-10">
//         <div className="container mx-auto max-w-7xl">
//           <motion.div className="text-center mb-12" {...fadeInUp}>
//             <Badge className="mb-4 bg-blue-500/10 border-blue-500/20 text-blue-300">
//               Powerful Features
//             </Badge>
//             <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
//               Built for{" "}
//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Your Success
//               </span>
//             </h2>
//             <p className="text-base text-gray-400 max-w-2xl mx-auto">
//               Everything creators and editors need in one powerful platform.
//             </p>
//           </motion.div>

//           {/* Tab Selector */}
//           <div className="flex justify-center mb-12">
//             <div className="relative inline-flex bg-white/5 backdrop-blur-lg rounded-full p-1 border border-white/10">
//               <div
//                 className={cn(
//                   "absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 shadow-md",
//                   activeTab === "creators"
//                     ? "left-1 right-1/2 mr-0.5"
//                     : "left-1/2 right-1 ml-0.5"
//                 )}
//               />
//               {["creators", "editors"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={cn(
//                     "relative z-10 px-8 py-2.5 text-sm font-semibold transition-all rounded-full",
//                     activeTab === tab ? "text-white" : "text-gray-400"
//                   )}
//                 >
//                   For {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Feature Cards */}
//           <motion.div
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
//             variants={staggerContainer}
//             initial="initial"
//             animate="animate"
//             key={activeTab}
//           >
//             {features[activeTab].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 className="group relative"
//               >
//                 <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
//                   {/* Icon container */}
//                   <div className={cn(
//                     "bg-gradient-to-br p-3 rounded-xl inline-flex mb-4 shadow-md",
//                     feature.color
//                   )}>
//                     <feature.icon className="text-white w-5 h-5" />
//                   </div>
                  
//                   {/* Content */}
//                   <h3 className="text-lg font-bold mb-2 text-white">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-400 leading-relaxed text-sm">
//                     {feature.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section
//         id="testimonials"
//         className="relative py-16 px-6 z-10"
//       >
//         <div className="container mx-auto max-w-6xl relative">
//           <motion.div className="text-center mb-12" {...fadeInUp}>
//             <Badge className="mb-4 bg-pink-500/10 border-pink-500/20 text-pink-300">
//               Wall of Love
//             </Badge>
//             <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
//               Loved by{" "}
//               <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
//                 Thousands
//               </span>
//             </h2>
//             <p className="text-base text-gray-400">
//               Real creators. Real results. Real testimonials.
//             </p>
//           </motion.div>

//           <motion.div
//             className="grid md:grid-cols-3 gap-5"
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//           >
//             {testimonials.map((testimonial, i) => (
//               <motion.div
//                 key={i}
//                 variants={fadeInUp}
//                 className="group relative"
//               >
//                 <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 h-full flex flex-col">
//                   {/* Stars */}
//                   <div className="flex mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="w-4 h-4 text-yellow-400 fill-yellow-400"
//                       />
//                     ))}
//                   </div>
                  
//                   {/* Quote */}
//                   <p className="text-gray-300 mb-6 leading-relaxed flex-grow text-sm">
//                     "{testimonial.quote}"
//                   </p>
                  
//                   {/* Author */}
//                   <div className="flex items-center pt-4 border-t border-white/10">
//                     <div className="w-11 h-11 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center text-sm font-bold shadow-md mr-3">
//                       {testimonial.avatar}
//                     </div>
//                     <div>
//                       <p className="font-bold text-white text-sm">
//                         {testimonial.author}
//                       </p>
//                       <p className="text-gray-400 text-xs">
//                         {testimonial.role}
//                       </p>
//                       <p className="text-gray-500 text-xs">
//                         {testimonial.subscribers || testimonial.years}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative py-16 px-6 z-10">
//         <div className="container mx-auto text-center max-w-4xl">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl" />
//             <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16">
//               <h2 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight">
//                 Ready to{" "}
//                 <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                   Transform
//                 </span>
//                 <br />
//                 Your Workflow?
//               </h2>
//               <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
//                 Join 12,000+ creators and editors who've revolutionized their content production. Start free—no credit card required.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
//                 <Button
//                   size="lg"
//                   onClick={() => navigate("/login")}
//                   className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-10 py-6 text-base font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all"
//                 >
//                   <span className="relative z-10 flex items-center">
//                     Start Free Trial
//                     <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                   </span>
//                 </Button>

//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-white/20 bg-white/5 hover:bg-white/10 rounded-full px-10 py-6 text-base backdrop-blur-sm"
//                   onClick={() => navigate("/login")}
//                 >
//                   Talk to Sales
//                 </Button>
//               </div>

//               <p className="text-xs text-gray-500 font-medium">
//                 14-day free trial · No credit card required · Cancel anytime
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative border-t border-white/5 py-10 px-6 z-10">
//         <div className="container mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-center mb-6">
//             <div className="flex items-center space-x-3 mb-6 md:mb-0 group cursor-pointer">
//               <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
//                 <Video className="w-5 h-5 text-white" />
//               </div>
//               <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Flare
//               </span>
//             </div>
//             <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
//               <a
//                 href="#"
//                 className="hover:text-white transition-colors"
//               >
//                 Privacy Policy
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-white transition-colors"
//               >
//                 Terms of Service
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-white transition-colors"
//               >
//                 Contact Us
//               </a>
//             </div>
//           </div>
//           <div className="text-center text-gray-500 text-xs">
//             © {new Date().getFullYear()} Flare Technologies, Inc. All rights reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   Upload,
//   FileVideo,
//   CheckCircle,
//   Layers,
//   PenTool,
//   PlayCircle,
//   ArrowRight,
//   Star,
//   Sparkles,
//   Video,
//   Clock,
//   TrendingUp,
//   Workflow,
//   MessageSquare,
//   BarChart3,
//   Users,
//   Youtube,
//   Zap,
//   Shield,
//   Check,
//   ChevronRight,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { cn } from "@/lib/utils";

// const Home = () => {
//   const [activeTab, setActiveTab] = useState("creators");
//   const userRole = useSelector((state) => state.user.role);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (userRole === "editor") {
//       navigate("/editor-dashboard");
//     } else if (userRole === "creator") {
//       navigate("/creator-dashboard");
//     }
//   }, [userRole, navigate]);

//   const features = {
//     creators: [
//       {
//         icon: Upload,
//         title: "Instant Upload",
//         description: "Drag and drop your footage. Smart compression keeps quality pristine while uploading 3x faster.",
//       },
//       {
//         icon: Users,
//         title: "Match with Editors",
//         description: "Get paired with professional editors based on your style, niche, and budget in seconds.",
//       },
//       {
//         icon: Youtube,
//         title: "Direct Publishing",
//         description: "Publish to YouTube, TikTok, Instagram instantly. Schedule posts or go live right away.",
//       },
//       {
//         icon: MessageSquare,
//         title: "Real-Time Collaboration",
//         description: "Leave frame-accurate feedback. Your editor sees changes instantly—no more endless email threads.",
//       },
//       {
//         icon: Clock,
//         title: "Version Control",
//         description: "Access every revision with timestamps. Never worry about losing the perfect cut again.",
//       },
//       {
//         icon: BarChart3,
//         title: "Analytics Hub",
//         description: "Track project status, deadlines, and performance metrics all in one beautiful dashboard.",
//       },
//     ],
//     editors: [
//       {
//         icon: PenTool,
//         title: "Professional Suite",
//         description: "Industry-standard editing tools with AI-powered color grading and audio enhancement.",
//       },
//       {
//         icon: Layers,
//         title: "Project Management",
//         description: "Manage multiple clients seamlessly. Track deadlines and communicate in one workspace.",
//       },
//       {
//         icon: Workflow,
//         title: "Automated Workflow",
//         description: "Smart file organization, render queues, and export presets that save hours every day.",
//       },
//       {
//         icon: CheckCircle,
//         title: "Quality Assurance",
//         description: "Built-in error detection catches issues before export. Automated compliance checks included.",
//       },
//       {
//         icon: TrendingUp,
//         title: "Portfolio Showcase",
//         description: "Display your best work. Get matched with creators actively seeking your expertise.",
//       },
//       {
//         icon: Shield,
//         title: "Secure Payments",
//         description: "Escrow protection, milestone-based payments, and instant payouts keep your earnings safe.",
//       },
//     ],
//   };

//   const stats = [
//     { value: "12K+", label: "Active Users" },
//     { value: "50K+", label: "Videos Created" },
//     { value: "99.9%", label: "Uptime" },
//     { value: "4.9/5", label: "User Rating" },
//   ];

//   const workflow = [
//     {
//       number: "01",
//       title: "Upload",
//       description: "Drop your raw footage or sync from cloud storage",
//     },
//     {
//       number: "02",
//       title: "Collaborate",
//       description: "Work with your editor in real-time",
//     },
//     {
//       number: "03",
//       title: "Review",
//       description: "Approve changes with frame-accurate feedback",
//     },
//     {
//       number: "04",
//       title: "Publish",
//       description: "Go live across all platforms instantly",
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Sarah Chen",
//       role: "Tech Creator",
//       content: "Flare cut my production time in half. I went from 4 videos a month to 8—same quality, way less stress.",
//       avatar: "SC",
//     },
//     {
//       name: "Marcus Rodriguez",
//       role: "Video Editor",
//       content: "Finally, a platform built for editors. Fair pay, clear communication, and clients who value quality work.",
//       avatar: "MR",
//     },
//     {
//       name: "Zoe Williams",
//       role: "Content Creator",
//       content: "The feedback tools are game-changing. No more 'make it pop' confusion—just clear, actionable notes.",
//       avatar: "ZW",
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-2">
//               <div className="w-9 h-9 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center">
//                 <Video className="w-5 h-5 text-white" />
//               </div>
//               <span className="text-xl font-bold">Flare</span>
//             </div>

//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#features" className="text-slate-400 hover:text-white transition-colors text-sm">
//                 Features
//               </a>
//               <a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors text-sm">
//                 How it Works
//               </a>
//               <a href="#testimonials" className="text-slate-400 hover:text-white transition-colors text-sm">
//                 Testimonials
//               </a>
//               <Button
//                 onClick={() => navigate("/login")}
//                 className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white"
//               >
//                 Get Started
//               </Button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-6">
//         <div className="container mx-auto max-w-7xl">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Column */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Badge className="mb-6 bg-violet-500/10 text-violet-300 border-violet-500/20">
//                 <Sparkles className="w-3 h-3 mr-2" />
//                 The Future of Video Production
//               </Badge>

//               <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
//                 Create Videos
//                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
//                   3x Faster
//                 </span>
//               </h1>

//               <p className="text-xl text-slate-400 mb-8 leading-relaxed">
//                 Connect with professional editors, collaborate in real-time, and publish 
//                 to all platforms. The all-in-one solution for modern content creators.
//               </p>

//               <div className="flex flex-wrap gap-4 mb-12">
//                 <Button
//                   size="lg"
//                   onClick={() => navigate("/login")}
//                   className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-8 py-6 text-base"
//                 >
//                   Start Free Trial
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Button>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-slate-700 hover:bg-slate-800 px-8 py-6 text-black"
//                 >
//                   <PlayCircle className="mr-2 h-5 w-5" />
//                   Watch Demo
//                 </Button>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-2 gap-6">
//                 {stats.slice(0, 2).map((stat, i) => (
//                   <div key={i}>
//                     <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
//                     <div className="text-sm text-slate-500">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Right Column - Visual Element */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700">
//                 {/* Mock UI */}
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500" />
//                       <div>
//                         <div className="h-3 w-24 bg-slate-700 rounded mb-2" />
//                         <div className="h-2 w-16 bg-slate-800 rounded" />
//                       </div>
//                     </div>
//                     <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
//                       Live
//                     </div>
//                   </div>

//                   <div className="aspect-video bg-slate-950 rounded-xl flex items-center justify-center relative overflow-hidden">
//                     <PlayCircle className="w-16 h-16 text-slate-700" />
//                     <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-600" />
//                   </div>

//                   <div className="grid grid-cols-4 gap-2">
//                     {[...Array(4)].map((_, i) => (
//                       <div
//                         key={i}
//                         className="aspect-video bg-slate-800 rounded-lg"
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 {/* Floating badges */}
//                 <div className="absolute -top-4 -right-4 bg-slate-900 border border-slate-700 rounded-2xl p-4 shadow-xl">
//                   <div className="flex items-center space-x-2 mb-2">
//                     <CheckCircle className="w-4 h-4 text-green-400" />
//                     <span className="text-sm font-medium">Rendering</span>
//                   </div>
//                   <div className="text-2xl font-bold">87%</div>
//                 </div>
//               </div>

//               {/* Gradient orbs */}
//               <div className="absolute -z-10 top-1/4 -right-12 w-64 h-64 bg-violet-600/30 rounded-full blur-3xl" />
//               <div className="absolute -z-10 bottom-1/4 -left-12 w-64 h-64 bg-fuchsia-600/30 rounded-full blur-3xl" />
//             </motion.div>
//           </div>

//           {/* Bottom Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
//             {stats.map((stat, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 + i * 0.1 }}
//                 className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/50 transition-all"
//               >
//                 <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm text-slate-400">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How it Works */}
//       <section id="how-it-works" className="py-20 px-6 bg-slate-900/30">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-16">
//             <Badge className="mb-4 bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20">
//               Simple Process
//             </Badge>
//             <h2 className="text-4xl lg:text-5xl font-bold mb-4">
//               From Upload to Publish in{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
//                 4 Steps
//               </span>
//             </h2>
//             <p className="text-slate-400 text-lg max-w-2xl mx-auto">
//               Our streamlined workflow takes you from raw footage to published content faster than ever.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-8">
//             {workflow.map((step, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 className="relative"
//               >
//                 <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500/50 transition-all">
//                   <div className="text-5xl font-bold text-slate-800 mb-4">
//                     {step.number}
//                   </div>
//                   <h3 className="text-xl font-bold mb-2">{step.title}</h3>
//                   <p className="text-slate-400 text-sm">{step.description}</p>
//                 </div>

//                 {i < workflow.length - 1 && (
//                   <ChevronRight className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-slate-700" />
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section id="features" className="py-20 px-6">
//         <div className="container mx-auto max-w-7xl">
//           <div className="text-center mb-16">
//             <Badge className="mb-4 bg-violet-500/10 text-violet-300 border-violet-500/20">
//               Everything You Need
//             </Badge>
//             <h2 className="text-4xl lg:text-5xl font-bold mb-4">
//               Powerful Features for{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
//                 Everyone
//               </span>
//             </h2>
//           </div>

//           {/* Tabs */}
//           <div className="flex justify-center mb-12">
//             <div className="inline-flex bg-slate-900 border border-slate-800 rounded-xl p-1">
//               {["creators", "editors"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={cn(
//                     "px-6 py-2.5 rounded-lg text-sm font-medium transition-all",
//                     activeTab === tab
//                       ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white"
//                       : "text-slate-400 hover:text-white"
//                   )}
//                 >
//                   For {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Feature Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {features[activeTab].map((feature, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500/50 transition-all group"
//               >
//                 <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                   <feature.icon className="w-6 h-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                 <p className="text-slate-400 text-sm leading-relaxed">
//                   {feature.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section id="testimonials" className="py-20 px-6 bg-slate-900/30">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-16">
//             <Badge className="mb-4 bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20">
//               Testimonials
//             </Badge>
//             <h2 className="text-4xl lg:text-5xl font-bold mb-4">
//               Trusted by{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
//                 Creators Worldwide
//               </span>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6">
//             {testimonials.map((testimonial, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
//               >
//                 <div className="flex mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
//                   ))}
//                 </div>
//                 <p className="text-slate-300 mb-6 leading-relaxed">
//                   "{testimonial.content}"
//                 </p>
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
//                     {testimonial.avatar}
//                   </div>
//                   <div>
//                     <div className="font-semibold">{testimonial.name}</div>
//                     <div className="text-sm text-slate-500">{testimonial.role}</div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 px-6">
//         <div className="container mx-auto max-w-4xl">
//           <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl p-12 text-center relative overflow-hidden">
//             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgydjMwem0wIDMwdi0yaC0ydjJoMnptLTYgMGgtMnYyaDJ2LTJ6bTYtMzB2Mmgydi0yaC0yem0tNiAwaC0ydjJoMnYtMnptNiA2di0yaDJ2MmgtMnptLTYgMGgtMnYyaDJ2LTJ6bTYgNnYtMmgydjJoLTJ6bS02IDBoLTJ2Mmgydi0yem02IDZ2LTJoMnYyaC0yem0tNiAwaC0ydjJoMnYtMnptNiA2di0yaDJ2MmgtMnptLTYgMGgtMnYyaDJ2LTJ6bTYgNnYtMmgydjJoLTJ6bS02IDBoLTJ2Mmgydi0yem02LTI0di0yaDJ2MmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10" />
            
//             <div className="relative z-10">
//               <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//                 Ready to Transform Your Workflow?
//               </h2>
//               <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
//                 Join thousands of creators and editors who are creating better content, faster.
//               </p>

//               <div className="flex flex-wrap gap-4 justify-center">
//                 <Button
//                   size="lg"
//                   onClick={() => navigate("/login")}
//                   className="bg-white text-violet-600 hover:bg-slate-100 px-8 py-6 text-base font-semibold"
//                 >
//                   Start Free Trial
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Button>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-white/30 text-black hover:bg-white/10 px-8 py-6 text-base"
//                 >
//                   Contact Sales
//                 </Button>
//               </div>

//               <p className="text-sm text-violet-100 mt-6">
//                 No credit card required • 14-day free trial • Cancel anytime
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-slate-800 py-12 px-6">
//         <div className="container mx-auto max-w-7xl">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex items-center space-x-2 mb-6 md:mb-0">
//               <div className="w-9 h-9 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center">
//                 <Video className="w-5 h-5 text-white" />
//               </div>
//               <span className="text-xl font-bold">Flare</span>
//             </div>

//             <div className="flex space-x-8 text-slate-400 text-sm">
//               <a href="#" className="hover:text-white transition-colors">Privacy</a>
//               <a href="#" className="hover:text-white transition-colors">Terms</a>
//               <a href="#" className="hover:text-white transition-colors">Contact</a>
//             </div>
//           </div>

//           <div className="mt-8 text-center text-slate-500 text-sm">
//             © {new Date().getFullYear()} Flare. All rights reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Upload,
  FileVideo,
  CheckCircle,
  Layers,
  PenTool,
  PlayCircle,
  ArrowRight,
  Star,
  Sparkles,
  Video,
  Clock,
  TrendingUp,
  Workflow,
  MessageSquare,
  BarChart3,
  Users,
  Youtube,
  Zap,
  Shield,
  Check,
  ChevronRight,
  Film,
  Rocket,
  Globe,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";

const Home = () => {
  const [activeTab, setActiveTab] = useState("creators");
  const userRole = useSelector((state) => state.user.role);
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.95]);

  useEffect(() => {
    if (userRole === "editor") {
      navigate("/editor-dashboard");
    } else if (userRole === "creator") {
      navigate("/creator-dashboard");
    }
  }, [userRole, navigate]);

  const features = {
    creators: [
      {
        icon: Upload,
        title: "Lightning-Fast Upload",
        description: "Drag and drop your footage with smart compression. Upload 3x faster while maintaining pristine 4K quality.",
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: Users,
        title: "AI Editor Matching",
        description: "Get paired with vetted professional editors based on your style, niche, and budget in under 60 seconds.",
        color: "from-violet-500 to-purple-500",
      },
      {
        icon: Youtube,
        title: "Multi-Platform Publishing",
        description: "Publish to YouTube, TikTok, Instagram, and more. Schedule posts or go live instantly with one click.",
        color: "from-pink-500 to-rose-500",
      },
      {
        icon: MessageSquare,
        title: "Real-Time Collaboration",
        description: "Leave frame-accurate feedback with timestamps. See changes instantly—eliminate endless email threads.",
        color: "from-amber-500 to-orange-500",
      },
      {
        icon: Clock,
        title: "Version History",
        description: "Access every revision with automatic timestamps. Never lose the perfect cut or worry about overwrites.",
        color: "from-emerald-500 to-teal-500",
      },
      {
        icon: BarChart3,
        title: "Performance Analytics",
        description: "Track project status, deadlines, engagement metrics, and ROI all in one intuitive dashboard.",
        color: "from-indigo-500 to-blue-500",
      },
    ],
    editors: [
      {
        icon: PenTool,
        title: "Pro Editing Suite",
        description: "Industry-standard tools with AI-powered color grading, audio enhancement, and automated B-roll matching.",
        color: "from-violet-500 to-purple-500",
      },
      {
        icon: Layers,
        title: "Client Management",
        description: "Manage unlimited clients seamlessly. Track deadlines, revisions, and communicate in one organized workspace.",
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: Workflow,
        title: "Smart Automation",
        description: "Intelligent file organization, render queues, and custom export presets that save 10+ hours weekly.",
        color: "from-pink-500 to-rose-500",
      },
      {
        icon: CheckCircle,
        title: "Quality Control",
        description: "Built-in error detection catches issues pre-export. Automated compliance checks for every platform.",
        color: "from-emerald-500 to-teal-500",
      },
      {
        icon: TrendingUp,
        title: "Portfolio Builder",
        description: "Showcase your best work with custom reels. Get matched with creators actively seeking your expertise.",
        color: "from-amber-500 to-orange-500",
      },
      {
        icon: Shield,
        title: "Protected Payments",
        description: "Escrow protection, milestone-based releases, and instant payouts. Your earnings are always secure.",
        color: "from-indigo-500 to-blue-500",
      },
    ],
  };

  const stats = [
    { value: "12K+", label: "Active Creators", icon: Users },
    { value: "50K+", label: "Videos Delivered", icon: Video },
    { value: "99.9%", label: "Platform Uptime", icon: Zap },
    { value: "4.9★", label: "Average Rating", icon: Star },
  ];

  const workflow = [
    {
      number: "01",
      title: "Upload",
      description: "Drop your raw footage or sync from cloud storage in seconds",
      icon: Upload,
    },
    {
      number: "02",
      title: "Collaborate",
      description: "Work with your matched editor in real-time with live feedback",
      icon: MessageSquare,
    },
    {
      number: "03",
      title: "Review",
      description: "Approve changes with frame-accurate comments and version control",
      icon: CheckCircle,
    },
    {
      number: "04",
      title: "Publish",
      description: "Go live across all platforms instantly or schedule for later",
      icon: Rocket,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Tech YouTuber • 2.4M Subscribers",
      content: "Flare cut my production time in half. I went from 4 videos a month to 8—same quality, way less stress. The editor matching is incredible.",
      avatar: "SC",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      name: "Marcus Rodriguez",
      role: "Professional Video Editor",
      content: "Finally, a platform built for editors. Fair pay, clear communication, and clients who value quality work. I've tripled my income.",
      avatar: "MR",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Zoe Williams",
      role: "Content Creator • 890K Followers",
      content: "The feedback tools are game-changing. No more 'make it pop' confusion—just clear, actionable notes with timestamps. Pure magic.",
      avatar: "ZW",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-violet-950/20 to-slate-950" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-900/20 via-transparent to-transparent" />
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-2xl border-b border-white/5">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/50">
                  <Film className="w-5 h-5 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-xl blur opacity-50" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Flare
                </span>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-slate-300 hover:text-white transition-all duration-200 text-sm font-medium">
                  Features
                </a>
                <a href="#how-it-works" className="text-slate-300 hover:text-white transition-all duration-200 text-sm font-medium">
                  How it Works
                </a>
                <a href="#testimonials" className="text-slate-300 hover:text-white transition-all duration-200 text-sm font-medium">
                  Testimonials
                </a>
                <Button
                  onClick={() => navigate("/login")}
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-200"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ opacity, scale }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge className="mb-6 bg-violet-500/10 text-violet-300 border-violet-500/30 px-4 py-2 backdrop-blur-sm">
                    <Sparkles className="w-3.5 h-3.5 mr-2" />
                    The Future of Video Production
                  </Badge>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.1] tracking-tight"
                >
                  <span className="text-white">Create Videos</span>
                  <br />
                  <span className="inline-block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 animate-gradient">
                    3x Faster
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl font-light"
                >
                  Connect with professional editors, collaborate in real-time, and publish 
                  to all platforms. The all-in-one solution for modern content creators.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4 mb-12"
                >
                  <Button
                    size="lg"
                    onClick={() => navigate("/login")}
                    className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white px-8 py-7 text-base font-semibold shadow-2xl shadow-violet-500/50 hover:shadow-violet-500/70 transition-all duration-200 group"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-700/50 hover:bg-slate-800/50 backdrop-blur-sm px-8 py-7 text-base font-semibold text-black hover:border-slate-600 transition-all duration-200"
                  >
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-6 text-sm text-slate-400"
                >
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>14-day free trial</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Enhanced Visual */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <motion.div
                  animate={floatingAnimation}
                  className="relative"
                >
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/50" />
                        <div>
                          <div className="h-3 w-28 bg-slate-600/50 rounded-full mb-2" />
                          <div className="h-2 w-20 bg-slate-700/50 rounded-full" />
                        </div>
                      </div>
                      <div className="px-4 py-1.5 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold border border-green-500/30 backdrop-blur-sm">
                        ● Live
                      </div>
                    </div>

                    {/* Video Preview */}
                    <div className="aspect-video bg-slate-950/50 rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/5 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10" />
                      <PlayCircle className="w-20 h-20 text-slate-600 relative z-10" />
                      
                      {/* Progress bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-800">
                        <motion.div
                          className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600"
                          initial={{ width: "0%" }}
                          animate={{ width: "60%" }}
                          transition={{ duration: 2, delay: 1 }}
                        />
                      </div>

                      {/* Playhead marker */}
                      <motion.div
                        className="absolute bottom-0 w-0.5 h-full bg-white/50"
                        initial={{ left: "0%" }}
                        animate={{ left: "60%" }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                    </div>

                    {/* Timeline thumbnails */}
                    <div className="grid grid-cols-4 gap-3">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                          className="aspect-video bg-slate-800/50 rounded-lg border border-white/5 hover:border-violet-500/50 transition-all cursor-pointer"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Floating Stats Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Rendering</div>
                        <div className="text-xs text-slate-400">Final Export</div>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">87%</div>
                      <div className="text-sm text-slate-400">Complete</div>
                    </div>
                  </motion.div>

                  {/* Floating Comment Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="absolute -top-6 -right-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl max-w-[200px]"
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500" />
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-white">Editor</div>
                        <div className="text-xs text-slate-400">2 min ago</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300">"Added transitions at 0:45"</p>
                  </motion.div>
                </motion.div>

                {/* Gradient orbs */}
                <div className="absolute -z-10 top-1/4 -right-20 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
                <div className="absolute -z-10 bottom-1/4 -left-20 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl" />
              </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-32"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-violet-400 mb-3" />
                    <div className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="py-32 px-6 relative">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-6 bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30 px-4 py-2">
                  Simple Process
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                  From Upload to Publish in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                    4 Steps
                  </span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                  Our streamlined workflow takes you from raw footage to published content faster than ever.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflow.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="relative group"
                >
                  {/* Connector line */}
                  {i < workflow.length - 1 && (
                    <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-violet-500/50 to-transparent" />
                  )}

                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-fuchsia-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300 h-full">
                      {/* Icon */}
                      <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-violet-500/50 group-hover:scale-110 transition-transform">
                        <step.icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Step number */}
                      <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-700 mb-4 leading-none">
                        {step.number}
                      </div>

                      <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-32 px-6 relative">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-6 bg-violet-500/10 text-violet-300 border-violet-500/30 px-4 py-2">
                  Everything You Need
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                  Powerful Features for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                    Everyone
                  </span>
                </h2>
              </motion.div>
            </div>

            {/* Enhanced Tabs */}
            <div className="flex justify-center mb-16">
              <div className="inline-flex bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-1.5 shadow-2xl">
                {["creators", "editors"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 relative",
                      activeTab === tab
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    )}
                  >
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl shadow-lg shadow-violet-500/50"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">
                      For {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features[activeTab].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-300`} />
                  <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300 h-full">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-32 px-6 relative">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-6 bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30 px-4 py-2">
                  Testimonials
                </Badge>
                <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                  Trusted by{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                    Creators Worldwide
                  </span>
                </h2>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 rounded-2xl blur-2xl transition-all duration-300`} />
                  <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300">
                    {/* Stars */}
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-slate-300 mb-8 leading-relaxed text-base">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-sm font-bold mr-4 shadow-lg`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white text-base">{testimonial.name}</div>
                        <div className="text-sm text-slate-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl p-12 lg:p-16 text-center overflow-hidden">
                {/* Pattern overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
                
                <div className="relative z-10">
                  <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
                    Ready to Transform Your Workflow?
                  </h2>
                  <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                    Join thousands of creators and editors who are creating better content, faster.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center mb-8">
                    <Button
                      size="lg"
                      onClick={() => navigate("/login")}
                      className="bg-white text-violet-600 hover:bg-slate-50 px-10 py-7 text-base font-semibold shadow-2xl hover:shadow-white/20 transition-all duration-200 group"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 text-black hover:bg-white/10 backdrop-blur-sm px-10 py-7 text-base font-semibold transition-all duration-200"
                    >
                      Contact Sales
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-6 text-sm text-violet-100/90">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>14-day free trial</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>Cancel anytime</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-12 px-6 backdrop-blur-sm">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/50">
                  <Film className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Flare
                </span>
              </div>

              <div className="flex space-x-8 text-slate-400 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              </div>
            </div>

            <div className="mt-8 text-center text-slate-500 text-sm">
              © {new Date().getFullYear()} Flare. All rights reserved. Built for creators, by creators.
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;