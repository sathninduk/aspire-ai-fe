import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';

import {useColorScheme} from '@/hooks/useColorScheme';

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
                <Stack.Screen name="login" options={{headerShown: false}}/>
                <Stack.Screen name="login/otp" options={{headerShown: false}}/>
                <Stack.Screen name="login/splash" options={{headerShown: false}}/>

                {/* signup */}
                <Stack.Screen name="signup" options={{headerShown: false}}/>
                <Stack.Screen name="signup/otp" options={{headerShown: false}}/>

                {/* onboard */}
                <Stack.Screen name="onboard/name" options={{headerShown: false}}/>
                <Stack.Screen name="onboard/check-employed" options={{headerShown: false}}/>
                <Stack.Screen name="onboard/check-status" options={{headerShown: false}}/>
                <Stack.Screen name="onboard/employment-details" options={{headerShown: false}}/>
                <Stack.Screen name="onboard/welcome" options={{headerShown: false}}/>
                <Stack.Screen name="onboard/building" options={{headerShown: false}}/>
                <Stack.Screen name="onboard/reveal-ladder" options={{headerShown: false}}/>

                {/* questions */}
                <Stack.Screen name="questions/jobber/step1" options={{headerShown: false}}/>
                <Stack.Screen name="questions/jobber/step2" options={{headerShown: false}}/>

                <Stack.Screen name="questions/student/step1" options={{headerShown: false}}/>
                <Stack.Screen name="questions/student/step2" options={{headerShown: false}}/>

                <Stack.Screen name="questions/seeker/step1" options={{headerShown: false}}/>
                <Stack.Screen name="questions/seeker/step2" options={{headerShown: false}}/>

                {/* skills */}


                {/* careers */}


                {/* profile */}
                <Stack.Screen name="profile/preferences" options={{headerShown: false}}/>

                {/* tabs */}
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>

                {/* not found */}
                <Stack.Screen name="+not-found"/>

            </Stack>
        </ThemeProvider>
    );
}