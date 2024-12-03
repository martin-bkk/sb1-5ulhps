import React from 'react';
import { TabType } from '../../types/settings';
import { settingsTabs } from '../../constants/settings';

interface SettingsTabsProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function SettingsTabs({ activeTab, setActiveTab }: SettingsTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8 bg-purple-800/30 backdrop-blur-sm rounded-xl p-2">
      {settingsTabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-2 py-2 px-4 rounded-lg transition-colors ${
            activeTab === tab.id
              ? 'bg-pink-500 text-white'
              : 'text-white hover:bg-pink-500/20'
          }`}
        >
          {tab.icon}
          <span className="hidden sm:inline">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}