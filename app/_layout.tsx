import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="login">
        {/* login */}
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="login/otp" options={{ headerShown: false }} />
        <Stack.Screen name="login/splash" options={{ headerShown: false }} />

        {/* sign up */}
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="signup/otp" options={{ headerShown: false }} />

        {/* onboard */}
        <Stack.Screen name="onboard/name" options={{ headerShown: false }} />
        <Stack.Screen name="onboard/check-employed" options={{ headerShown: false }} />
        <Stack.Screen name="onboard/check-status" options={{ headerShown: false }} />
        <Stack.Screen name="onboard/employment-details" options={{ headerShown: false }} />
        <Stack.Screen name="onboard/welcome" options={{ headerShown: false }} />

        <Stack.Screen name="onboarding/step1" />
        <Stack.Screen name="onboarding/step2" />

        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}