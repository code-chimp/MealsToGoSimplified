import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  Auth,
} from 'firebase/auth';

export const createUserRequest = (auth: Auth, email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const loginRequest = (auth: Auth, email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logoutRequest = (auth: Auth) => signOut(auth);
