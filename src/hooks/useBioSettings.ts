import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

export interface BioFormData {
  realName: string;
  birthDate: string;
  location: string;
  type: string;
  bodyType: string;
  smokeDrink: string;
  bodyDecorations: string;
  bio: string;
  interests: string[];
  newsletter: boolean;
  theme: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
  };
}

export function useBioSettings() {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (file: File, type: 'avatar' | 'banner') => {
    if (!currentUser) return;

    try {
      setLoading(true);
      const fileExt = file.name.split('.').pop();
      const filePath = `${type}/${currentUser.id}/${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('profile-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('profile-images')
        .getPublicUrl(filePath);

      await supabase
        .from('profiles')
        .update({
          [`${type}_url`]: publicUrl
        })
        .eq('id', currentUser.id);

      toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} updated successfully`);
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error(`Failed to upload ${type}`);
    } finally {
      setLoading(false);
    }
  };

  const saveSettings = async (formData: BioFormData) => {
    if (!currentUser) return;

    try {
      setLoading(true);
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: formData.realName,
          birth_date: formData.birthDate,
          location: formData.location,
          type: formData.type,
          body_type: formData.bodyType,
          smoke_drink: formData.smokeDrink,
          body_decorations: formData.bodyDecorations,
          bio: formData.bio,
          interests: formData.interests,
          theme: formData.theme,
          updated_at: new Date().toISOString()
        })
        .eq('id', currentUser.id);

      if (error) throw error;
      toast.success('Settings saved successfully');
    } catch (error) {
      console.error('Error saving settings:', error);
      toast.error('Failed to save settings');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleImageUpload,
    saveSettings
  };
}