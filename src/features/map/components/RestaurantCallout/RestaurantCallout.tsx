import React, { FC } from 'react';
import IRestaurant from '../../../../@interfaces/Restaurant/IRestaurant';
import { Callout } from 'react-native-maps';
import CompactRestaurantInfo from '../../../../components/RestaurantCompactInfo';

export interface IRestaurantCalloutProps {
  restaurant: IRestaurant;
}

const RestaurantCallout: FC<IRestaurantCalloutProps> = ({ restaurant }) => {
  return (
    <Callout>
      <CompactRestaurantInfo restaurant={restaurant} />
    </Callout>
  );
};

export default RestaurantCallout;
