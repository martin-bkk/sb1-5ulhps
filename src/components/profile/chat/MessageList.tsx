import React from 'react';
import { getImageUrl } from '../../../utils/dummyData';
import { Message } from '../../../types/chat';

interface MessageListProps {
  messages: Message[];
  isTyping: boolean;
}

export default function MessageList({ messages, isTyping }: MessageListProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-transparent">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div className={`flex gap-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
            {message.sender === 'creator' && (
              <img
                src={getImageUrl('profiles', 0)}
                alt="Creator"
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            <div>
              <div
                className={`p-3 rounded-xl ${
                  message.sender === 'user'
                    ? 'bg-pink-500 text-white rounded-tr-none'
                    : 'bg-purple-800/50 text-white rounded-tl-none'
                }`}
              >
                {message.content}
              </div>
              <div className={`flex items-center gap-2 mt-1 ${message.sender === 'user' ? 'justify-end' : ''}`}>
                <span className="text-purple-300 text-xs">
                  {formatTime(message.timestamp)}
                </span>
                {message.reactions.length > 0 && (
                  <div className="flex -space-x-1">
                    {message.reactions.map((reaction, index) => (
                      <span
                        key={index}
                        className="bg-purple-800/50 px-2 py-1 rounded-full text-xs animate-fade-in"
                      >
                        {reaction}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      {isTyping && (
        <div className="flex items-center gap-2">
          <img
            src={getImageUrl('profiles', 0)}
            alt="Creator"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="bg-purple-800/50 px-4 py-2 rounded-xl rounded-tl-none">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}