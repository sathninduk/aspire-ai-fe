import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Linking, TouchableOpacity } from 'react-native';
import JobCard from '../../components/home_sub/JobCard';

interface Job {
  position: string;
  company: string;
  location: string;
  tags: string[];
  source: string; // Platform name (instead of logo)
  url: string;   // URL for the job posting
}

interface SearchResultsScreenProps {
  route: {
    params: {
      searchResults: Job[];
    };
  };
}

const SearchResultsScreen: React.FC<SearchResultsScreenProps> = ({ route }) => {
  const { searchResults } = route.params;

  return (
    <ScrollView style={styles.screenContainer}>
      <Text style={styles.title}>Search Results</Text>

      {searchResults.length > 0 ? (
        <View style={styles.resultsContainer}>
          {searchResults.map((job, index) => (
            <JobCard
              key={index}
              position={job.position}
              company={job.company}
              location={job.location}
              tags={job.tags}
              source={job.source}
              url={job.url} // Passed here for the "View Platform" button
            />
          ))}
        </View>
      ) : (
        <Text style={styles.noResultsText}>No results found.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D0140',
    marginVertical: 20,
  },
  resultsContainer: {
    width: '100%',
  },
  noResultsText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SearchResultsScreen;
