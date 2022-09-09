import React, { FC } from 'react';
import { Callout } from 'react-native-maps';
import IRestaurant from '../../../../@interfaces/Restaurant/IRestaurant';
import CompactRestaurantInfo from '../../../../components/RestaurantCompactInfo';

export interface IRestaurantCalloutProps {
  restaurant: IRestaurant;
  onPress: () => void;
}

const RestaurantCallout: FC<IRestaurantCalloutProps> = ({ restaurant, onPress }) => {
  return (
    <Callout onPress={onPress}>
      <CompactRestaurantInfo restaurant={restaurant} inMap />
    </Callout>
  );
};

export default RestaurantCallout;
