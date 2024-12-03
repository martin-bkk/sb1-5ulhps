import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ShareModal from '../ShareModal';

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

interface PostItemProps {
  post: Post;
  onLike: (postId: string) => void;
}

export default function PostItem({ post, onLike }: PostItemProps) {
  const [showShareModal, setShowShareModal] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-purple-800/30 backdrop-blur-sm rounded-xl overflow-hidden">
      {/* Post Header */}
      <div className="p-4 flex items-center justify-between">
        <Link to={`/profile/${post.user_id}`} className="flex items-center gap-3">
          <img
            src={post.user.avatar_url}
            alt={post.user.username}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-white font-medium">{post.user.username}</h3>
            <p className="text-purple-200 text-sm">
              {formatDate(post.created_at)}
            </p>
          </div>
        </Link>
      </div>

      {/* Post Content */}
      <p className="px-4 text-white mb-4">
        {post.content}
      </p>

      {/* Post Image */}
      {post.image_url && (
        <img
          src={post.image_url}
          alt="Post content"
          className="w-full aspect-video object-cover"
        />
      )}

      {/* Post Actions */}
      <div className="p-4 flex items-center justify-between border-t border-white/10">
        <button
          onClick={() => onLike(post.id)}
          className="flex items-center gap-2 text-white hover:text-pink-400 transition-colors"
        >
          <Heart className="w-5 h-5" />
          <span>{post.likes_count}</span>
        </button>
        <div className="flex items-center gap-2 text-white">
          <MessageCircle className="w-5 h-5" />
          <span>{post.comments_count}</span>
        </div>
        <button
          onClick={() => setShowShareModal(true)}
          className="flex items-center gap-2 text-white hover:text-pink-400 transition-colors"
        >
          <Share2 className="w-5 h-5" />
          <span>{post.shares_count}</span>
        </button>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        url={window.location.href}
      />
    </div>
  );
}