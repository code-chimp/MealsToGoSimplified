import React, { FC, useContext, useState } from 'react';
import { FlatList, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App/Navigation/AppTabs/RestaurantNavigator';
import IRestaurant from '../../../../@interfaces/Restaurant/IRestaurant';
import { FavoritesContext } from '../../../../services/favorites/favorites.context';
import { RestaurantsContext } from '../../../../services/restaurant/restaurants.context';
import theme from '../../../../theme';
import RestaurantInfoCard from '../../components/RestaurantInfoCard';
import FavoritesBar from '../../../../components/FavoritesBar';
import RestaurantSearch from '../../components/RestaurantSearch';
import styles from './RestaurantsScreen.styles';

export interface IRestaurantsScreenProps extends StackScreenProps<RootStackParamList> {}

const RestaurantsScreen: FC<IRestaurantsScreenProps> = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <RestaurantSearch
        isFavortesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled ? (
        <FavoritesBar favorites={favorites} onDetail={navigation.navigate} />
      ) : null}
      {isLoading ? (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator animating={true} size={theme.sizes.xl} color={Colors.blue300} />
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.restaurantsList}
          data={restaurants}
          keyExtractor={(item: IRestaurant) => item.name}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })}>
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default RestaurantsScreen;
