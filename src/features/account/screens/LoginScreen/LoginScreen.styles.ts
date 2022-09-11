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
  backButton: {
    padding: theme.space.sm,
    alignSelf: 'center',
    marginTop: theme.space.md,
  },
});

export default styles;
