import React, { FC, useContext } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { FavoritesContext } from '../../../../services/favorites/favorites.context';
import FadeInView from '../../../../components/FadeInView';
import IRestaurant from '../../../../@interfaces/Restaurant/IRestaurant';
import RestaurantInfoCard from '../../../../components/RestaurantInfoCard';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList } from '../../../../../App/Navigation/AppNavigator/AppNavigator';
import { SettingsStackParamList } from '../../../../../App/Navigation/AppNavigator/SettingsNavigator';
import styles from './FavoritesScreen.styles';

export interface IFavoritesScreenProps
  extends CompositeScreenProps<
    BottomTabScreenProps<RootBottomTabParamList, 'SettingsNav'>,
    StackScreenProps<SettingsStackParamList>
  > {}

const FavoritesScreen: FC<IFavoritesScreenProps> = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return !favorites.length ? (
    <SafeAreaView style={styles.emptyListContainer}>
      <Text style={styles.emptyPrompt}>
        You have not selected any favorite restaurants yet! Get in there!
      </Text>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      <FadeInView>
        <FlatList
          contentContainerStyle={styles.favoritesList}
          data={favorites}
          keyExtractor={(item: IRestaurant) => item.name}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Restaurants', {
                    screen: 'RestaurantDetail',
                    params: { restaurant: item },
                  })
                }>
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            );
          }}
        />
      </FadeInView>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
