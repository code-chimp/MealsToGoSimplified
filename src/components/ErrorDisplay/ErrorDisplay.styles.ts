import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  errorText: {
    flexWrap: 'wrap',
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.text.error,
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    borderRadius: 5,
    borderColor: theme.colors.text.error,
    borderWidth: 1,
    marginTop: theme.space.sm,
    marginBottom: theme.space.xs,
    paddingTop: theme.space.xs,
    paddingBottom: theme.space.xs,
    paddingLeft: theme.space.sm,
    paddingRight: theme.space.sm,
  },
});

export default styles;
