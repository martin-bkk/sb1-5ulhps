import React from 'react';
import { Bell } from 'lucide-react';

interface NewsletterCheckboxProps {
  formData: any;
  setFormData: (data: any) => void;
}

export default function NewsletterCheckbox({ formData, setFormData }: NewsletterCheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id="newsletter"
        checked={formData.newsletter}
        onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
        className="w-4 h-4 rounded border-white/20 text-pink-500 focus:ring-pink-500 focus:ring-offset-0 bg-white/10"
      />
      <div className="flex items-center gap-2">
        <Bell className="w-4 h-4 text-purple-200" />
        <label htmlFor="newsletter" className="text-sm text-purple-200">
          Subscribe to our newsletter
        </label>
      </div>
    </div>
  );
}