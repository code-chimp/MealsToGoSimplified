import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  cover: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    paddingLeft: theme.space.lg,
    paddingRight: theme.space.lg,
  },
  title: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.h4,
    textAlign: 'center',
  },
});

export default styles;
