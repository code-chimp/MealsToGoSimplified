import React, { FC, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FavoritesContext } from '../../services/favorites/favorites.context';
import IRestaurant from '../../@interfaces/Restaurant/IRestaurant';
import styles from './FavoriteButton.styles';

export interface IFavoriteButtonProps {
  restaurant: IRestaurant;
}

const FavoriteButton: FC<IFavoriteButtonProps> = ({ restaurant }) => {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.find(r => r.placeId === restaurant.placeId);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => (!isFavorite ? addFavorite(restaurant) : removeFavorite(restaurant))}>
      <AntDesign
        name={isFavorite ? 'heart' : 'hearto'}
        size={24}
        color={isFavorite ? 'red' : 'white'}
      />
    </TouchableOpacity>
  );
};

export default FavoriteButton;
