/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../src/theme';
import SettingsScreen from '../../../src/features/settings/screens/SettingsScreen';
import MapScreen from '../../../src/features/map/screens/MapScreen';
import RestaurantNavigator, { RestaurantStackParamList } from './RestaurantNavigator';

export type RootBottomTabParamList = {
  Restaurants: NavigatorScreenParams<RestaurantStackParamList>;
  Map: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.ui.activeIcon,
        tabBarInactiveTintColor: theme.colors.ui.inactiveIcon,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Restaurants"
        component={RestaurantNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="map" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
