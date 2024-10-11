import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Define the types for the props
interface CourseCardProps {
  title: string;
  url: string;
  source: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, url, source }) => {
  // Function to handle opening the course URL
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text> {/* Display dynamic course title */}
      <Text style={styles.source}>{source}</Text> {/* Display dynamic source */}
      
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.actionText}>View Course</Text> {/* Link to the course */}
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A3A3A',
    textAlign: 'center',
    marginBottom: 8,
  },
  source: {
    fontSize: 12,
    color: '#9B9B9B',
    textAlign: 'center',
    marginBottom: 4,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  actionText: {
    color: '#8A6AF7',
    fontWeight: '600',
  },
});

export default CourseCard;
