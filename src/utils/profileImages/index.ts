import { femaleProfiles } from './female';
import { maleProfiles } from './male';
import { couplesProfiles } from './couples';

export const getProfileImage = (category: 'female' | 'male' | 'couples', index: number) => {
  switch (category) {
    case 'female':
      return femaleProfiles[index % femaleProfiles.length];
    case 'male':
      return maleProfiles[index % maleProfiles.length];
    case 'couples':
      return couplesProfiles[index % couplesProfiles.length];
    default:
      return femaleProfiles[0];
  }
};