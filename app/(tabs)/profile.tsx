import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabProfileScreen() {
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
                        <Text style={styles.name}>Sathindu Kottage</Text>
                        <Text style={styles.location}>Colombo, Sri Lanka</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.editButton}>
                    <Ionicons name="pencil" size={20} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* About Me Section */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>About me</Text>
                    <Ionicons name="pencil-outline" size={20} color="#6c63ff" />
                </View>
                <Text style={styles.sectionContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </Text>
            </View>

            {/* Work Experience Section */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Work experience</Text>
                    <Ionicons name="add-outline" size={20} color="#6c63ff" />
                </View>
                <View style={styles.experienceItem}>
                    <Text style={styles.jobTitle}>Software Architect</Text>
                    <Text style={styles.company}>CodeGen International</Text>
                    <Text style={styles.dates}>Jan 2019 - Feb 2024 • 5 Years</Text>
                </View>
            </View>

            {/* Education Section */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Education</Text>
                    <Ionicons name="add-outline" size={20} color="#6c63ff" />
                </View>
                <View style={styles.educationItem}>
                    <Text style={styles.degree}>Information Technology</Text>
                    <Text style={styles.school}>Sri Lanka Institute of Information Technology</Text>
                    <Text style={styles.dates}>Sep 2010 - Aug 2013 • 5 Years</Text>
                </View>
            </View>

            {/* Skills Section */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Skill</Text>
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
            </View>
        </ScrollView>
    );
}

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
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    location: {
        color: '#d0d0d0',
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
    jobTitle: {
        fontWeight: 'bold',
    },
    company: {
        fontSize: 14,
        color: '#666',
    },
    dates: {
        fontSize: 12,
        color: '#999',
    },
    educationItem: {
        marginBottom: 10,
    },
    degree: {
        fontWeight: 'bold',
    },
    school: {
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
