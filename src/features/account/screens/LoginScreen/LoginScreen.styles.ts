import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: theme.space.lg,
    marginTop: theme.space.sm,
  },
  topSpace: {
    marginTop: theme.space.sm,
  },
  button: {
    padding: theme.space.xs,
  },
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
  backButton: {
    padding: theme.space.sm,
    alignSelf: 'center',
    marginTop: theme.space.md,
  },
});

export default styles;
