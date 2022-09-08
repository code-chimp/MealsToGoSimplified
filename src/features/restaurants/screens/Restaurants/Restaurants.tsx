import React, { FC, useContext, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import IRestaurant from '../../../../@interfaces/Restaurant/IRestaurant';
import InfoCard from '../../components/InfoCard';
import styles from './Restaurants.styles';
import { RestaurantsContext } from '../../../../services/restaurant/restaurants.context';

const Restaurants: FC = () => {
  const restaurantContext = useContext(RestaurantsContext);
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar value={searchQuery} onChangeText={setSearchQuery} />
      </View>
      <FlatList
        contentContainerStyle={styles.restaurantsList}
        data={restaurantContext.restaurants}
        keyExtractor={(item: IRestaurant) => item.name}
        renderItem={({ item }) => <InfoCard restaurant={item} />}
      />
    </SafeAreaView>
  );
};

export default Restaurants;
