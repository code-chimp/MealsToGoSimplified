import React, { FC } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import IRestaurant from '../../../../@interfaces/Restaurant/IRestaurant';
import InfoCard from '../../components/InfoCard';
import styles from './Restaurants.styles';

export interface IRestaurantsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Restaurants: FC<IRestaurantsProps> = ({ searchQuery, setSearchQuery }) => {
  const mock: IRestaurant = {
    name: 'Some Restaurant',
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos: [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address: '100 Some Street',
    rating: 4,
    isOpenNow: true,
    isClosedTemporarily: true,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar value={searchQuery} onChangeText={setSearchQuery} />
      </View>
      <View style={styles.restaurantsContainer}>
        <InfoCard restaurant={mock} />
      </View>
    </SafeAreaView>
  );
};

export default Restaurants;
