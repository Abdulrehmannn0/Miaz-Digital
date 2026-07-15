/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Paperclip, 
  Smile, 
  User, 
  ShieldAlert, 
  Sparkles, 
  MoreHorizontal,
  Phone,
  Video,
  FileText
} from 'lucide-react';
import { Message } from '../../types/dashboard';

interface MessagesTabProps {
  messages: Message[];
  onSendMessage: (text: string, sender: Message['sender']) => void;
}

export default function MessagesTab({
  messages,
  onSendMessage
}: MessagesTabProps) {
  const [activeChannel, setActiveChannel] = useState<'general' | 'direct' | 'alerts'>('general');
  const [typedText, setTypedText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const channels = [
    { id: 'general', label: '# general-staging', desc: 'Main engineering discussions & wireframe review.' },
    { id: 'direct', label: 'Azhar Uddin (Direct)', desc: 'Assigned Project Manager private line.' },
    { id: 'alerts', label: 'Console System Log', desc: 'Automated deployment alerts & Lighthouse pings.' }
  ];

  const quickEmojis = ['👍', '🙌', '🔥', '🚀', '⭐', '❤️', '👀', '🎉'];

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedText.trim()) return;

    // Send Client Message
    onSendMessage(typedText, 'client');
    setTypedText('');
    setShowEmojiPicker(false);

    // Simulate Azhar Uddin replying back after 1.5 seconds!
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      
      const responses = [
        "Received! I am syncing this feedback with our component matrices right now. Looks very solid.",
        "That matches our timeline perfectly. I've updated the task priority to Urgent so we lock this down before Friday.",
        "Excellent points, John. Let's cover this horizontal slide horizontal scrolling detail in our sync call tomorrow.",
        "Perfect. Pushed the staging build logs into the deliverables shelf. Let me know what you think!",
        "Thanks for the update. Our backend pipelines are synchronized and nominal."
      ];
      const randomReply = responses[Math.floor(Math.random() * responses.length)];
      
      onSendMessage(randomReply, 'manager');
    }, 1800);
  };

  const handleSelectEmoji = (emoji: string) => {
    setTypedText(prev => prev + emoji);
  };

  const handleAttachMockFile = () => {
    onSendMessage("📎 Shared design_assets_revised.png (1.2 MB)", 'client');
  };

  return (
    <div className="space-y-6 text-left">
      <div>
        <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mb-2">Workspace Conversations</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Secure real-time message stream synced with Azhar Uddin and the Niaz Digital development pipelines.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch h-[600px] border border-slate-100 dark:border-[#1F2937] rounded-3xl overflow-hidden bg-white dark:bg-[#0D1117] shadow-xs">
        
        {/* Left Side Channels Selector */}
        <div className="col-span-1 lg:col-span-4 border-r border-slate-100 dark:border-[#1F2937] flex flex-col bg-slate-50/40 dark:bg-slate-950/20">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800/80">
            <span className="text-3xs uppercase font-extrabold tracking-wider text-slate-400">Workspace Streams</span>
          </div>

          <div className="p-2 flex-grow space-y-1">
            {channels.map(ch => {
              const isActive = activeChannel === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveChannel(ch.id as any)}
                  className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-650 dark:text-slate-300'
                  }`}
                >
                  <span className="text-xs font-bold block">{ch.label}</span>
                  <p className={`text-[10px] mt-1 leading-normal line-clamp-1 ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                    {ch.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Connected roster status */}
          <div className="p-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs shrink-0 relative">
              AU
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-[#0D1117] rounded-full animate-pulse" />
            </div>
            <div>
              <span className="text-2xs font-extrabold text-slate-800 dark:text-white block">Azhar Uddin</span>
              <span className="text-4xs text-emerald-500 block">Staging Online</span>
            </div>
          </div>
        </div>

        {/* Right Side Chat Feed */}
        <div className="col-span-1 lg:col-span-8 flex flex-col h-full">
          
          {/* Active Channel Header */}
          <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between bg-slate-50/30 dark:bg-slate-900/10">
            <div>
              <span className="text-xs font-bold text-slate-800 dark:text-white">
                {channels.find(c => c.id === activeChannel)?.label}
              </span>
              <p className="text-[10px] text-slate-400 mt-0.5">
                {channels.find(c => c.id === activeChannel)?.desc}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() => alert('Opening Voice dialer')} className="p-2 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-slate-500 cursor-pointer"><Phone className="w-3.5 h-3.5" /></button>
              <button onClick={() => alert('Initializing Screen Sync')} className="p-2 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-slate-500 cursor-pointer"><Video className="w-3.5 h-3.5" /></button>
            </div>
          </div>

          {/* Messages Stream Container */}
          <div className="flex-grow p-5 overflow-y-auto space-y-4">
            
            {activeChannel === 'alerts' ? (
              /* Alerts channel mock logs */
              <div className="space-y-3 font-mono text-[10px] text-left">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-slate-500 space-y-1">
                  <span className="text-emerald-500 font-bold">[NOMINAL] 2026-07-15 09:20:41</span>
                  <p>React staging sandbox assembled successfully. All packages cached. SSL certificates locked.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-slate-500 space-y-1">
                  <span className="text-blue-500 font-bold">[NOTIFY] 2026-07-15 08:00:15</span>
                  <p>Google Workspace OAuth credentials refreshed. Meeting pipelines bound.</p>
                </div>
              </div>
            ) : (
              /* Standard chat threads */
              <>
                {messages.map((msg) => {
                  const isMe = msg.sender === 'client';
                  const isSystem = msg.sender === 'system';

                  if (isSystem) {
                    return (
                      <div key={msg.id} className="flex justify-center my-2">
                        <span className="px-3 py-1 bg-slate-50 dark:bg-slate-900 border border-slate-150 dark:border-slate-850 rounded-full text-5xs font-bold uppercase tracking-widest text-slate-400">
                          {msg.text}
                        </span>
                      </div>
                    );
                  }

                  return (
                    <div 
                      key={msg.id} 
                      className={`flex gap-3 max-w-[80%] ${isMe ? 'ml-auto flex-row-reverse text-right' : 'mr-auto text-left'}`}
                    >
                      {/* Avatar */}
                      <div className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${isMe ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700'}`}>
                        {isMe ? 'ME' : 'AU'}
                      </div>

                      <div className="space-y-1">
                        {/* Name and stamp */}
                        <div className="flex items-center gap-1.5 text-4xs text-slate-400 font-bold">
                          <span>{msg.senderName}</span>
                          <span className="font-mono font-normal">&bull; {msg.timestamp}</span>
                        </div>

                        {/* Speech Bubble */}
                        <div 
                          className={`p-3 rounded-2xl text-xs leading-relaxed inline-block ${
                            isMe 
                              ? 'bg-blue-600 text-white rounded-tr-none' 
                              : 'bg-slate-50 dark:bg-[#161B22] border border-slate-150 dark:border-slate-800/80 rounded-tl-none text-slate-800 dark:text-slate-200'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Live typing indicator animation */}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="flex gap-3 items-center text-left"
                    >
                      <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-750 flex items-center justify-center font-bold text-xs shrink-0">
                        AU
                      </div>
                      <div className="space-y-1">
                        <span className="text-4xs text-slate-400 font-bold">Azhar Uddin typing...</span>
                        <div className="bg-slate-50 dark:bg-[#161B22] border border-slate-150 dark:border-slate-800/80 px-3 py-2.5 rounded-2xl rounded-tl-none flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick emoji selection and quick attachments */}
          <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/20 dark:bg-slate-900/5 flex items-center justify-between">
            <div className="flex gap-1">
              {quickEmojis.map(emoji => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => handleSelectEmoji(emoji)}
                  className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-3xs cursor-pointer"
                >
                  {emoji}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="p-1 text-slate-400 hover:text-slate-650 rounded text-3xs cursor-pointer flex items-center gap-1"
            >
              <Smile className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-5xs uppercase tracking-wider font-extrabold">All Emojis</span>
            </button>
          </div>

          {/* Message Input Box Form */}
          <form onSubmit={handleSendSubmit} className="p-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 bg-slate-50/50 dark:bg-slate-950/20 shrink-0">
            <button
              type="button"
              onClick={handleAttachMockFile}
              className="p-2.5 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-slate-400 cursor-pointer"
              title="Attach File"
            >
              <Paperclip className="w-4 h-4" />
            </button>

            <input 
              type="text"
              value={typedText}
              onChange={(e) => setTypedText(e.target.value)}
              placeholder="Stream response to Azhar Uddin..."
              className="flex-grow px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold focus:outline-none focus:border-blue-500 text-slate-850 dark:text-white"
            />

            <button
              type="submit"
              className="p-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </div>
  );
}
