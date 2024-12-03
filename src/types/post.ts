export interface Post {
  id: string;
  imageUrl: string;
  creatorName: string;
  creatorAvatar: string;
  content: string;
  likes: number;
  comments: Comment[];
  shares: number;
  timestamp: Date;
  isLiked: boolean;
  textFormat: {
    bold: boolean;
    italic: boolean;
    underline: boolean;
    align: 'left' | 'center' | 'right';
  };
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  timestamp: Date;
}