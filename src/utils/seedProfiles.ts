import { supabase } from '../lib/supabase';
import { getImageUrl } from './dummyData';

const names = [
  'Sophie Anderson', 'Emma Davis', 'Olivia Wilson', 'Ava Martinez',
  'Isabella Taylor', 'Mia Thomas', 'Charlotte Garcia', 'Amelia Moore',
  'Harper White', 'Evelyn Clark', 'James Johnson', 'Lucas Brown',
  'Mason Jones', 'Ethan Miller', 'Oliver Davis', 'Aiden Wilson',
  'Elijah Moore', 'William Taylor', 'Henry Anderson', 'Sebastian Lee'
];

const descriptions = [
  'Digital artist and content creator sharing my creative journey',
  'Fashion model and lifestyle influencer',
  'Fitness enthusiast and wellness coach',
  'Professional photographer capturing life\'s beautiful moments',
  'Travel blogger exploring the world\'s hidden gems'
];

export async function seedProfiles() {
  try {
    // Create 20 sample profiles
    const profiles = Array.from({ length: 20 }, (_, i) => ({
      id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      username: names[i].toLowerCase().replace(' ', '_'),
      full_name: names[i],
      avatar_url: getImageUrl('profiles', i),
      bio: descriptions[i % descriptions.length],
      type: 'Content Creator',
      interests: ['Photography', 'Art', 'Fashion'],
      email_notifications: true,
      push_notifications: true
    }));

    // Insert profiles into Supabase
    const { error } = await supabase
      .from('profiles')
      .insert(profiles);

    if (error) throw error;
    console.log('Successfully seeded profiles!');

  } catch (error) {
    console.error('Error seeding profiles:', error);
    throw error;
  }
}