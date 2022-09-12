import React, { createContext, ReactNode, useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { onAuthStateChanged, Auth, User } from 'firebase/auth';
import { createUserRequest, loginRequest, logoutRequest } from './auth.service';

export interface IAuthContext {
  user: User | null;
  onLogin: (e: string, p: string) => Promise<void>;
  onLogout: () => Promise<void>;
  onRegister: (e: string, p: string, m: string) => Promise<void>;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: any;
}

const defaultState: IAuthContext = {
  user: null,
  onLogin: async () => {},
  onLogout: async () => {},
  onRegister: async () => {},
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export const AuthContext = createContext<IAuthContext>(defaultState);

export const AuthContextProvider = ({
  auth,
  children,
}: {
  auth: Auth;
  children: ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  onAuthStateChanged(auth, u => {
    if (u) {
      setUser(u);
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  });

  const onLogin = async (email: string, password: string): Promise<void> => {
    setIsAuthenticated(false);
    setIsLoading(true);
    setError(null);

    if (email.trim().length && password.trim().length) {
      try {
        const credential = await loginRequest(auth, email, password);

        setUser(credential.user);
        setIsAuthenticated(true);
      } catch (e) {
        let errorMessage =
          (e as FirebaseError).message
            ?.replace('Firebase: Error (auth/', '')
            .replace(').', '') ?? 'unexpected server error';

        setError(errorMessage);
        setUser(null);
        setIsAuthenticated(false);
      }
    } else {
      setError('enter an email and password to continue');
    }

    setIsLoading(false);
  };

  const onLogout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await logoutRequest(auth);
      setUser(null);
      setIsAuthenticated(false);
    } catch (e) {
      setError('there was an error signing you out');
    }

    setIsLoading(false);
  };

  const onRegister = async (email: string, password: string, passwordMatch: string) => {
    setIsAuthenticated(false);
    setIsLoading(true);
    setError(null);

    if (!email.trim().length && !password.trim().length) {
      setError('enter an email and password to continue');
    } else if (password !== passwordMatch) {
      setError('passwords did not match');
    } else {
      try {
        const credential = await createUserRequest(auth, email, password);

        setUser(credential.user);
        setIsAuthenticated(true);
      } catch (e) {
        let errorMessage =
          (e as FirebaseError).message
            ?.replace('Firebase: Error (auth/', '')
            .replace(').', '') ?? 'unexpected server error';

        setError(errorMessage);
        setUser(null);
        setIsAuthenticated(false);
      }
    }

    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, onLogin, onLogout, onRegister, error }}>
      {children}
    </AuthContext.Provider>
  );
};
