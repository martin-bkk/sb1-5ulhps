import React from 'react';
import PostItem from './PostItem';

interface Post {
  id: string;
  content: string;
  image_url: string | null;
  user_id: string;
  created_at: string;
  likes_count: number;
  comments_count: number;
  shares_count: number;
  user: {
    username: string;
    avatar_url: string;
  };
}

interface PostListProps {
  posts: Post[];
  handleLike: (postId: string) => void;
}

export default function PostList({ posts, handleLike }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-white text-lg">No posts yet. Be the first to share!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onLike={handleLike}
        />
      ))}
    </div>
  );
}