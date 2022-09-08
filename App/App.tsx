import React, { useCallback } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import { Oswald_400Regular } from '@expo-google-fonts/oswald';
import AppTabs from './AppTabs';
import styles from './App.styles';
import { RestaurantsContextProvider } from '../src/services/restaurant/restaurants.context';
import { LocationContextProvider } from '../src/services/location/location.context';

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
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <AppTabs />
          </NavigationContainer>
        </RestaurantsContextProvider>
      </LocationContextProvider>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
