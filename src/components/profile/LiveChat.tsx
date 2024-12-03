import React, { useState, useRef, useEffect } from 'react';
import { Message, FloatingEmoji } from '../../types/chat';
import ChatHeader from './chat/ChatHeader';
import ChatInput from './chat/ChatInput';
import QuickReactions from './chat/QuickReactions';
import MessageList from './chat/MessageList';

interface LiveChatProps {
  containerWidth: number;
  dividerPosition: number;
}

const SAMPLE_MESSAGES: Message[] = [
  {
    id: '1',
    content: "Hey everyone! Welcome to my live chat! 💖",
    sender: 'creator',
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    reactions: ['❤️', '👋']
  },
  {
    id: '2',
    content: "Love your content! You're amazing!",
    sender: 'user',
    timestamp: new Date(Date.now() - 1000 * 60 * 4),
    reactions: ['❤️']
  },
  {
    id: '3',
    content: "Thank you so much! Don't forget to check out my latest photos 📸",
    sender: 'creator',
    timestamp: new Date(Date.now() - 1000 * 60 * 3),
    reactions: ['🔥', '😍']
  }
];

export default function LiveChat({ containerWidth, dividerPosition }: LiveChatProps) {
  const [messages, setMessages] = useState<Message[]>(SAMPLE_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const [floatingEmojis, setFloatingEmojis] = useState<FloatingEmoji[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addFloatingEmoji = (emoji: string) => {
    const id = Date.now().toString();
    const x = Math.random() * (chatContainerRef.current?.offsetWidth || 300);
    const y = chatContainerRef.current?.offsetHeight || 400;

    setFloatingEmojis(prev => [...prev, { id, emoji, x, y }]);

    setTimeout(() => {
      setFloatingEmojis(prev => prev.filter(e => e.id !== id));
    }, 3000);
  };

  const handleQuickReaction = (emoji: string) => {
    addFloatingEmoji(emoji);
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.sender === 'creator') {
      setMessages(prev => prev.map(msg => 
        msg.id === lastMessage.id 
          ? { ...msg, reactions: [...new Set([...msg.reactions, emoji])] }
          : msg
      ));
    }
  };

  const handleSendMessage = (content: string) => {
    const message: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
      reactions: []
    };
    setMessages([...messages, message]);

    // Simulate creator typing
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const response: Message = {
        id: (Date.now() + 1).toString(),
        content: "Thanks for your message! 💕",
        sender: 'creator',
        timestamp: new Date(),
        reactions: []
      };
      setMessages(prev => [...prev, response]);
    }, 2000);
  };

  return (
    <div 
      ref={chatContainerRef}
      className="bg-purple-900/30 backdrop-blur-sm w-full lg:w-auto h-full relative"
      style={{ 
        width: window.innerWidth >= 1024 ? containerWidth - dividerPosition - 4 : '100%'
      }}
    >
      <div className="flex flex-col h-full">
        <ChatHeader />
        <QuickReactions onReaction={handleQuickReaction} />

        {/* Floating Emojis */}
        {floatingEmojis.map(({ id, emoji, x, y }) => (
          <div
            key={id}
            className="absolute text-2xl pointer-events-none animate-float"
            style={{
              left: x,
              bottom: y,
              animation: 'float 3s ease-out forwards'
            }}
          >
            {emoji}
          </div>
        ))}

        <MessageList 
          messages={messages}
          isTyping={isTyping}
        />
        <div ref={messagesEndRef} />

        <ChatInput 
          onSendMessage={handleSendMessage}
          onEmojiSelect={addFloatingEmoji}
        />
      </div>
    </div>
  );
}