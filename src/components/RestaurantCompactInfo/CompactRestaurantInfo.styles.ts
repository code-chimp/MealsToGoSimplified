import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    maxWidth: 120,
    alignItems: 'center',
    padding: theme.space.sm,
  },
  image: {
    borderRadius: 10,
    width: 120,
    height: 100,
  },
  title: {
    fontFamily: theme.fonts.heading,
    alignSelf: 'center',
  },
});

export default styles;
