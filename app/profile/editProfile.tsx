import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types'; // Adjust this import as necessary
import { Link } from 'expo-router'; // Import the Link component

// Define the navigation prop type
type EditProfileScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'EditProfile'>; // Navigation prop
    route: RouteProp<RootStackParamList, 'EditProfile'>; // Route prop (if needed)
};

// Functional component
const EditProfileScreen: React.FC<EditProfileScreenProps> = ({ navigation }) => {
    const [name, setName] = useState('Sathnindu Kottage');
    const [location, setLocation] = useState('Colombo, Sri Lanka');
    const [aboutMe, setAboutMe] = useState('I am a passionate software architect with more than 6+ years in the Industry.');
    const [jobTitle, setJobTitle] = useState('Software Architect');
    const [company, setCompany] = useState('CodeGen International');
    const [educationDegree, setEducationDegree] = useState('Information Technology Specialized in Software Engineering');
    const [school, setSchool] = useState('Sri Lanka Institute of Information Technology');

    const handleSave = () => {
        // Save logic here, e.g., sending data to an API
        navigation.goBack(); // Navigate back to the profile screen
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} // Replace with actual image URL
                    style={styles.profileImage}
                />
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.location}>{location}</Text>
                <Link 
                    href="/profile/editBio" // Set the href to the EditBio route
                    style={styles.editButton} // Apply the same styles as before
                >
                    <Ionicons name="pencil" size={20} color="#fff" />
                    <Text style={styles.editText}>Edit Bio</Text>
                </Link>
            </View>

            {/* About Me Section */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>About me</Text>
                    <Ionicons name="pencil-outline" size={20} color="#6c63ff" />
                </View>
                <TextInput
                    style={styles.sectionContent}
                    value={aboutMe}
                    onChangeText={setAboutMe}
                    multiline
                    textAlignVertical="top" // Ensures text starts from the top
                />
            </View>

            {/* Work Experience Section */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Work experience</Text>
                    <Ionicons name="add-outline" size={20} color="#6c63ff" />
                </View>
                <View style={styles.experienceItem}>
                    <TextInput
                        style={styles.jobTitleInput}
                        value={jobTitle}
                        onChangeText={setJobTitle}
                        placeholder="Job Title"
                    />
                    <TextInput
                        style={styles.companyInput}
                        value={company}
                        onChangeText={setCompany}
                        placeholder="Company"
                    />
                </View>
            </View>

            {/* Education Section */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Education</Text>
                    <Ionicons name="add-outline" size={20} color="#6c63ff" />
                </View>
                <View style={styles.educationItem}>
                    <TextInput
                        style={styles.degreeInput}
                        value={educationDegree}
                        onChangeText={setEducationDegree}
                        placeholder="Degree"
                    />
                    <TextInput
                        style={styles.schoolInput}
                        value={school}
                        onChangeText={setSchool}
                        placeholder="School"
                    />
                </View>
            </View>

            {/* Skills Section */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Skills</Text>
                    <Ionicons name="pencil-outline" size={20} color="#6c63ff" />
                </View>
                <View style={styles.skillTags}>
                    <Text style={styles.skill}>Leadership</Text>
                    <Text style={styles.skill}>Teamwork</Text>
                    <Text style={styles.skill}>Visioner</Text>
                    <Text style={styles.skill}>Target oriented</Text>
                    <Text style={styles.skill}>Consistent</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.seeMore}>See more</Text>
                </TouchableOpacity>
            </View>

            {/* Preferences Section */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Preferences</Text>
                    <Ionicons name="pencil-outline" size={20} color="#6c63ff" />
                </View>
                {/* Add input fields or additional preferences here */}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    headerContainer: {
        backgroundColor: '#6c63ff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 20,
        alignItems: 'center',
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    name: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    location: {
        color: '#d0d0d0',
        marginBottom: 10,
    },
    editButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4d47ff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginTop: 10,
         position: 'absolute', // Use absolute positioning
    right: 30, // Align to the right
    top: 125, // Adjust the top position if necessary
    },
    editText: {
        color: '#fff',
        marginLeft: 5,
    },
    section: {
        backgroundColor: '#f5f5f5',
        padding: 16,
        borderRadius: 10,
        marginBottom: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    sectionContent: {
        fontSize: 14,
        color: '#666',
    },
    experienceItem: {
        marginBottom: 10,
    },
    jobTitleInput: {
        fontWeight: 'bold',
    },
    companyInput: {
        fontSize: 14,
        color: '#666',
    },
    educationItem: {
        marginBottom: 10,
    },
    degreeInput: {
        fontWeight: 'bold',
    },
    schoolInput: {
        fontSize: 14,
        color: '#666',
    },
    skillTags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    skill: {
        backgroundColor: '#6c63ff',
        color: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 5,
        marginBottom: 5,
    },
    seeMore: {
        color: '#6c63ff',
        marginTop: 10,
        fontWeight: 'bold',
    },
});

export default EditProfileScreen;
