import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { generateDummyProfiles } from './dummyData';

export async function seedFirestore() {
  try {
    const dummyProfiles = generateDummyProfiles(100);
    const profilesCollection = collection(db, 'profiles');
    const createdProfiles = [];

    for (const profile of dummyProfiles) {
      const profileId = profile.id.toString();
      const firestoreProfile = {
        ...profile,
        realName: `${profile.name.split(' ')[0]} Smith`,
        birthDate: new Date(1995 + Math.floor(Math.random() * 5), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)).toISOString(),
        type: 'Content Creator',
        interestedIn: ['Gaming', 'Art', 'Music'],
        location: 'Los Angeles, CA',
        bodyType: 'Athletic',
        smokeDrink: 'No/Occasionally',
        bodyDecorations: 'Small tattoo',
        socialLinks: [
          { platform: 'WhatsApp', url: '#', tokens: 300, duration: '6 Months' },
          { platform: 'Snapchat', url: '#', tokens: 200, duration: '1 Year' },
          { platform: 'Telegram', url: '#', tokens: 250, duration: '3 Months' }
        ],
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };

      // Use setDoc with a specific document ID instead of addDoc
      const docRef = doc(profilesCollection, profileId);
      await setDoc(docRef, firestoreProfile);
      createdProfiles.push({ ...firestoreProfile, id: profileId });
    }

    console.log('Successfully seeded Firestore with profiles!');
    return createdProfiles;
  } catch (error) {
    console.error('Error seeding Firestore:', error);
    throw error;
  }
}