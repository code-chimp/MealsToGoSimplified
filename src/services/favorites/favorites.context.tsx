import React, { createContext, ReactNode, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IRestaurant from '../../@interfaces/Restaurant/IRestaurant';
import { FAVORITES_STORAGE_KEY } from '../../constants';

export interface IFavoritesContext {
  favorites: Array<IRestaurant>;
  addFavorite: (restaurant: IRestaurant) => void;
  removeFavorite: (restaurant: IRestaurant) => void;
}

const defaultState: IFavoritesContext = {
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
};

export const FavoritesContext = createContext<IFavoritesContext>(defaultState);

export const FavoritesContextProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Array<IRestaurant>>([]);

  const storeFavorites = async (data: Array<IRestaurant>): Promise<void> => {
    try {
      await AsyncStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('error storing favorites', e);
    }
  };

  const loadFavorites = async (): Promise<void> => {
    try {
      const items = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
      if (items !== null) {
        setFavorites(JSON.parse(items));
      }
    } catch (e) {
      console.error('error loading favorites', e);
    }
  };

  const addFavorite = (restaurant: IRestaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const removeFavorite = (restaurant: IRestaurant) => {
    const faves = favorites.filter(r => r.placeId !== restaurant.placeId);
    setFavorites(faves);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    storeFavorites(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
