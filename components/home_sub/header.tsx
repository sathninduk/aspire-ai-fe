import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Searchbar, IconButton } from 'react-native-paper';

const JobSkillsHomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim() === '') {
        setSearchResults([]);
        return;
      }

      try {
        const response = await fetch(`https://api.example.com/jobs?query=${searchQuery}`);
        const data = await response.json();
        setSearchResults(data.jobs); // Assuming `data.jobs` is the array of job results
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    const debounceTimeout = setTimeout(fetchSearchResults, 300); // Debounce API calls
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

      <Text style={styles.subTitle}>Top Searched Companies</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.companyRow}>
        {["WSO2", "Codegen", "IFS", "Virtusa", "Cambio"].map((company, index) => (
          <Button key={index} mode="outlined" style={styles.companyButton} labelStyle={styles.buttonLabel}>{company}</Button>
        ))}
      </ScrollView>

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
          onPress={() => console.log("Filter button pressed")} 
          style={styles.filterButton}
          iconColor="#FFFFFF" 
        />
      </View>

      {searchResults.length > 0 && (
        <View style={styles.resultsContainer}>
          {searchResults.map((result, index) => (
            <Text key={index} style={styles.resultItem}>{result}</Text>
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
    padding: 20,
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
  subTitle: {
    fontSize: 16,
    color: '#150B3D',
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  companyRow: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  companyButton: {
    backgroundColor: '#F2F2F2',
    margin: 5,
    borderRadius: 10,
    borderColor: '#fff',
    paddingHorizontal: 15,
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
  resultItem: {
    padding: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default JobSkillsHomeScreen;


