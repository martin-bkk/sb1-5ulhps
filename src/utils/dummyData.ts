import { getProfileImage } from './profileImages';

// Helper function to generate random image URLs
export const getImageUrl = (type: 'profiles' | 'content' | 'livestream' | 'avatars', index: number) => {
  const contentPhotos = [
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1596902852634-c6ca8e147eda?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop'
  ];

  const livestreamPhotos = [
    'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1280&h=720&fit=crop',
    'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?w=1280&h=720&fit=crop',
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1280&h=720&fit=crop'
  ];

  if (type === 'profiles' || type === 'avatars') {
    const category = index % 3 === 0 ? 'male' : index % 3 === 1 ? 'female' : 'couples';
    return getProfileImage(category, Math.floor(index / 3));
  } else if (type === 'content') {
    return contentPhotos[index % contentPhotos.length];
  } else {
    return livestreamPhotos[index % livestreamPhotos.length];
  }
};

// Generate dummy posts
export const dummyPosts = Array.from({ length: 20 }, (_, i) => ({
  id: (i + 1).toString(),
  imageUrl: getImageUrl('content', i),
  creatorName: `Creator ${i + 1}`,
  creatorAvatar: getImageUrl('profiles', i),
  content: `Sharing some amazing moments with my followers! ${i % 2 === 0 ? '🎨' : '📸'} #content #creator #lifestyle`,
  likes: Math.floor(Math.random() * 1000),
  comments: Array.from({ length: Math.floor(Math.random() * 5) }, (_, j) => ({
    id: `${i}-${j}`,
    userId: `user-${j}`,
    userName: `User ${j + 1}`,
    userAvatar: getImageUrl('profiles', j + 10),
    content: `Great content! Keep it up! ${j % 2 === 0 ? '🔥' : '💖'}`,
    timestamp: new Date(Date.now() - Math.random() * 86400000)
  })),
  shares: Math.floor(Math.random() * 100),
  timestamp: new Date(Date.now() - Math.random() * 86400000),
  isLiked: false,
  textFormat: {
    bold: false,
    italic: false,
    underline: false,
    align: 'left' as const
  }
}));