import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const FilterScreen = () => {
    const [category, setCategory] = useState('Software Engineering');
    const [subCategory, setSubCategory] = useState('Backend Development');
    const [location, setLocation] = useState('Sri Lanka');
    const [jobType, setJobType] = useState('Full time');

    const jobTypes = ['Full time', 'Part time', 'Remote'];

    const handleApplyFilters = () => {
        // Handle applying filters logic here
        console.log('Filters applied:', { category, subCategory, location, jobType });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Filter</Text>

            <Text style={styles.label}>Category</Text>
            <TextInput
                style={styles.input}
                value={category}
                onChangeText={setCategory}
            />

            <Text style={styles.label}>Sub Category</Text>
            <TextInput
                style={styles.input}
                value={subCategory}
                onChangeText={setSubCategory}
            />

            <Text style={styles.label}>Location</Text>
            <TextInput
                style={styles.input}
                value={location}
                onChangeText={setLocation}
            />

            <Text style={styles.label}>Job Type</Text>
            <View style={styles.jobTypeContainer}>
                {jobTypes.map((type) => (
                    <TouchableOpacity
                        key={type}
                        style={[styles.jobTypeButton, jobType === type && styles.activeJobType]}
                        onPress={() => setJobType(type)}
                    >
                        <Text style={styles.jobTypeText}>{type}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity style={styles.applyButton} onPress={handleApplyFilters}>
                <Text style={styles.applyButtonText}>APPLY FILTERS</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    jobTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    jobTypeButton: {
        padding: 10,
        borderRadius: 5,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    activeJobType: {
        backgroundColor: '#E8E8E8',
    },
    jobTypeText: {
        fontSize: 14,
    },
    applyButton: {
        backgroundColor: '#8F73F3',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    applyButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default FilterScreen;
