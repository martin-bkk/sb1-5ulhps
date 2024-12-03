export interface Profile {
  id: string;
  name: string;
  realName?: string;
  description: string;
  imageUrl: string;
  onlineTime: string;
  viewers: number;
  birthDate?: string;
  type?: string;
  interestedIn?: string[];
  location?: string;
  bodyType?: string;
  smokeDrink?: string;
  bodyDecorations?: string;
  socialLinks?: Array<{
    platform: string;
    url: string;
    tokens: number;
    duration?: string;
  }>;
  createdAt: Date;
  updatedAt: Date;
}