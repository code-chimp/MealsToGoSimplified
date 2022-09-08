import React, { useCallback } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import { Oswald_400Regular } from '@expo-google-fonts/oswald';
import AppTabs from './AppTabs';
import styles from './App.styles';

SplashScreen.preventAutoHideAsync();

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
      <NavigationContainer>
        <AppTabs />
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
