import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';

type Specialization = {
  id: string;
  title: string;
  jobCount: number;
  icon: string; // icon name from Ionicons
};

type SpecializationListProps = {
  specializations: Specialization[];
};

const SpecializationList: React.FC<SpecializationListProps> = ({ specializations }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Specialization</Text>
      <FlatList
        data={specializations}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.iconContainer}>
            <Ionicons name={item.icon as any} size={30} color="#8F73F3" />
            </View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.jobCount}>{item.jobCount} Jobs</Text>
          </View>
        )}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0D0140',
    marginBottom: 15,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#F7F7F8',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  iconContainer: {
    backgroundColor: '#ECE8FF',
    padding: 10,
    borderRadius: 50,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0D0140',
    textAlign: 'center',
    marginBottom: 5,
  },
  jobCount: {
    fontSize: 14,
    color: '#999',
  },
});

export default SpecializationList;
