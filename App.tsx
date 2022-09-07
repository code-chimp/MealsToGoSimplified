import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import { Oswald_400Regular } from '@expo-google-fonts/oswald';
import Restaurants from './src/features/restaurants/screens/Restaurants';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');

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
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Restaurants searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <StatusBar style="auto" />
    </View>
  );
}
