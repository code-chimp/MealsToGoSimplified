import React, { FC } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import IRestaurant from '../../@interfaces/Restaurant/IRestaurant';
import CompactRestaurantInfo from '../RestaurantCompactInfo';
import styles from './FavoritesBar.styles';

export interface IFavoritesBarProps {
  favorites: Array<IRestaurant>;
  onDetail: (r: string, o: any) => void;
}

const FavoritesBar: FC<IFavoritesBarProps> = ({ favorites, onDetail }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      {favorites.length ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favorites.map(restaurant => {
            const key = restaurant.name.split(' ').join('_');
            return (
              <View key={key} style={styles.listItem}>
                <TouchableOpacity onPress={() => onDetail('RestaurantDetail', { restaurant })}>
                  <CompactRestaurantInfo restaurant={restaurant} />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <Text style={styles.emptyPrompt}>Heart your favorite restaurants</Text>
      )}
    </View>
  );
};

export default FavoritesBar;
