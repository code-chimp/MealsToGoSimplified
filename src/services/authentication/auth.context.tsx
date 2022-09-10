import React, { createContext, ReactNode, useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { Auth, UserCredential } from 'firebase/auth';
import { loginRequest } from './auth.service';

export interface IAuthContext {
  user: UserCredential | null;
  isAuthenticated: boolean;
  onLogin: (e: string, p: string) => Promise<void>;
  error: any;
}

const defaultState: IAuthContext = {
  user: null,
  onLogin: async () => {},
  isAuthenticated: false,
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
  const [user, setUser] = useState<UserCredential | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const onLogin = async (email: string, password: string): Promise<void> => {
    if (email.trim().length && password.trim().length) {
      setIsAuthenticated(false);
      setError(null);

      try {
        const credential = await loginRequest(auth, email, password);

        setUser(credential);
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
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, onLogin, error }}>
      {children}
    </AuthContext.Provider>
  );
};
