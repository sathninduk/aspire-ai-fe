import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Searchbar, IconButton } from 'react-native-paper';
import { TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "@/app/navigation/types";
import JobCard from './JobCard';  // Import the JobCard component
import { BACKEND_URL } from '@/config';

const JobSkillsHomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const location = "Remote";
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim() === '') {
        setSearchResults([]);
        return;
      }
    
      setLoading(true);
      setError(null);
    
      try {
        const response = await fetch(`${BACKEND_URL}/job?keyword=${encodeURIComponent(searchQuery)}&location=${encodeURIComponent(location)}&page=1`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setError('Failed to fetch jobs, please try again later.');
      } finally {
        setLoading(false);
      }
    };
    const debounceTimeout = setTimeout(fetchSearchResults, 300); 
    return () => clearTimeout(debounceTimeout);
  }, [searchQuery]);

  return (
    <ScrollView style={styles.screenContainer} contentContainerStyle={{ alignItems: 'center' }}>
      <Text style={styles.title}>Careers</Text>

      <View style={styles.tabContainer}>
        <Button mode="contained" style={[styles.tabButton, styles.activeTab]} labelStyle={styles.activeButtonLabel}>Overview</Button>
        <Button mode="outlined" style={[styles.tabButton, styles.inactiveTab]} labelStyle={styles.buttonLabel}>Viewed</Button>
        <Button mode="outlined" style={[styles.tabButton, styles.inactiveTab]} labelStyle={styles.buttonLabel}>Interviews</Button>
      </View>

      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />
        <IconButton
          icon="filter-outline" 
          size={38}
          onPress={() => navigation.navigate('Filter')} // Navigate to the FilterScreen
          style={styles.filterButton}
          iconColor="#FFFFFF" 
        />
      </View>

      {loading && <Text>Loading...</Text>}
      {error && <Text style={styles.errorText}>{error}</Text>}

      {searchResults.length > 0 && (
        <View style={styles.resultsContainer}>
          {searchResults.map((result, index) => (
            <JobCard
              key={index}
              position={result.position}
              company={result.company}
              location={result.location}
              tags={result.tags || []} 
              source={result.source} 
              url={result.url} 
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D0140',
    marginBottom: 20,
  },
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  searchBar: {
    flex: 1,
    borderRadius: 10,
  },
  filterButton: {
    marginLeft: 10,
    backgroundColor: '#6A41FF',
    borderRadius: 8,
  },
  resultsContainer: {
    marginTop: 20,
    width: '100%',
  },
  errorText: {
    color: 'red',
  },
});

export default JobSkillsHomeScreen;
