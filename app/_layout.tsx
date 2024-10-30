import { Stack } from 'expo-router';
import { useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';
import {
  DarkTheme,
  ThemeProvider,
  DefaultTheme
} from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme';

import * as SplashScreen from 'expo-splash-screen';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
  });

  const hideAsync = async () => {
    await SplashScreen.hideAsync();
  };

  const handleSearchIcon = () => {
    alert('test');
  };

  useEffect(() => {
    if (fontsLoaded) {
      hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack />
    </ThemeProvider>
  );
}
