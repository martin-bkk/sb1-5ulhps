import { UserCircle, FileText, Settings, BarChart, Wallet, Share2, Users, Bell, CreditCard } from 'lucide-react';
import { TabType } from '../types/settings';

export const settingsTabs = [
  { id: 'account' as TabType, label: 'Account Settings', icon: <UserCircle className="w-4 h-4" /> },
  { id: 'bio' as TabType, label: 'Bio', icon: <FileText className="w-4 h-4" /> },
  { id: 'privacy' as TabType, label: 'Settings & Privacy', icon: <Settings className="w-4 h-4" /> },
  { id: 'contest' as TabType, label: 'Contest Stats', icon: <BarChart className="w-4 h-4" /> },
  { id: 'tokens' as TabType, label: 'Token Stats', icon: <Wallet className="w-4 h-4" /> },
  { id: 'share' as TabType, label: 'Share', icon: <Share2 className="w-4 h-4" /> },
  { id: 'membership' as TabType, label: 'Membership', icon: <Users className="w-4 h-4" /> },
  { id: 'notifications' as TabType, label: 'Notifications', icon: <Bell className="w-4 h-4" /> },
  { id: 'subscriptions' as TabType, label: 'Subscriptions', icon: <CreditCard className="w-4 h-4" /> }
] as const;