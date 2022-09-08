import React, { FC, useContext, useState } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../../services/location/location.context';
import styles from './RestaurantSearch.styles';

const RestaurantSearch: FC = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchTerm, setSearchTerm] = useState<string>(keyword);

  return (
    <View style={styles.searchContainer}>
      <Searchbar
        placeholder="Search for your city"
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={() => search(searchTerm)}
      />
    </View>
  );
};

export default RestaurantSearch;
