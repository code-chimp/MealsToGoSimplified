import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    top: 25,
    right: -10,
    width: theme.sizes.xl,
    zIndex: 9,
  },
});

export default styles;
