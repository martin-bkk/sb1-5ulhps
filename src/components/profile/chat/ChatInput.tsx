import React, { useState } from 'react';
import { Smile, Send, Image as ImageIcon, X } from 'lucide-react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onEmojiSelect: (emoji: string) => void;
}

export default function ChatInput({ onSendMessage, onEmojiSelect }: ChatInputProps) {
  const [newMessage, setNewMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  const handleEmojiSelect = (emoji: any) => {
    setNewMessage(prev => prev + emoji.native);
    onEmojiSelect(emoji.native);
    setShowEmojiPicker(false);
  };

  return (
    <div className="border-t border-white/10 p-4">
      <div className="flex gap-2">
        <div className="relative">
          <button 
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="p-2 text-purple-200 hover:text-pink-400 hover:bg-white/5 rounded-lg transition-colors"
          >
            <Smile className="w-5 h-5" />
          </button>
          {showEmojiPicker && (
            <div className="absolute bottom-full left-0 mb-2">
              <div className="relative">
                <button
                  onClick={() => setShowEmojiPicker(false)}
                  className="absolute right-2 top-2 p-1 rounded-full bg-white/10 hover:bg-white/20 text-white z-10"
                >
                  <X className="w-4 h-4" />
                </button>
                <Picker
                  data={data}
                  onEmojiSelect={handleEmojiSelect}
                  theme="dark"
                  previewPosition="none"
                  skinTonePosition="none"
                  maxFrequentRows={2}
                  perLine={8}
                  emojiSize={24}
                  emojiButtonSize={32}
                  navPosition="bottom"
                  searchPosition="sticky"
                />
              </div>
            </div>
          )}
        </div>
        <button className="p-2 text-purple-200 hover:text-pink-400 hover:bg-white/5 rounded-lg transition-colors">
          <ImageIcon className="w-5 h-5" />
        </button>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
          className="flex-grow px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-pink-500"
        />
        <button
          onClick={handleSend}
          className="p-2 text-white bg-pink-500 rounded-xl hover:bg-pink-600 transition-colors disabled:opacity-50"
          disabled={!newMessage.trim()}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}