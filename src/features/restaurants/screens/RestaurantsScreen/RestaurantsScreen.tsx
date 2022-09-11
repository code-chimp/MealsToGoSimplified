import React, { FC, useContext, useState } from 'react';
import { FlatList, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import { RestaurantStackParamList } from '../../../../../App/Navigation/AppNavigator/RestaurantNavigator';
import ErrorDisplay from '../../../../components/ErrorDisplay';
import IRestaurant from '../../../../@interfaces/Restaurant/IRestaurant';
import { FavoritesContext } from '../../../../services/favorites/favorites.context';
import { RestaurantsContext } from '../../../../services/restaurant/restaurants.context';
import { LocationContext } from '../../../../services/location/location.context';
import theme from '../../../../theme';
import RestaurantInfoCard from '../../components/RestaurantInfoCard';
import FavoritesBar from '../../../../components/FavoritesBar';
import RestaurantSearch from '../../components/RestaurantSearch';
import styles from './RestaurantsScreen.styles';

export interface IRestaurantsScreenProps extends StackScreenProps<RestaurantStackParamList> {}

const RestaurantsScreen: FC<IRestaurantsScreenProps> = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { error: locationError } = useContext(LocationContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <RestaurantSearch
        isFavoritesToggled={isToggled}
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
        <>
          {!!error || !!locationError ? (
            <ErrorDisplay errorText="Sorry, something went wrong retrieving your data." />
          ) : null}
          <FlatList
            contentContainerStyle={styles.restaurantsList}
            data={restaurants}
            keyExtractor={(item: IRestaurant) => item.name}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('RestaurantDetail', { restaurant: item })
                  }>
                  <RestaurantInfoCard restaurant={item} />
                </TouchableOpacity>
              );
            }}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default RestaurantsScreen;
