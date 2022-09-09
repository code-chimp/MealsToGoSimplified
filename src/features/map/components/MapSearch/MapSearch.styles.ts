import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: theme.space.md,
    position: 'absolute',
    zIndex: 999,
    top: 40,
    width: '98%',
  },
});

export default styles;
