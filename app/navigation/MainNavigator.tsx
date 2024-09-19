import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@/app/login';
import OnboardingScreen1 from '@/app/onboarding/OnboardingScreen1';
import OnboardingScreen2 from '@/app/onboarding/OnboardingScreen2';
import TabLayout from '@/app/(tabs)/_layout';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Onboarding1" component={OnboardingScreen1} />
        <Stack.Screen name="Onboarding2" component={OnboardingScreen2} />
        <Stack.Screen name="MainTabs" component={TabLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}