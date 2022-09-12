import { StatusBar, StyleSheet } from 'react-native';
import theme from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  emptyListContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyPrompt: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.h5,
    alignSelf: 'center',
  },
  favoritesList: { padding: theme.space.md },
});

export default styles;
