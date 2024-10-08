import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from "@/app/navigation/types";

export default function OnboardingStep1() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Welcome to the App</ThemedText>
      <Button title="Next" onPress={() => navigation.navigate('Onboarding2')} />
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