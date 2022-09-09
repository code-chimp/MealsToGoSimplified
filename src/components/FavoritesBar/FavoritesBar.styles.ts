import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    padding: theme.space.sm,
  },
  title: {
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.body,
    paddingLeft: theme.space.sm,
  },
  emptyPrompt: {
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.text.info,
    padding: theme.space.sm,
    alignSelf: 'center',
  },
  listItem: {
    paddingRight: theme.space.sm,
  },
});

export default styles;
