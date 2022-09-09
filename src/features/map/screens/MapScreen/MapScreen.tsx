import React, { FC, useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App/Navigation/AppTabs/RestaurantNavigator';
import { LocationContext } from '../../../../services/location/location.context';
import { RestaurantsContext } from '../../../../services/restaurant/restaurants.context';
import MapSearch from '../../components/MapSearch';
import RestaurantCallout from '../../components/RestaurantCallout';
import styles from './MapScreen.styles';

export interface IMapScreenProps extends StackScreenProps<RootStackParamList> {}

const MapScreen: FC<IMapScreenProps> = ({ navigation }) => {
  const {
    location: { lat, lng, viewport },
  } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState<number>(0);
  // const [lngDelta, setLngDelta] = useState<number>(0);

  useEffect(() => {
    const { northeast, southwest } = viewport!;

    setLatDelta(northeast.lat - southwest.lat);
    // setLngDelta(northeast.lng - southwest.lng);
  }, [lat, lng, viewport]);

  return (
    <View style={styles.container}>
      <MapSearch />
      <MapView
        style={styles.map}
        region={{
          latitude: lat,
          longitude: lng,
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
                onPress={() => navigation.navigate('RestaurantDetail', { restaurant })}
              />
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default MapScreen;
