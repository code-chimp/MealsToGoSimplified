import React, { FC, useContext } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import IRestaurant from '../../../../@interfaces/Restaurant/IRestaurant';
import InfoCard from '../../components/InfoCard';
import { RestaurantsContext } from '../../../../services/restaurant/restaurants.context';
import theme from '../../../../theme';
import Search from '../../components/Search';
import styles from './Restaurants.styles';

const Restaurants: FC = () => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);

  return (
    <SafeAreaView style={styles.container}>
      <Search />
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
