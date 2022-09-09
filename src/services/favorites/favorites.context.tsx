import React, { createContext, ReactNode, useState } from 'react';
import IRestaurant from '../../@interfaces/Restaurant/IRestaurant';

export interface IFavoritesContext {
  favorites: Array<IRestaurant>;
  addFavorite: (restaurant: IRestaurant) => void;
  removeFavorite: (restaurant: IRestaurant) => void;
}

const FavoritesContextDefault: IFavoritesContext = {
  favorites: [],
  addFavorite: r => {
    console.info(r);
  },
  removeFavorite: r => {
    console.info(r);
  },
};

export const FavoritesContext = createContext<IFavoritesContext>({
  ...FavoritesContextDefault,
});

export const FavoritesContextProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Array<IRestaurant>>([]);

  const addFavorite = (restaurant: IRestaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const removeFavorite = (restaurant: IRestaurant) => {
    const faves = favorites.filter(r => r.placeId !== restaurant.placeId);
    setFavorites(faves);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
