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
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.text.error,
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    borderRadius: 5,
    borderColor: theme.colors.text.error,
    borderWidth: 1,
    marginTop: theme.space.xs,
    marginBottom: theme.space.xs,
    padding: theme.space.xs,
  },
  backButton: {
    padding: theme.space.sm,
    alignSelf: 'center',
    marginTop: theme.space.md,
  },
});

export default styles;
