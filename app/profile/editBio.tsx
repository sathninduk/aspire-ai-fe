import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, Picker } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router'; // Import the Link component

// Functional component
const EditBio: React.FC = () => {
    const [fullname, setFullname] = useState('Sathnindu Kottage');
    const [username, setUsername] = useState('Sathnindu');
    const [jobTitle, setJobTitle] = useState('Software Architect');
    const [email, setEmail] = useState('sathniduk@gmail.com');
    const [phoneNumber, setPhoneNumber] = useState('778654785');
    const [location, setLocation] = useState('Colombo, Sri Lanka');
    const [countryCode, setCountryCode] = useState('+94'); // Default to Sri Lanka

    const handleSave = () => {
        // Save logic here, e.g., sending data to an API
        console.log('Profile saved');
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} // Profile image URL
                    style={styles.profileImage}
                />
                <Text style={styles.fullname}>{fullname}</Text>
                <Text style={styles.location}>{location}</Text>
            </View>

            {/* Input fields */}
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Fullname</Text>
                <TextInput
                    style={styles.input}
                    value={fullname}
                    onChangeText={setFullname}
                />

                <Text style={styles.inputLabel}>Username</Text>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                />

                <Text style={styles.inputLabel}>Job Title</Text>
                <TextInput
                    style={styles.input}
                    value={jobTitle}
                    onChangeText={setJobTitle}
                />

                <Text style={styles.inputLabel}>Email address</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <Text style={styles.inputLabel}>Phone number</Text>
                <View style={styles.phoneInputContainer}>
                    {/* Country Code Picker */}
                    <Picker
                        selectedValue={countryCode}
                        style={styles.countryCodePicker}
                        onValueChange={(itemValue) => setCountryCode(itemValue)}
                    >
                        <Picker.Item label="+94" value="+94" />
                        <Picker.Item label="+1" value="+1" />
                        <Picker.Item label="+44" value="+44" />
                        <Picker.Item label="+91" value="+91" />
                        {/* Add more country codes as needed */}
                    </Picker>
                    {/* Phone Number Input */}
                    <TextInput
                        style={styles.phoneInput}
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        keyboardType="phone-pad"
                    />
                </View>

                <Text style={styles.inputLabel}>Location</Text>
                <TextInput
                    style={styles.input}
                    value={location}
                    onChangeText={setLocation}
                />
            </View>

            {/* Save button */}
            <Link href ="/(tabs)/profile"
            style={styles.saveButton} >
                <Text style={styles.saveButtonText}>Save</Text>
            </Link>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        backgroundColor: '#6c63ff',
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center', // Center items
    },
    profileImage: {
        width: 80, // Adjusted size for consistency
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    fullname: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    location: {
        color: '#e0e0e0',
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
    },
    editText: {
        color: '#fff',
        marginLeft: 5,
        fontSize:14,
    },
    inputContainer: {
        padding: 20,
    },
    inputLabel: {
        marginBottom: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#666',
    },
    input: {
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
    },
    countryCodePicker: {
        width: 80,
        marginRight: 10,
    },
    phoneInput: {
        flex: 1,
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: '#6c63ff',
        padding: 15,
        margin: 20,
        borderRadius: 8,
        alignItems: 'center',
        alignContent:'center'
    },
    saveButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        
    },
});

export default EditBio;
