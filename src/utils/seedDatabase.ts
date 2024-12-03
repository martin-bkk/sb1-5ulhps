import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { generateDummyProfiles } from './dummyData';

export async function seedProfiles() {
  try {
    const dummyProfiles = generateDummyProfiles(100);
    const profilesRef = collection(db, 'profiles');

    for (const profile of dummyProfiles) {
      await addDoc(profilesRef, {
        ...profile,
        createdAt: serverTimestamp()
      });
    }

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}