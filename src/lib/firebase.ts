import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBD_8c3c8DTiEWwy_bijHyiGEHG8qc7uqg",
  authDomain: "only4u-3b660.firebaseapp.com",
  projectId: "only4u-3b660",
  storageBucket: "only4u-3b660.firebasestorage.app",
  messagingSenderId: "644029197437",
  appId: "1:644029197437:web:38e70d2881b57f20a21514",
  clientId: "644029197437-hf00g2ufrou92rjtr69niuvauuiv0ds0.apps.googleusercontent.com"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Configure Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});