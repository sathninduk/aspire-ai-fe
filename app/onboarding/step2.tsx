import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from "@/app/navigation/types";

export default function OnboardingStep2() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Get Started</ThemedText>
      <Button title="Finish" onPress={() => navigation.navigate('MainTabs')} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});