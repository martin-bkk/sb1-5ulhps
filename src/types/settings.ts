export type TabType = 'account' | 'bio' | 'privacy' | 'contest' | 'tokens' | 'share' | 'membership' | 'notifications' | 'subscriptions';

export interface Profile {
  id: string;
  username: string;
  full_name: string | null;
  avatar_url: string | null;
  banner_url: string | null;
  bio: string | null;
  birth_date: string | null;
  country: string | null;
  city: string | null;
  type: string | null;
  body_type: string | null;
  smoke_drink: string | null;
  body_modification: string | null;
  hair_style: string | null;
  hair_color: string | null;
  eye_color: string | null;
  interests: string[] | null;
  theme: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
  } | null;
  website: string | null;
  email_notifications: boolean;
  push_notifications: boolean;
}