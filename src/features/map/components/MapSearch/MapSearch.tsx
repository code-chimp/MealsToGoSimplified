import React, { FC, useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../../services/location/location.context';
import styles from './MapSearch.styles';

const MapSearch: FC = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchTerm, setSearchTerm] = useState<string>(keyword);

  useEffect(() => {
    setSearchTerm(keyword);
  }, [keyword]);

  return (
    <View style={styles.searchContainer}>
      <Searchbar
        placeholder="Search for your city"
        icon="map"
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={() => search(searchTerm)}
      />
    </View>
  );
};

export default MapSearch;
