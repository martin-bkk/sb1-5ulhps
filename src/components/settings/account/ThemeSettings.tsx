import React from 'react';
import { HexColorPicker } from 'react-colorful';

interface ThemeSettingsProps {
  theme: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
  };
  onChange: (theme: ThemeSettingsProps['theme']) => void;
}

export default function ThemeSettings({ theme, onChange }: ThemeSettingsProps) {
  const [activeColor, setActiveColor] = React.useState<keyof ThemeSettingsProps['theme'] | null>(null);

  return (
    <div className="bg-white/5 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Theme Settings</h2>
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(theme).map(([key, value]) => (
          <div key={key}>
            <label className="block text-sm font-medium text-purple-200 mb-2">
              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveColor(activeColor === key ? null : key as keyof ThemeSettingsProps['theme'])}
                className="w-full h-10 rounded-lg border-2 border-white/20"
                style={{ backgroundColor: value }}
              />
              {activeColor === key && (
                <div className="absolute z-10 top-full left-0 mt-2">
                  <HexColorPicker
                    color={value}
                    onChange={(newColor) => {
                      onChange({
                        ...theme,
                        [key]: newColor
                      });
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}