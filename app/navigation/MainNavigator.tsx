// app/navigation/MainNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabLayout from '@/app/(tabs)/_layout';
import { useAuthRedirect } from '@/app/hooks/useAuthRedirect';
import TabJobScreen from '@/components/home_sub/header'
import FilterScreen from '@/app/careers/filter';
import TabProfileScreen from "@/app/(tabs)/profile";
import EditBio from '../profile/editBio';

const Stack = createStackNavigator();

export default function MainNavigator() {
  useAuthRedirect();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={TabLayout} />
        <Stack.Screen name="TabJob" component={TabJobScreen} />
        <Stack.Screen name="Filter" component={FilterScreen } />
        <Stack.Screen name="EditProfile" component={TabProfileScreen} />
        <Stack.Screen name="EditBio" component={EditBio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}