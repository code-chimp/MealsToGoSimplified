import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import theme from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    padding: theme.space.md,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  restaurantsList: {
    padding: theme.space.md,
  },
});

export default styles;
