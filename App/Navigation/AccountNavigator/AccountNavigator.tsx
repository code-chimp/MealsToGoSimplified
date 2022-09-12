import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../../../src/features/account/screens/AccountScreen';
import LoginScreen from '../../../src/features/account/screens/LoginScreen';
import RegisterScreen from '../../../src/features/account/screens/RegisterScreen';

export type AccountStackParamList = {
  Main: undefined;
  Login: undefined;
  Register: undefined;
};

const AccountStack = createStackNavigator<AccountStackParamList>();

const AccountNavigator = () => {
  return (
    <AccountStack.Navigator screenOptions={{ headerShown: false }}>
      <AccountStack.Screen name="Main" component={AccountScreen} />
      <AccountStack.Screen name="Login" component={LoginScreen} />
      <AccountStack.Screen name="Register" component={RegisterScreen} />
    </AccountStack.Navigator>
  );
};

export default AccountNavigator;
