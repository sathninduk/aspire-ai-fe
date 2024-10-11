import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {useAuthRedirect} from "@/app/hooks/useAuthRedirect";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  useAuthRedirect();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
          name="skill"
          options={{
              title: 'Skill',
              tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} />
              ),
          }}
      />
      <Tabs.Screen
        name="ai"
        options={{
          title: 'AI',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'star' : 'star-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
          name="job"
          options={{
              title: 'Job',
              tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'briefcase' : 'briefcase-outline'} color={color} />
              ),
          }}
      />
      <Tabs.Screen
          name="profile"
          options={{
              title: 'Profile',
              tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
              ),
          }}
      />
    </Tabs>
  );
}