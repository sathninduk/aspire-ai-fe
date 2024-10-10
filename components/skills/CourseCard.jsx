import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CourseCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://example.com/image.png' }} // Replace with a valid image URL
          style={styles.image}
        />
      </View>
      <Text style={styles.instructor}>SILVERDOLE SELVESTER</Text>
      <Text style={styles.title}>Basics of UI/UX Design</Text>
      <View style={styles.infoContainer}>
        <MaterialIcons name="schedule" size={16} color="gray" />
        <Text style={styles.infoText}>12h 52m</Text>
        <MaterialIcons name="star" size={16} color="orange" />
        <Text style={styles.infoText}>4.7</Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity>
          <Text style={styles.actionText}>Mark as Done</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.actionText}>View Course</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E0DDFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  instructor: {
    fontSize: 12,
    color: '#9B9B9B',
    textAlign: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A3A3A',
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  infoText: {
    fontSize: 14,
    color: 'gray',
    marginHorizontal: 4,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  actionText: {
    color: '#8A6AF7',
    fontWeight: '600',
  },
});

export default CourseCard;
