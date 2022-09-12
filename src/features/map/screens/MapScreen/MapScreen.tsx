import React, { FC, useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootBottomTabParamList } from '../../../../../App/Navigation/AppNavigator/AppNavigator';
import { LocationContext } from '../../../../services/location/location.context';
import { RestaurantsContext } from '../../../../services/restaurant/restaurants.context';
import MapSearch from '../../components/MapSearch';
import RestaurantCallout from '../../components/RestaurantCallout';
import styles from './MapScreen.styles';
import ErrorDisplay from '../../../../components/ErrorDisplay';
import { ActivityIndicator, Colors } from 'react-native-paper';
import theme from '../../../../theme';

export interface IMapScreenProps extends BottomTabScreenProps<RootBottomTabParamList> {}

const MapScreen: FC<IMapScreenProps> = ({ navigation }) => {
  const { isLoading, location, error } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState<number>(0);
  // const [lngDelta, setLngDelta] = useState<number>(0);

  useEffect(() => {
    if (location) {
      const { northeast, southwest } = location.viewport!;

      setLatDelta(northeast.lat - southwest.lat);
      // setLngDelta(northeast.lng - southwest.lng);
    }
  }, [location]);

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorDisplay errorText="Sorry, something went wrong retrieving your data." />
      ) : (
        <>
          <MapSearch />
          {isLoading || !location ? (
            <View style={styles.loadingIndicator}>
              <ActivityIndicator
                animating={true}
                size={theme.sizes.xl}
                color={Colors.blue300}
              />
            </View>
          ) : (
            <MapView
              style={styles.map}
              region={{
                latitude: location!.lat,
                longitude: location!.lng,
                latitudeDelta: latDelta,
                longitudeDelta: 0.02,
              }}>
              {restaurants.map(restaurant => {
                const { lat: mlat, lng: mlng } = restaurant.geometry.location;
                return (
                  <Marker
                    key={`${restaurant.name}:${mlat}_${mlng}`}
                    title={restaurant.name}
                    coordinate={{
                      latitude: mlat,
                      longitude: mlng,
                    }}>
                    <RestaurantCallout
                      restaurant={restaurant}
                      onPress={() =>
                        navigation.navigate('Restaurants', {
                          screen: 'RestaurantDetail',
                          params: { restaurant },
                        })
                      }
                    />
                  </Marker>
                );
              })}
            </MapView>
          )}
        </>
      )}
    </View>
  );
};

export default MapScreen;
