import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types'; // Adjust this import as necessary
import {useNavigation, ParamListBase} from "@react-navigation/native";


// Define the navigation prop type
type EditProfileScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'EditProfile'>; // Navigation prop
    route: RouteProp<RootStackParamList, 'EditProfile'>; // Route prop (if needed)
};

// Functional component
const EditProfileScreen: React.FC<EditProfileScreenProps> = ({ navigation }) => {
    const [name, setName] = useState('Sathindu Kottage');
    const [location, setLocation] = useState('Colombo, Sri Lanka');
    const [aboutMe, setAboutMe] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    const [jobTitle, setJobTitle] = useState('Software Architect');
    const [company, setCompany] = useState('CodeGen International');
    const [educationDegree, setEducationDegree] = useState('Information Technology');
    const [school, setSchool] = useState('Sri Lanka Institute of Information Technology');

    const handleSave = () => {
        // Save logic here, e.g., sending data to an API
        navigation.goBack(); // Navigate back to the profile screen
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <View style={styles.profileContainer}>
                    <Image
                        source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} // Replace with your image URL
                        style={styles.profileImage}
                    />
                    <View style={styles.profileDetails}>
                        <TextInput
                            style={styles.nameInput}
                            value={name}
                            onChangeText={setName}
                        />
                        <TextInput
                            style={styles.locationInput}
                            value={location}
                            onChangeText={setLocation}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.editButton} onPress={handleSave}>
                    <Ionicons name="save" size={20} color="#fff" />
                </TouchableOpacity>
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
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        position: 'relative',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    profileDetails: {
        marginLeft: 10,
    },
    nameInput: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: 'transparent',
    },
    locationInput: {
        color: '#d0d0d0',
        backgroundColor: 'transparent',
    },
    editButton: {
        position: 'absolute',
        right: 20,
        top: 20,
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
