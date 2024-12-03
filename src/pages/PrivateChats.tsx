import React from 'react';
import { MessageCircle, Phone, Video, Star, Search } from 'lucide-react';
import { getImageUrl } from '../utils/dummyData';

// Dummy chats data
const chats = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Creator ${i + 1}`,
  lastMessage: i % 2 === 0 ? 'Thanks for subscribing! 💖' : 'Hey, how are you?',
  timestamp: new Date(Date.now() - Math.random() * 10000000000),
  imageUrl: getImageUrl('profiles', i),
  unread: Math.floor(Math.random() * 5),
  online: Math.random() > 0.5,
  favorite: i < 3
}));

export default function PrivateChats() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Chat List */}
          <div className="lg:col-span-1 border-r border-white/10">
            <div className="p-4">
              <h1 className="text-2xl font-bold text-white mb-4">Messages</h1>
              
              {/* Search */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search chats..."
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-white/50" />
              </div>

              {/* Chat List */}
              <div className="space-y-2">
                {chats.map((chat) => (
                  <div
                    key={chat.id}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div className="relative">
                      <img
                        src={chat.imageUrl}
                        alt={chat.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {chat.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-purple-900" />
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-medium truncate">{chat.name}</h3>
                        <span className="text-purple-200 text-xs">
                          {chat.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <p className="text-purple-200 text-sm truncate">{chat.lastMessage}</p>
                    </div>
                    {chat.unread > 0 && (
                      <div className="bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {chat.unread}
                      </div>
                    )}
                    {chat.favorite && (
                      <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-3 h-[calc(100vh-5rem)] flex flex-col">
            <div className="border-b border-white/10 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={chats[0].imageUrl}
                    alt={chats[0].name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-white font-medium">{chats[0].name}</h2>
                    <p className="text-green-500 text-sm">Online</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-white/60 hover:text-white rounded-full hover:bg-white/5">
                    <Phone className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-white/60 hover:text-white rounded-full hover:bg-white/5">
                    <Video className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-white/60 hover:text-white rounded-full hover:bg-white/5">
                    <Star className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-4">
              <div className="flex flex-col gap-4">
                <div className="self-start max-w-[80%]">
                  <div className="bg-white/10 rounded-2xl rounded-tl-none p-3">
                    <p className="text-white">Hey! Thanks for subscribing to my content! 💖</p>
                  </div>
                  <span className="text-purple-200 text-xs mt-1">10:30 AM</span>
                </div>
                <div className="self-end max-w-[80%]">
                  <div className="bg-pink-500 rounded-2xl rounded-tr-none p-3">
                    <p className="text-white">You're welcome! Love your content!</p>
                  </div>
                  <span className="text-purple-200 text-xs mt-1 float-right">10:32 AM</span>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="border-t border-white/10 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-grow px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50"
                />
                <button className="bg-pink-500 text-white p-2 rounded-xl hover:bg-pink-600 transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}