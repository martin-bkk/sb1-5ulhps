import React from 'react';

interface BasicInformationProps {
  formData: {
    realName: string;
    birthDate: string;
    country: string;
    city: string;
  };
  onChange: (field: string, value: string) => void;
}

export default function BasicInformation({ formData, onChange }: BasicInformationProps) {
  return (
    <div className="bg-white/5 rounded-xl p-4 md:p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Basic Information</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-purple-200 mb-1">
            Real Name
          </label>
          <input
            type="text"
            value={formData.realName}
            onChange={(e) => onChange('realName', e.target.value)}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-200 mb-1">
            Birth Date
          </label>
          <input
            type="date"
            value={formData.birthDate}
            onChange={(e) => onChange('birthDate', e.target.value)}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-200 mb-1">
            Country
          </label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) => onChange('country', e.target.value)}
            placeholder="Enter your country"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-200 mb-1">
            City
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => onChange('city', e.target.value)}
            placeholder="Enter your city"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white"
          />
        </div>
      </div>
    </div>
  );
}