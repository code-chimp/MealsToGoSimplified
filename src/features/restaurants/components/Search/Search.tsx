import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../../services/location/location.context';
import styles from './Search.styles';

const Search = () => {
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

export default Search;
