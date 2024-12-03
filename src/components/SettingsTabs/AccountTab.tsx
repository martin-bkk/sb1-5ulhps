import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import toast from 'react-hot-toast';
import { Lock, Mail, Key } from 'lucide-react';
import ProfileImages from '../settings/bio/ProfileImages';
import ThemeSettings from '../settings/account/ThemeSettings';

export default function AccountTab() {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: currentUser?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    theme: {
      primaryColor: '#EC4899',
      backgroundColor: '#4C1D95',
      textColor: '#FFFFFF'
    }
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;

    try {
      setLoading(true);

      if (formData.newPassword) {
        if (formData.newPassword !== formData.confirmPassword) {
          toast.error('New passwords do not match');
          return;
        }

        const { error } = await supabase.auth.updateUser({
          password: formData.newPassword
        });

        if (error) throw error;
        toast.success('Password updated successfully');
      }

      if (formData.email !== currentUser.email) {
        const { error } = await supabase.auth.updateUser({
          email: formData.email
        });

        if (error) throw error;
        toast.success('Email update verification sent');
      }

      // Update theme settings
      const { error: themeError } = await supabase
        .from('profiles')
        .update({
          theme: formData.theme
        })
        .eq('id', currentUser.id);

      if (themeError) throw themeError;

      setFormData(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }));

      toast.success('Settings updated successfully');
    } catch (error) {
      console.error('Error updating account:', error);
      toast.error('Failed to update account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pb-12">
      <ProfileImages 
        currentUser={currentUser} 
        handleImageUpload={handleImageUpload} 
      />

      <ThemeSettings 
        theme={formData.theme}
        onChange={(theme) => setFormData(prev => ({ ...prev, theme }))}
      />
      
      <div className="bg-white/5 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Account Settings</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white"
              />
              <Mail className="absolute left-3 top-2.5 w-5 h-5 text-white/50" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200 mb-1">
              Current Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={formData.currentPassword}
                onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white"
              />
              <Lock className="absolute left-3 top-2.5 w-5 h-5 text-white/50" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200 mb-1">
              New Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={formData.newPassword}
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white"
              />
              <Key className="absolute left-3 top-2.5 w-5 h-5 text-white/50" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-200 mb-1">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white"
              />
              <Key className="absolute left-3 top-2.5 w-5 h-5 text-white/50" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="w-48 bg-pink-500 text-white px-8 py-3 rounded-xl hover:bg-pink-600 transition-colors disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
}