import React, { FC, useContext, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { ActivityIndicator, Button, Colors } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackScreenProps } from '@react-navigation/stack';
import { SettingsStackParamList } from '../../../../../App/Navigation/AppNavigator/SettingsNavigator';
import theme from '../../../../theme';
import { AuthContext } from '../../../../services/authentication/auth.context';
import { PHOTO_STORAGE_KEY } from '../../../../constants';
import styles from './CameraScreen.styles';

export interface ICameraScreenProps
  extends StackScreenProps<SettingsStackParamList, 'Camera'> {}

const CameraScreen: FC<ICameraScreenProps> = ({ navigation }) => {
  const [type, setType] = useState<CameraType>(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const { user } = useContext(AuthContext);
  const cameraRef = useRef<Camera | null>(null);

  const handleCameraToggle = () => {
    setType(c => (c === CameraType.back ? CameraType.front : CameraType.back));
  };

  const handleSnapPress = async () => {
    if (cameraRef?.current) {
      const pic = await cameraRef.current!.takePictureAsync();
      await AsyncStorage.setItem(`${PHOTO_STORAGE_KEY}${user!.uid}`, pic.uri);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      {!permission ? (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator animating={true} size={theme.sizes.xl} color={Colors.blue300} />
        </View>
      ) : !permission.granted ? (
        <View style={styles.permissionContainer}>
          <Text style={styles.permissionText}>We need your permission to open the camera</Text>
          <Button
            icon="camera-outline"
            style={styles.permissionButton}
            mode="contained"
            color={theme.colors.brand.primary}
            onPress={requestPermission}>
            Grant Permission
          </Button>
        </View>
      ) : (
        <Camera ref={cameraRef} type={type} style={styles.camera} ratio="16:9">
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.cameraButton}
              accessibilityRole="button"
              onPress={handleSnapPress}>
              <Text style={styles.buttonText}>Sanp</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cameraButton}
              accessibilityRole="button"
              onPress={handleCameraToggle}>
              <Text style={styles.buttonText}>
                {type === CameraType.back ? 'Front' : 'Back'}
              </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </View>
  );
};

export default CameraScreen;
