import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapSearch from '../../components/MapSearch';
import styles from './MapScreen.styles';
import { LocationContext } from '../../../../services/location/location.context';
import { RestaurantsContext } from '../../../../services/restaurant/restaurants.context';

interface IRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);
  const [region, setRegion] = useState<IRegion>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    setRegion({
      ...region,
      latitude: location?.lat!,
      longitude: location?.lng!,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <View style={styles.container}>
      <MapSearch />
      <MapView style={styles.map} region={region}>
        {restaurants.map(restaurant => {
          const { lat, lng } = restaurant.geometry.location;
          return (
            <Marker
              key={`mrk:${lat}_${lng}`}
              coordinate={{
                latitude: lat,
                longitude: lng,
              }}
            />
          );
        })}
      </MapView>
    </View>
  );
};

export default MapScreen;
