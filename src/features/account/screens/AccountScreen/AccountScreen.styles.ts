import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: theme.space.lg,
    marginTop: theme.space.sm,
    borderRadius: 8,
  },
  button: {
    padding: theme.space.xs,
  },
  marginTopMed: {
    marginTop: theme.space.md,
  },
});

export default styles;
