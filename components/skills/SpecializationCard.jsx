import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SpecializationCard = ({ title, courses }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.courseCount}>{courses} Courses</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E0DDFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    width: '45%', // Adjust width as necessary
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3A3A3A',
  },
  courseCount: {
    fontSize: 14,
    color: 'gray',
  },
});

export default SpecializationCard;
