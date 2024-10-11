import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import JobCard from '../../components/home_sub/JobCard';
import { BACKEND_URL } from '@/config';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const FilterScreen = () => {
    const navigation = useNavigation(); // Initialize navigation
    const [category, setCategory] = useState('Software Engineering');
    const [jobType, setJobType] = useState('Full time');
    const [positionLevel, setPositionLevel] = useState('Senior');
    const [jobResults, setJobResults] = useState<any[]>([
        // Default job results
        {
            position: 'Software Engineer',
            company: 'Tech Solutions',
            location: 'Remote',
            tags: ['JavaScript', 'React', 'Node.js'],
            source: 'TechJobs',
            url: 'https://techsolutions.com/jobs/12345',
        },
        {
            position: 'Frontend Developer',
            company: 'Web Innovations',
            location: 'Remote',
            tags: ['HTML', 'CSS', 'React'],
            source: 'WebJobs',
            url: 'https://webinnovations.com/jobs/54321',
        },
    ]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const jobTypes = ['Full time', 'Part time', 'Remote'];
    const positionLevels = ['Junior', 'Senior', 'Leader', 'Manager'];
    const location = "Remote";

    const handleApplyFilters = async () => {
        setLoading(true);
        setError(null);

        // Create the search query using the selected filters
        const searchQuery = `${category.toLowerCase()} ${jobType.toLowerCase()} ${positionLevel.toLowerCase()}`;

        try {
            const response = await fetch(`${BACKEND_URL}/job?keyword=${encodeURIComponent(searchQuery)}&location=${encodeURIComponent(location)}&page=1`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setJobResults(data);
        } catch (error) {
            console.error('Error fetching job results:', error);
            setError('Failed to fetch job results, please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backButton}>← Back</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Filter</Text>
            </View>

            <View style={styles.box}>
                <Text style={styles.label}>Category</Text>
                <TextInput
                    style={styles.input}
                    value={category}
                    onChangeText={setCategory}
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

                <Text style={styles.label}>Position Level</Text>
                <View style={styles.jobTypeContainer}>
                    {positionLevels.map((level) => (
                        <TouchableOpacity
                            key={level}
                            style={[styles.jobTypeButton, positionLevel === level && styles.activeJobType]}
                            onPress={() => setPositionLevel(level)}
                        >
                            <Text style={styles.jobTypeText}>{level}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity style={styles.applyButton} onPress={handleApplyFilters}>
                    <Text style={styles.applyButtonText}>APPLY FILTERS</Text>
                </TouchableOpacity>
            </View>

            {loading && <Text style={styles.loadingText}>Loading...</Text>}
            {error && <Text style={styles.errorText}>{error}</Text>}

            <ScrollView style={styles.resultsContainer}>
                {jobResults.map((result, index) => (
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
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F8F8F8',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    backButton: {
        fontSize: 18,
        color: '#8F73F3',
    },
    box: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 50,
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
        paddingVertical: 15,
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 5,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        alignItems: 'center',
    },
    activeJobType: {
        backgroundColor: '#E8E8E8',
    },
    jobTypeText: {
        fontSize: 16,
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
    loadingText: {
        marginTop: 20,
        fontSize: 16,
    },
    errorText: {
        color: 'red',
    },
    resultsContainer: {
        marginTop: 20,
        width: '100%',
    },
});

export default FilterScreen;
