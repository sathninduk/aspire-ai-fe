import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types'; // Adjust the path based on your structure
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Link } from 'expo-router';
import AsyncStorage from "@react-native-async-storage/async-storage";


type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootStackParamList, 'MainTabs'>,
  StackNavigationProp<RootStackParamList>
>;

export default function TabProfileScreen() {
    const navigation = useNavigation<ProfileScreenNavigationProp>(); // Specify the type for navigation

    function logout() {
        AsyncStorage.removeItem('isAuthenticated').then(() => {
            AsyncStorage.removeItem('number').then(() => {
                navigation.navigate('login');
            });
        });
    }

    const updateAiProfile = () => {
        navigation.navigate('onboard/check-employed');
    }

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} // Replace with actual image URL
                    style={[styles.profileImage, {opacity: 0}]}
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

                <TouchableOpacity style={styles.menuItem} onPress={updateAiProfile}>
                    <Ionicons name="reload-sharp" size={20} color="#6c63ff" />
                    <Text style={styles.menuText}>Update AI Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={logout}>
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
    preferencesPosition: {
        textAlign: "left",
        color: "#150b3d",
        fontSize: 14,
        left: 54,
        top: 25,
        position: "absolute"
    },
    iconLayout: {
        height: 24,
        width: 24,
        position: "absolute"
    },
    iconPosition: {
        height: 19,
        left: 25,
        top: 25,
        position: "absolute"
    },
    menuBarIconPosition: {
        width: 414,
        left: 0,
        position: "absolute"
    },
    editProfile1Typo: {
        fontFamily: "DM Sans",
        fontSize: 12,
        color: "#fff",
        textAlign: "left",
        position: "absolute"
    },
    editLayout: {
        height: 30,
        width: 120,
        position: "absolute"
    },
    workExperienceChild: {
        borderRadius: 15,
        height: 70,
        width: 359,
        position: "absolute"
    },
    workExperience1: {
        fontFamily: "DM Sans",
        fontWeight: "700"
    },
    icon: {
        top: 23,
        left: 20,
        height: 24
    },
    workExperience: {
        top: 335,
        left: 28,
        width: 359
    },
    aboutMe: {
        top: 255,
        left: 28,
        width: 359
    },
    icon2: {
        top: 21,
        height: 26,
        width: 24,
        left: 20,
        position: "absolute"
    },
    education: {
        top: 415,
        left: 28,
        width: 359
    },
    skill: {
        top: 495,
        left: 28,
        width: 359
    },
    preferences: {
        fontWeight: "600",
        fontFamily: "OpenSans-SemiBold"
    },
    icon4: {
        width: 14
    },
    resume: {
        top: 576,
        left: 28,
        width: 359
    },
    icon5: {
        width: 19
    },
    resume1: {
        top: 656,
        left: 28,
        width: 359
    },
    backgroundParent: {
        height: 220,
        top: 0,
        width: 414
    },
    maskGroupIcon: {
        top: 43,
        width: 50,
        height: 50,
        left: 27,
        position: "absolute"
    },
    sathninduKottage: {
        top: 100,
        lineHeight: 28,
        fontWeight: "500",
        fontFamily: "DM Sans",
        color: "#fff",
        textAlign: "left",
        fontSize: 14,
        left: 28,
        position: "absolute"
    },
    colomboSriLanka: {
        top: 126,
        left: 27
    },
    editProfileChild: {
        borderRadius: 6,
        opacity: 0.1,
        left: 0,
        top: 0
    },
    editProfile1: {
        top: 7,
        left: 15
    },
    editIcon: {
        top: 3,
        left: 86
    },
    editProfile: {
        top: 161,
        left: 267
    },
    menuBarIcon: {
        bottom: 0,
        height: 72,
        overflow: "hidden"
    },
    logout: {
        backgroundColor: "#f9f9f9",
        flex: 1,
        width: "100%",
        height: 896,
        overflow: "hidden"
    }
});

