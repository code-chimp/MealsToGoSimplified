import React, { useState, createContext, useEffect, ReactNode } from 'react';

import { restaurantsRequest, restaurantsTransform } from './restaurants.service';
import IRestaurant from '../../@interfaces/Restaurant/IRestaurant';

export interface IRestaurantContext {
  restaurants: Array<IRestaurant>;
  isLoading: boolean;
  error: any;
}

export const RestaurantsContext = createContext<IRestaurantContext>({
  restaurants: [],
  isLoading: false,
  error: null,
});

export const RestaurantsContextProvider = ({ children }: { children: ReactNode }) => {
  const [restaurants, setRestaurants] = useState<Array<IRestaurant>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((rs: Array<IRestaurant>) => {
          setRestaurants(rs);
          setIsLoading(false);
        })
        .catch((err: any) => {
          setError(err);
          setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

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
