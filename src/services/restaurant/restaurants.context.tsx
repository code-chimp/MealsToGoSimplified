import React, { useState, createContext, useEffect, ReactNode, useContext } from 'react';

import { restaurantsRequest, restaurantsTransform } from './restaurants.service';
import IRestaurant from '../../@interfaces/Restaurant/IRestaurant';
import { LocationContext } from '../location/location.context';

export interface IRestaurantContext {
  restaurants: Array<IRestaurant>;
  isLoading: boolean;
  error: any;
}

const defaultState: IRestaurantContext = {
  restaurants: [],
  isLoading: false,
  error: null,
};

export const RestaurantsContext = createContext<IRestaurantContext>(defaultState);

export const RestaurantsContextProvider = ({ children }: { children: ReactNode }) => {
  const [restaurants, setRestaurants] = useState<Array<IRestaurant>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (coords: string) => {
    setIsLoading(true);

    restaurantsRequest(coords)
      .then(restaurantsTransform)
      .then((rs: Array<IRestaurant>) => {
        setRestaurants(rs);
        setIsLoading(false);
      })
      .catch((err: any) => {
        setError(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    retrieveRestaurants(`${location?.lat},${location?.lng}`);
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
