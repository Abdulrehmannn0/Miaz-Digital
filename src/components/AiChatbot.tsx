/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Cpu, 
  Sparkles, 
  RefreshCw, 
  ArrowRight,
  PhoneCall,
  User,
  ShieldCheck
} from 'lucide-react';

interface ChatMessage {
  sender: 'user' | 'model';
  text: string;
}

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'model', text: "Hello! I am TechGloze AI assistant. I can calculate cost estimates, detail our SEO strategies, explain Abdul Rehman's track record, or walk you through our custom automation systems. What project goals are we pursuing?" }
  ]);
  const [inputVal, setInputVal] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    "What is Abdul Rehman's background?",
    "Calculate custom Web App cost",
    "How does your SEO optimization work?"
  ];

  // Auto-scroll on new message entries
  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    // Add user message to history
    const userMsg: ChatMessage = { sender: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: messages.map(m => ({
            role: m.sender === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }]
          }))
        })
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      const replyMsg: ChatMessage = { sender: 'model', text: data.text };
      setMessages(prev => [...prev, replyMsg]);
    } catch (err: any) {
      const errorMsg: ChatMessage = { 
        sender: 'model', 
        text: `⚠️ connection issue. Please make sure that your GEMINI_API_KEY environment variable is configured correctly.\nDetails: ${err.message}` 
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputVal);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Launcher Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl shadow-blue-500/30 cursor-pointer border border-white/10 relative group"
        title="Consult our AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <X className="w-6 h-6" key="close-icon" />
          ) : (
            <MessageSquare className="w-6 h-6" key="chat-icon" />
          )}
        </AnimatePresence>
        
        {/* Soft glowing outer ring */}
        <span className="absolute inset-0 rounded-full border border-blue-400 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 pointer-events-none" />
      </motion.button>

      {/* Expanded Chat Console Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="absolute bottom-16 right-0 w-[350px] sm:w-[400px] h-[520px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left"
          >
            
            {/* Header banner */}
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-blue-600/20 text-blue-400">
                  <Cpu className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display font-black text-xs uppercase tracking-wider">TechGloze Expert AI</h3>
                  <div className="flex items-center gap-1 text-[9px] text-emerald-400 font-bold tracking-widest mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>SECURE GEMINI DIRECT</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages box container */}
            <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-4 bg-slate-50 dark:bg-slate-950/20">
              {messages.map((m, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-2.5 items-start max-w-[85%] ${
                    m.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
                  }`}
                >
                  <div className={`p-2 rounded-lg shrink-0 ${
                    m.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white dark:bg-slate-900 text-slate-500 border border-slate-200/50 dark:border-slate-800/50'
                  }`}>
                    {m.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Cpu className="w-3.5 h-3.5" />}
                  </div>
                  
                  <div className={`p-3 rounded-2xl text-xs leading-relaxed shadow-sm ${
                    m.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-800 rounded-tl-none'
                  }`}>
                    <p className="whitespace-pre-line">{m.text}</p>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex gap-2.5 items-start max-w-[85%]">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-900 text-slate-500 border border-slate-200/50 dark:border-slate-800/50 shrink-0">
                    <Cpu className="w-3.5 h-3.5 animate-spin" />
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-tl-none flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              <div ref={chatBottomRef} />
            </div>

            {/* Quick replies block */}
            {messages.length === 1 && (
              <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-1.5 shrink-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Suggested Inquiries:</span>
                <div className="flex flex-col gap-1">
                  {quickReplies.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(q)}
                      className="text-left px-3 py-1.5 bg-slate-50 dark:bg-slate-800 hover:bg-blue-600 hover:text-white rounded-lg text-3xs font-semibold text-slate-600 dark:text-slate-300 transition-colors border border-slate-100 dark:border-slate-800 cursor-pointer"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form footer row */}
            <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 shrink-0">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask our AI assistant direct..."
                className="flex-grow bg-slate-50 dark:bg-slate-950/20 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={() => handleSendMessage(inputVal)}
                disabled={loading || !inputVal.trim()}
                className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-md shadow-blue-500/20 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4.5 h-4.5" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
