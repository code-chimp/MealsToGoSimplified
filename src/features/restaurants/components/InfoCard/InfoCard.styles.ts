import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.bg.secondary,
  },
  cardImage: {
    padding: theme.space.md,
  },
  infoWrapper: {
    padding: theme.space.md,
  },
  title: {
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.body,
    color: theme.colors.text.primary,
  },
  address: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.caption,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: theme.space.sm,
    paddingBottom: theme.space.sm,
  },
  rating: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  info: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    height: theme.sizes.md,
    width: theme.sizes.md,
  },
  closed: {
    color: theme.colors.text.error,
    marginRight: theme.space.md,
  },
  mrMd: {
    marginRight: theme.space.md,
  },
});

export default styles;
