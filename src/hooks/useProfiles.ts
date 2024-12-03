import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../lib/database.types';
import { getImageUrl } from '../utils/dummyData';

type Profile = Database['public']['Tables']['profiles']['Row'];

// Generate dummy profiles for testing
const generateDummyProfiles = (count: number): Profile[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${i + 1}`,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    username: `user${i + 1}`,
    full_name: `User ${i + 1}`,
    avatar_url: getImageUrl('profiles', i),
    banner_url: null,
    bio: `This is user ${i + 1}'s bio`,
    birth_date: null,
    location: null,
    type: 'creator',
    body_type: null,
    smoke_drink: null,
    body_decorations: null,
    interests: null,
    theme: null,
    website: null,
    email_notifications: true,
    push_notifications: true
  }));
};

export function useProfiles(page: number = 1, limit: number = 24) {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProfiles() {
      try {
        setLoading(true);
        // For now, use dummy data until Supabase is fully set up
        const dummyData = generateDummyProfiles(100);
        setProfiles(dummyData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching profiles');
        setProfiles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProfiles();
  }, [page, limit]);

  return { profiles, loading, error };
}