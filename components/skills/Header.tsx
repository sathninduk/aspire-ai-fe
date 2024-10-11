import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skills</Text>
      <View style={styles.tabContainer}>
        <TouchableOpacity>
          <Text style={[styles.tab, styles.activeTab]}>Viewed</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.tab}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.tab}>Skill Badge</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginVertical: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  tab: {
    fontSize: 16,
    color: 'gray',
    paddingVertical: 6,
  },
  activeTab: {
    color: '#8A6AF7',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: '#8A6AF7',
  },
});

export default Header;
