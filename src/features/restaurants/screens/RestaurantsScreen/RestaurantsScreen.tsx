import React, { FC, useContext } from 'react';
import { FlatList, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import IRestaurant from '../../../../@interfaces/Restaurant/IRestaurant';
import RestaurantInfoCard from '../../components/RestaurantInfoCard';
import { RestaurantsContext } from '../../../../services/restaurant/restaurants.context';
import theme from '../../../../theme';
import RestaurantSearch from '../../components/RestaurantSearch';
import styles from './RestaurantsScreen.styles';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App/Navigation/AppTabs/RestaurantNavigator';

export interface IRestaurantsScreenProps extends StackScreenProps<RootStackParamList> {}

const RestaurantsScreen: FC<IRestaurantsScreenProps> = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);

  return (
    <SafeAreaView style={styles.container}>
      <RestaurantSearch />
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
