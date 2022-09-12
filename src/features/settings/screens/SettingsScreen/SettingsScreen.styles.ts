import { StatusBar, StyleSheet } from 'react-native';
import theme from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  avatarWrapper: {
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: theme.colors.brand.primary,
  },
  avatarText: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.title,
    marginTop: theme.space.sm,
  },
  listItem: {
    padding: theme.space.md,
  },
});

export default styles;
