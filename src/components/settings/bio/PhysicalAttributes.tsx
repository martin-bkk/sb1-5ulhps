import React from 'react';

interface PhysicalAttributesProps {
  formData: {
    bodyType: string;
    smokeDrink: string;
    bodyModification: string;
    hairStyle: string;
    hairColor: string;
    eyeColor: string;
  };
  onChange: (field: string, value: string) => void;
}

export default function PhysicalAttributes({ formData, onChange }: PhysicalAttributesProps) {
  const attributes = {
    bodyType: ['Average', 'Curvy', 'Heavyset', 'Muscular', 'Skinny', 'Slim', 'Prefer not to say'],
    smokeDrink: ['No', 'Yes', 'Occasionally', 'Prefer not to say'],
    bodyModification: ['Body Piercing', 'Tattoo', 'Prefer not to say'],
    hairStyle: ['Straight', 'Wavy', 'Curly', 'Ponytail', 'Bun', 'Short', 'Prefer not to say'],
    hairColor: ['Black', 'Blonde', 'Brown', 'Gray', 'Red', 'White', 'Prefer not to say'],
    eyeColor: ['Amber', 'Blue', 'Brown', 'Gray', 'Green', 'Hazel', 'Prefer not to say']
  };

  return (
    <div className="bg-white/5 rounded-xl p-4 md:p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Physical Attributes</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(attributes).map(([key, options]) => (
          <div key={key}>
            <label className="block text-sm font-medium text-purple-200 mb-1">
              {key.split(/(?=[A-Z])/).join(' ')}
            </label>
            <select
              value={formData[key as keyof typeof formData]}
              onChange={(e) => onChange(key, e.target.value)}
              className="w-full px-4 py-2 bg-purple-800/50 border border-white/20 rounded-xl text-white"
              style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
            >
              {options.map(option => (
                <option 
                  key={option} 
                  value={option}
                  className="bg-purple-800 text-white"
                >
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}