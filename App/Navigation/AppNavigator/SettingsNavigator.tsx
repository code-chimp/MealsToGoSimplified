import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import CameraScreen from '../../../src/features/settings/screens/CameraScreen';
import FavoritesScreen from '../../../src/features/settings/screens/FavoritesScreen';
import SettingsScreen from '../../../src/features/settings/screens/SettingsScreen';

export type SettingsStackParamList = {
  Settings: undefined;
  Favorites: undefined;
  Camera: undefined;
};

const SettingsStack = createStackNavigator<SettingsStackParamList>();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerMode: 'screen',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Favorites" component={FavoritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
