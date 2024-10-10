import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

interface JobCardProps {
  position: string;
  company: string;
  location: string;
  tags: string[];
  source: string;  
  url: string;   
}

const JobCard: React.FC<JobCardProps> = ({ position, company, location, tags, source, url }) => {
  const handleViewPlatform = () => {
   
    Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
  };

  const handleSourceLink = () => {
    // Check if the source URL starts with http:// or https://
    let platformUrl = source;
    if (!/^https?:\/\//.test(source)) {
      platformUrl = 'http://' + source; // Prepend http:// if not present
    }
    Linking.openURL(platformUrl).catch((err) => console.error('Failed to open platform link:', err));
  };

  return (
    <View style={styles.cardContainer}>
      {/* Display source as the platform name, which is clickable */}
      <TouchableOpacity onPress={handleSourceLink} style={styles.sourceContainer}>
        <Text style={styles.sourceText}>{source}</Text>
      </TouchableOpacity>
      
      <Text style={styles.positionText}>{position}</Text>
      <Text style={styles.companyText}>{company}</Text>
      <Text style={styles.locationText}>{location}</Text>
      
      {/* Display tags if there are any */}
      <View style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <Text key={index} style={styles.tagText}>{tag}</Text>
        ))}
      </View>

      {/* Button to view the platform link */}
      <TouchableOpacity
        style={styles.viewButton}
        onPress={handleViewPlatform}
      >
        <Text style={styles.viewButtonText}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '100%',
  },
  sourceContainer: {
    marginBottom: 10,
  },
  sourceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#524B6B',
  },
  positionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D0140',
  },
  companyText: {
    fontSize: 16,
    color: '#6A41FF',
    marginVertical: 5,
  },
  locationText: {
    fontSize: 14,
    color: '#524B6B',
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tagText: {
    fontSize: 12,
    color: '#6A41FF',
    marginRight: 10,
  },
  viewButton: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10, 
    backgroundColor: '#6A41FF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default JobCard;
