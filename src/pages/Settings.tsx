import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import SettingsTabs from '../components/settings/SettingsTabs';
import AccountTab from '../components/SettingsTabs/AccountTab';
import BioTab from '../components/SettingsTabs/BioTab';
import ContestTab from '../components/SettingsTabs/ContestTab';
import TokensTab from '../components/SettingsTabs/TokensTab';
import PrivacyTab from '../components/SettingsTabs/PrivacyTab';
import ShareTab from '../components/SettingsTabs/ShareTab';
import NotificationsTab from '../components/SettingsTabs/NotificationsTab';
import SubscriptionsTab from '../components/SettingsTabs/SubscriptionsTab';
import MembershipTab from '../components/SettingsTabs/MembershipTab';
import { TabType } from '../types/settings';

export default function Settings() {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('account');

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 pt-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Please sign in to access settings</h1>
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return <AccountTab />;
      case 'bio':
        return <BioTab />;
      case 'privacy':
        return <PrivacyTab />;
      case 'contest':
        return <ContestTab />;
      case 'tokens':
        return <TokensTab />;
      case 'share':
        return <ShareTab />;
      case 'membership':
        return <MembershipTab />;
      case 'notifications':
        return <NotificationsTab />;
      case 'subscriptions':
        return <SubscriptionsTab />;
      default:
        return <AccountTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 pt-10">
      <div className="max-w-3xl mx-auto px-4">
        <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="space-y-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}