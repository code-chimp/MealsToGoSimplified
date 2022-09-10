import React, { createContext, ReactNode, useState } from 'react';
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
    setIsAuthenticated(true);

    try {
      const credential = await loginRequest(auth, email, password);

      setUser(credential);
      setIsAuthenticated(false);
    } catch (e) {
      console.error(e);
      setError(e);
    }

    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, onLogin, error }}>
      {children}
    </AuthContext.Provider>
  );
};
