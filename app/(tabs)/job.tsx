import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import JobSkillsHomeHeader from '@/components/home_sub/header';
import SpecializationList from '@/components/home_sub/SpecializationList';
import JobCard from '@/components/home_sub/JobCard';


export default function TabJobScreen() {

    const [specializations, setSpecializations] = useState([
        { id: '1', title: 'Software Engineering', jobCount: 140, icon: 'code-slash' },
        { id: '2', title: 'Finance', jobCount: 250, icon: 'cash-outline' },
        { id: '3', title: 'Education', jobCount: 120, icon: 'school-outline' },
        { id: '4', title: 'Restaurant', jobCount: 85, icon: 'restaurant-outline' },
        { id: '5', title: 'Health', jobCount: 235, icon: 'heart-outline' },
        { id: '6', title: 'Programmer', jobCount: 412, icon: 'desktop-outline' },
      ]);
    

    return (
        <ScrollView style={styles.container}>
            <JobSkillsHomeHeader />

            <SpecializationList specializations={specializations} />
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
});
