import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import FavoritesScreen from '../../../src/features/settings/screens/FavoritesScreen';
import SettingsScreen from '../../../src/features/settings/screens/SettingsScreen';

export type SettingsStackParamList = {
  Settings: undefined;
  Favorites: undefined;
};

const SettingsStack = createStackNavigator<SettingsStackParamList>();

// NOTE: I am stumped on the typing for the Favorites screen - should be
//       correct according to my understanding of the docs
const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerMode: 'screen',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Favorites" component={FavoritesScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
