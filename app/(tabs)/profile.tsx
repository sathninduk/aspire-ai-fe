import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types'; // Adjust the path based on your structure
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Link } from 'expo-router'; // Import the Link component


type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootStackParamList, 'MainTabs'>,
  StackNavigationProp<RootStackParamList>
>;

export default function TabProfileScreen() {
    const navigation = useNavigation<ProfileScreenNavigationProp>(); // Specify the type for navigation
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
                    style={styles.editButton} // Apply the same styles as before
                    >
                <Ionicons name="pencil" size={20} color="#fff" />
                <Text style={styles.editText}>Edit profile</Text>
                 </Link>
                {/*<TouchableOpacity style={styles.editButton}
                onPress={() => navigation.navigate('EditProfile')}>
                    <Ionicons name="pencil" size={20} color="#fff" />
                    <Text style={styles.editText}>Edit profile</Text>
                </TouchableOpacity> */}
            </View>

            {/* Menu Sections */}
            <View style={styles.menuSection}>
                <TouchableOpacity style={styles.menuItem}>
                    <Ionicons name="person-outline" size={20} color="#6c63ff" />
                    <Text style={styles.menuText}>About me</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <FontAwesome5 name="briefcase" size={20} color="#6c63ff" />
                    <Text style={styles.menuText}>Work experience</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Ionicons name="school-outline" size={20} color="#6c63ff" />
                    <Text style={styles.menuText}>Education</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Ionicons name="snow-outline" size={20} color="#6c63ff" />
                    <Text style={styles.menuText}>Skill</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <MaterialIcons name="settings" size={20} color="#6c63ff" />
                    <Text style={styles.menuText}>Preferences</Text>
                </TouchableOpacity>

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
    },
    editText: {
        color: '#fff',
        marginLeft: 5,
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
});
