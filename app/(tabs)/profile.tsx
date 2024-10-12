import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router'; // Import the Link component

export default function TabProfileScreen() {
  // State to handle expanded sections for all items
  const [expandedSections, setExpandedSections] = useState({
    aboutMe: true,
    workExperience: true,
    education: true,
    skills: true,
    preferences: true,
  });

  // Data for sections
  const aboutMeData = "I am a passionate software architect with more than 6+ years in the Industry.";
  const workExperienceData = "Software Architect. Worked on various projects including mobile and web applications.";
  const educationData = "Information Technology Specialized in Software Engineering";
  const skillData = "React, React Native, JavaScript, TypeScript, SQL, Node.js.";
  const preferencesData = "Dark Mode, English Language.";

  // Toggle section
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section], // Toggle the specific section
    }));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} // Replace with actual image URL
          style={styles.profileImage}
        />
        <Text style={styles.name}>Sathnindu Kottage</Text>
        <Text style={styles.location}>Colombo, Sri Lanka</Text>
        <Link
          href="/profile/editProfile" // Set the href to the EditProfile route
          style={styles.editButton}
        >
          <Ionicons name="pencil" size={20} color="#fff" />
          <Text style={styles.editText}>Edit profile</Text>
        </Link>
      </View>

      {/* Menu Sections */}
      <View style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem} onPress={() => toggleSection('aboutMe')}>
          <Ionicons name="person-outline" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>About me</Text>
        </TouchableOpacity>
        {expandedSections.aboutMe && (
          <View style={styles.detailContainer}>
            <Text>{aboutMeData}</Text>
          </View>
        )}

        <TouchableOpacity style={styles.menuItem} onPress={() => toggleSection('workExperience')}>
          <FontAwesome5 name="briefcase" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>Work experience</Text>
        </TouchableOpacity>
        {expandedSections.workExperience && (
          <View style={styles.detailContainer}>
            <Text>{workExperienceData}</Text>
          </View>
        )}

        <TouchableOpacity style={styles.menuItem} onPress={() => toggleSection('education')}>
          <Ionicons name="school-outline" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>Education</Text>
        </TouchableOpacity>
        {expandedSections.education && (
          <View style={styles.detailContainer}>
            <Text>{educationData}</Text>
          </View>
        )}

        <TouchableOpacity style={styles.menuItem} onPress={() => toggleSection('skills')}>
          <Ionicons name="snow-outline" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>Skill</Text>
        </TouchableOpacity>
        {expandedSections.skills && (
          <View style={styles.detailContainer}>
            <Text>{skillData}</Text>
          </View>
        )}

        <TouchableOpacity style={styles.menuItem} onPress={() => toggleSection('preferences')}>
          <MaterialIcons name="settings" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>Preferences</Text>
        </TouchableOpacity>
        {expandedSections.preferences && (
          <View style={styles.detailContainer}>
            <Text>{preferencesData}</Text>
          </View>
        )}

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="log-out-outline" size={20} color="#6c63ff" />
          <Text style={styles.menuText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#6c63ff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
    alignItems: 'center',
    position: 'relative',
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
    paddingHorizontal: 5,
    borderRadius: 20,
    marginTop: 10,
    position: 'absolute',
    right: 30,
    top: 125,
  },
  editText: {
    color: '#fff',
    marginLeft: 5,
    fontSize:13,
  },
  menuSection: {
    paddingVertical: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  menuText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  detailContainer: {
    padding: 10,
    marginHorizontal: 40,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
  },
});
