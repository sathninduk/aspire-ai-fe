import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="gray" />
      <TextInput placeholder="Search" style={styles.input} />
      <MaterialIcons name="tune" size={20} color="#8A6AF7" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    padding: 8,
    marginVertical: 12,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    color: '#3A3A3A',
  },
});

export default SearchBar;
