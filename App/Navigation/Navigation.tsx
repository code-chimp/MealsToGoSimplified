import React, { useContext } from 'react';
import { AuthContext } from '../../src/services/authentication/auth.context';
import AppNavigator from './AppNavigator';
import AccountNavigator from './AccountNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Navigation = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuthenticated && user ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
