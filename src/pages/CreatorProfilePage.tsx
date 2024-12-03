import React from 'react';
import CreatorProfile from '../components/profile/CreatorProfile';

const DUMMY_PROFILE = {
  name: "Sarah Anderson",
  tagline: "Digital Artist & Content Creator",
  avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  bannerUrl: "https://images.unsplash.com/photo-1579547621869-0ddb5f237392?w=1920&h=500&fit=crop",
  bio: `Creative professional with over 5 years of experience in digital art and content creation. Specializing in character design and illustration for gaming and entertainment industries.

Passionate about bringing stories to life through visual art and creating meaningful connections with my audience.`,
  location: "Los Angeles, CA",
  website: "https://example.com",
  email: "sarah@example.com",
  socialLinks: [
    { platform: 'instagram', url: '#', followers: 125000 },
    { platform: 'twitter', url: '#', followers: 85000 },
    { platform: 'youtube', url: '#', followers: 250000 },
    { platform: 'facebook', url: '#', followers: 75000 }
  ],
  skills: [
    "Digital Illustration",
    "Character Design",
    "3D Modeling",
    "Animation",
    "Concept Art",
    "Visual Development",
    "Storytelling",
    "Art Direction"
  ],
  achievements: [
    {
      title: "Best Digital Artist Award 2023",
      description: "Recognized for outstanding contributions to digital art",
      date: "December 2023"
    },
    {
      title: "Featured Artist at ArtCon 2023",
      description: "Showcased original artwork at international art convention",
      date: "September 2023"
    },
    {
      title: "1M Subscriber Milestone",
      description: "Reached one million subscribers across social platforms",
      date: "July 2023"
    }
  ],
  featuredWork: [
    {
      id: "1",
      title: "Character Design Series",
      imageUrl: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=800&h=450&fit=crop",
      category: "Digital Art",
      link: "#"
    },
    {
      id: "2",
      title: "Fantasy Landscape Collection",
      imageUrl: "https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?w=800&h=450&fit=crop",
      category: "Illustration",
      link: "#"
    },
    {
      id: "3",
      title: "Animation Reel 2023",
      imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&h=450&fit=crop",
      category: "Animation",
      link: "#"
    },
    {
      id: "4",
      title: "Concept Art Portfolio",
      imageUrl: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=800&h=450&fit=crop",
      category: "Concept Art",
      link: "#"
    }
  ]
};

export default function CreatorProfilePage() {
  return <CreatorProfile profile={DUMMY_PROFILE} />;
}</content>