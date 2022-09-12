/* eslint-disable react/no-unstable-nested-components */
/* NOTE: this is due to the suggested pattern for adding tab icons */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FavoritesContextProvider } from '../../../src/services/favorites/favorites.context';
import { RestaurantsContextProvider } from '../../../src/services/restaurant/restaurants.context';
import { LocationContextProvider } from '../../../src/services/location/location.context';
import theme from '../../../src/theme';
import MapScreen from '../../../src/features/map/screens/MapScreen';
import RestaurantNavigator, { RestaurantStackParamList } from './RestaurantNavigator';
import SettingsNavigator, { SettingsStackParamList } from './SettingsNavigator';

export type RootBottomTabParamList = {
  Restaurants: NavigatorScreenParams<RestaurantStackParamList>;
  Map: undefined;
  SettingsNav: NavigatorScreenParams<SettingsStackParamList>;
};

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const AppNavigator = () => {
  return (
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
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
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="map" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="SettingsNav"
              component={SettingsNavigator}
              options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="settings" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  );
};

export default AppNavigator;
