// app/navigation/MainNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@/app/login';
import Step1 from '@/app/questions/step1';
import Step2 from '@/app/questions/step2';
import TabLayout from '@/app/(tabs)/_layout';
import { useAuthRedirect } from '@/app/hooks/useAuthRedirect';
import EditProfileScreen from '../profile/editProfile';
import TabProfileScreen from "@/app/(tabs)/profile";

const Stack = createStackNavigator();

export default function MainNavigator() {
  useAuthRedirect();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Onboarding1" component={Step1} />
        <Stack.Screen name="Onboarding2" component={Step2} />
        <Stack.Screen name="MainTabs" component={TabLayout} />
        <Stack.Screen name="EditProfile" component={TabProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}