import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useBioSettings } from '../../hooks/useBioSettings';
import ModernDatePicker from 'react-modern-calendar-datepicker';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import BasicInformation from '../settings/bio/BasicInformation';
import PhysicalAttributes from '../settings/bio/PhysicalAttributes';
import AboutMe from '../settings/bio/AboutMe';

export default function BioTab() {
  const { currentUser } = useAuth();
  const { loading, saveSettings } = useBioSettings();

  const [formData, setFormData] = useState({
    realName: '',
    birthDate: '',
    country: '',
    city: '',
    bodyType: 'Average',
    smokeDrink: 'No',
    bodyModification: 'Prefer not to say',
    hairStyle: 'Prefer not to say',
    hairColor: 'Prefer not to say',
    eyeColor: 'Prefer not to say',
    bio: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveSettings(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pb-12">
      <BasicInformation 
        formData={formData} 
        onChange={handleChange} 
      />
      
      <PhysicalAttributes 
        formData={formData} 
        onChange={handleChange} 
      />
      
      <AboutMe 
        bio={formData.bio} 
        onChange={(value) => handleChange('bio', value)} 
      />

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading || formData.bio.length < 100}
          className="w-48 bg-pink-500 text-white px-8 py-3 rounded-xl hover:bg-pink-600 transition-colors disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
}