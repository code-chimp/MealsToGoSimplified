import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IRestaurant from '../../@interfaces/Restaurant/IRestaurant';
import { FAVORITES_STORAGE_KEY } from '../../constants';
import { AuthContext } from '../authentication/auth.context';

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
  const { user } = useContext(AuthContext);

  const storeFavorites = async (data: Array<IRestaurant>, uid: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(`${FAVORITES_STORAGE_KEY}${uid}`, JSON.stringify(data));
    } catch (e) {
      console.error('error storing favorites', e);
    }
  };

  const loadFavorites = async (uid: string): Promise<void> => {
    try {
      const items = await AsyncStorage.getItem(`${FAVORITES_STORAGE_KEY}${uid}`);

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
    if (user) {
      loadFavorites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      storeFavorites(favorites, user.uid);
    }
  }, [favorites, user]);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
