import React, { useCallback } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import { Oswald_400Regular } from '@expo-google-fonts/oswald';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getApps, initializeApp, FirebaseApp } from 'firebase/app';
import {
  getAuth,
  getReactNativePersistence,
  initializeAuth,
  Auth,
} from 'firebase/auth/react-native';
import { AuthContextProvider } from '../src/services/authentication/auth.context';
import Navigation from './Navigation';
import styles from './App.styles';
import config from '../src/config';

// NOTE: my linter complains, but this is the pattern from the docs
SplashScreen.preventAutoHideAsync();

let firebaseApp: FirebaseApp;
let firebaseAuth: Auth;

if (!getApps().length) {
  firebaseApp = initializeApp(config.firebaseConfig);
  firebaseAuth = initializeAuth(firebaseApp as FirebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  firebaseAuth = getAuth();
}

const App = () => {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Oswald_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <AuthContextProvider auth={firebaseAuth}>
        <Navigation />
      </AuthContextProvider>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
