import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth, firestore } from '../../config/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Sign up with email and password
export const signUp = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update profile with display name
    await updateProfile(user, { displayName });

    // Create user document in Firestore
    await setDoc(doc(firestore, 'users', user.uid), {
      uid: user.uid,
      email,
      displayName,
      createdAt: new Date(),
      photoURL: null,
      bio: '',
      friends: [],
      answeredQuestions: 0,
    });

    return user;
  } catch (error) {
    throw error;
  }
};

// Sign in with email and password
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Sign out
export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// Get user profile from Firestore
export const getUserProfile = async (uid) => {
  try {
    const userDoc = await getDoc(doc(firestore, 'users', uid));
    return userDoc.data();
  } catch (error) {
    throw error;
  }
};

// Update user profile
export const updateUserProfile = async (uid, updates) => {
  try {
    await setDoc(doc(firestore, 'users', uid), updates, { merge: true });
  } catch (error) {
    throw error;
  }
};
