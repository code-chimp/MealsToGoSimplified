import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  permissionContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  permissionText: {
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.title,
    textAlign: 'center',
  },
  permissionButton: {
    marginTop: theme.space.sm,
    padding: theme.space.xs,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: theme.space.xl,
  },
  cameraButton: {
    borderRadius: 8,
    backgroundColor: theme.colors.brand.primary,
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    padding: theme.space.sm,
    marginLeft: theme.space.xs,
  },
  buttonText: {
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.caption,
    fontWeight: theme.fontWeights.bold,
    color: '#fff',
  },
});

export default styles;
