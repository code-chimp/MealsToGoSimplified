import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

type AccountStackParamList = {
  Main: undefined;
  Login: undefined;
};

const AccountStack = createStackNavigator<AccountStackParamList>();

const AccountScreen = () => (
  <View style={styles.container}>
    <Text>Account Screen</Text>
  </View>
);

const LoginScreen = () => (
  <View style={styles.container}>
    <Text>Account Screen</Text>
  </View>
);

const AccountNavigator = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS, headerShown: false }}>
      <AccountStack.Screen name="Main" component={AccountScreen} />
      <AccountStack.Screen name="Login" component={LoginScreen} />
    </AccountStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AccountNavigator;
