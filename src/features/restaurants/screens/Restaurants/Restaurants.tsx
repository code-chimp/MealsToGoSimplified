import React, { FC, useContext, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { ActivityIndicator, Colors, Searchbar } from 'react-native-paper';
import IRestaurant from '../../../../@interfaces/Restaurant/IRestaurant';
import InfoCard from '../../components/InfoCard';
import styles from './Restaurants.styles';
import { RestaurantsContext } from '../../../../services/restaurant/restaurants.context';
import theme from '../../../../theme';

const Restaurants: FC = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar value={searchQuery} onChangeText={setSearchQuery} />
      </View>
      {isLoading ? (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator animating={true} size={theme.sizes.xl} color={Colors.blue300} />
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.restaurantsList}
          data={restaurants}
          keyExtractor={(item: IRestaurant) => item.name}
          renderItem={({ item }) => <InfoCard restaurant={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Restaurants;
