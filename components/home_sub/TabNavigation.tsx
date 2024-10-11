import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const TabNavigation: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [activeTab, setActiveTab] = useState<'overview' | 'viewed' | 'interviews'>('overview');

  const handleTabPress = (tab: 'overview' | 'viewed' | 'interviews') => {
    setActiveTab(tab); // Set the active tab

    // Navigate based on the active tab
    switch (tab) {
      case 'overview':
        navigation.navigate('OverviewScreen'); // Adjust the screen name as needed
        break;
      case 'viewed':
        navigation.navigate('ViewedScreen'); // Adjust the screen name as needed
        break;
      case 'interviews':
        navigation.navigate('careers/InterviewScreen');
        break;
    }
  };

  return (
    <View style={styles.tabContainer}>
      <Button
        mode="contained"
        style={[styles.tabButton, activeTab === 'overview' ? styles.activeTab : styles.inactiveTab]}
        labelStyle={activeTab === 'overview' ? styles.activeButtonLabel : styles.buttonLabel}
        onPress={() => handleTabPress('overview')}
      >
        Overview
      </Button>
      <Button
        mode="outlined"
        style={[styles.tabButton, activeTab === 'viewed' ? styles.activeTab : styles.inactiveTab]}
        labelStyle={activeTab === 'viewed' ? styles.activeButtonLabel : styles.buttonLabel}
        onPress={() => handleTabPress('viewed')}
      >
        Viewed
      </Button>
      <Button
        mode="outlined"
        style={[styles.tabButton, activeTab === 'interviews' ? styles.activeTab : styles.inactiveTab]}
        labelStyle={activeTab === 'interviews' ? styles.activeButtonLabel : styles.buttonLabel}
        onPress={() => handleTabPress('interviews')}
      >
        Interviews
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tabButton: {
    minWidth: 100,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: '#E0D4FF',
    borderRadius: 10,
  },
  inactiveTab: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
  },
  buttonLabel: {
    color: '#524B6B',
    fontWeight: 'bold',
  },
  activeButtonLabel: {
    color: '#6A41FF',
    fontWeight: 'bold',
  },
});

export default TabNavigation;
