export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          username: string
          full_name: string | null
          avatar_url: string | null
          banner_url: string | null
          bio: string | null
          birth_date: string | null
          location: string | null
          type: string | null
          body_type: string | null
          smoke_drink: string | null
          body_decorations: string | null
          interests: string[] | null
          theme: Json | null
          website: string | null
          email_notifications: boolean
          push_notifications: boolean
        }
        Insert: {
          id: string
          created_at?: string
          updated_at?: string
          username: string
          full_name?: string | null
          avatar_url?: string | null
          banner_url?: string | null
          bio?: string | null
          birth_date?: string | null
          location?: string | null
          type?: string | null
          body_type?: string | null
          smoke_drink?: string | null
          body_decorations?: string | null
          interests?: string[] | null
          theme?: Json | null
          website?: string | null
          email_notifications?: boolean
          push_notifications?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          username?: string
          full_name?: string | null
          avatar_url?: string | null
          banner_url?: string | null
          bio?: string | null
          birth_date?: string | null
          location?: string | null
          type?: string | null
          body_type?: string | null
          smoke_drink?: string | null
          body_decorations?: string | null
          interests?: string[] | null
          theme?: Json | null
          website?: string | null
          email_notifications?: boolean
          push_notifications?: boolean
        }
      }
      posts: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          user_id: string
          content: string
          image_url: string | null
          likes_count: number
          comments_count: number
          shares_count: number
          is_private: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id: string
          content: string
          image_url?: string | null
          likes_count?: number
          comments_count?: number
          shares_count?: number
          is_private?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id?: string
          content?: string
          image_url?: string | null
          likes_count?: number
          comments_count?: number
          shares_count?: number
          is_private?: boolean
        }
      }
      comments: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          post_id: string
          user_id: string
          content: string
          parent_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          post_id: string
          user_id: string
          content: string
          parent_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          post_id?: string
          user_id?: string
          content?: string
          parent_id?: string | null
        }
      }
      likes: {
        Row: {
          id: string
          created_at: string
          post_id: string
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          post_id: string
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          post_id?: string
          user_id?: string
        }
      }
      followers: {
        Row: {
          id: string
          created_at: string
          follower_id: string
          following_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          follower_id: string
          following_id: string
        }
        Update: {
          id?: string
          created_at?: string
          follower_id?: string
          following_id?: string
        }
      }
    }
  }
}