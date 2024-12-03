export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'creator';
  timestamp: Date;
  reactions: string[];
}

export interface FloatingEmoji {
  id: string;
  emoji: string;
  x: number;
  y: number;
}