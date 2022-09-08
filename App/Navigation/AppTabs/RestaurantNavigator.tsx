import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import RestaurantsScreen from '../../../src/features/restaurants/screens/RestaurantsScreen';
import IRestaurant from '../../../src/@interfaces/Restaurant/IRestaurant';
import RestaurantDetailScreen from '../../../src/features/restaurants/screens/RestaurantDetailScreen';

export type RootStackParamList = {
  RestaurantList: undefined;
  RestaurantDetail: { restaurant: IRestaurant };
};

const RestaurantsStack = createStackNavigator<RootStackParamList>();

const RestaurantNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS, headerShown: false }}>
      <RestaurantsStack.Screen name="RestaurantList" component={RestaurantsScreen} />
      <RestaurantsStack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
    </RestaurantsStack.Navigator>
  );
};

export default RestaurantNavigator;
