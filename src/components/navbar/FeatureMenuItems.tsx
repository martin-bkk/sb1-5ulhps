import React from 'react';
import { TrendingUp, History, MessageCircle, Settings, ShoppingBag } from 'lucide-react';

export const featureMenuItems = [
  { icon: <TrendingUp className="w-4 h-4" />, label: 'Trending Posts', path: '/trending' },
  { icon: <History className="w-4 h-4" />, label: 'Watch History', path: '/history' },
  { icon: <MessageCircle className="w-4 h-4" />, label: 'Private Chats', path: '/chats' },
  { icon: <Settings className="w-4 h-4" />, label: 'Account Settings', path: '/settings', requiresAuth: true },
  { icon: <ShoppingBag className="w-4 h-4" />, label: 'Merch', path: '/merch' }
];