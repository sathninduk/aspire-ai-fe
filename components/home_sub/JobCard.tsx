import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface JobCardProps {
  logo: string; // URL for the company logo
  position: string;
  company: string;
  location: string;
  tags: string[];
}

const JobCard: React.FC<JobCardProps> = ({ logo, position, company, location, tags }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: logo }} style={styles.logo} />
      <Text style={styles.position}>{position}</Text>
      <Text style={styles.company}>{company}</Text>
      <Text style={styles.location}>{location}</Text>
      <View style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 3,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  position: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E0E62',
  },
  company: {
    fontSize: 14,
    color: '#7B7B7B',
  },
  location: {
    fontSize: 14,
    color: '#7B7B7B',
    marginBottom: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    padding: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  tagText: {
    fontSize: 12,
    color: '#524B6B',
  },
});

export default JobCard;
