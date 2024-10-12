import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image, TouchableHighlight } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Define the types for the props
interface CourseCardProps {
  title?: string;
  url?: string;
  source?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, url, source }) => {
  // Function to handle opening the course URL
  const handlePress = () => {
    if (url) {
      Linking.openURL(url);
    }
  };

  // Function to handle "Mark as completed" action
  const handleMarkAsCompleted = () => {
    console.log(`${title} marked as completed`);
    // You can add further actions, like updating the status in state or making an API call.
  };

  return (
    <View style={{ flex: 1, borderRadius: 15 }}>
      <View style={styles.card}>
        <Image
          style={{ position: "absolute", height: 314, width: "100%" }}
          resizeMode="cover"
          source={require('../../assets/images/cardimage.png')}
        />
        <View style={{ paddingLeft: 200 }}>
          <Text style={styles.silverdoleSelvester}>{title ?? ""}</Text>
          <Text style={styles.basicsOfUiux}>{source ?? ""}</Text>
        </View>
      </View>

      <View style={{ padding: 17 }}>
        <Text style={styles.title2}>{title ?? ""}</Text>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flex: 1, flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Image source={require('../../assets/images/clock.png')} />
            <Text style={styles.time}>12h 52m</Text>
            <Image source={require('../../assets/images/star.png')} />
            <Text style={styles.rating}>4.7</Text>
          </View>

          <TouchableHighlight onPress={handlePress}>
            <Text style={styles.viewCourse}>View Course</Text>
          </TouchableHighlight>
        </View>

        {/* "Mark as Completed" Button */}
        <View style={styles.actionContainer}>
          <TouchableOpacity onPress={handleMarkAsCompleted} style={styles.completedButton}>
            <Text style={styles.completedButtonText}>Mark as Completed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E0DDFF',
    borderRadius: 12,
    position: "relative",
    height: 314,
    overflow: "hidden",
    justifyContent: "center"
  },
  basicsOfUiux: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
    color: "#fff",
    textAlign: "left"
  },
  silverdoleSelvester: {
    fontSize: 12,
    lineHeight: 15,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
    color: "rgba(255, 255, 255, 0.7)",
    textAlign: "left"
  },
  viewCourse: {
    fontSize: 12,
    fontFamily: "DMSans-Regular",
    color: "#6a41ff",
    textAlign: "left"
  },
  rating: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: "Poppins-Regular",
    color: "#000",
    textAlign: "left"
  },
  title2: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
    color: "#000",
    textAlign: "left"
  },
  time: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "Poppins-Regular",
    color: "rgba(0, 0, 0, 0.5)",
    textAlign: "left"
  },
  actionContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start', // Aligns the button to the left
  },
  completedButton: {
    backgroundColor: '#6a41ff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  completedButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CourseCard;
