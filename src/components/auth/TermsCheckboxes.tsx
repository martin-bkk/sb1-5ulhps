import React from 'react';
import { Link } from 'react-router-dom';

interface TermsCheckboxesProps {
  formData: any;
  setFormData: (data: any) => void;
}

export default function TermsCheckboxes({ formData, setFormData }: TermsCheckboxesProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="terms"
          checked={formData.termsAccepted}
          onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
          className="w-4 h-4 rounded border-white/20 text-pink-500 focus:ring-pink-500 focus:ring-offset-0 bg-white/10"
        />
        <label htmlFor="terms" className="text-sm text-purple-200">
          I have read and agree to the <Link to="/terms" className="text-pink-400 hover:text-pink-300">terms and conditions</Link>
        </label>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="privacy"
          checked={formData.privacyAccepted}
          onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
          className="w-4 h-4 rounded border-white/20 text-pink-500 focus:ring-pink-500 focus:ring-offset-0 bg-white/10"
        />
        <label htmlFor="privacy" className="text-sm text-purple-200">
          I have read and agree to the <Link to="/privacy" className="text-pink-400 hover:text-pink-300">privacy policy</Link>
        </label>
      </div>
    </div>
  );
}