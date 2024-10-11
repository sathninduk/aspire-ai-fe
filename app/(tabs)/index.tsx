import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable, ScrollView, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // For the "X" close button
import CourseCard from '@/components/skills/CourseCard'; // Single course card
import { Link } from "expo-router";

const recommendedCourses = [1, 2, 3]; // Placeholder data

const Pathway = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.pathway}>
        {/* Header */}
        <Text style={[styles.aspireai, styles.aspireaiTypo]}>AspireAI</Text>

        {/* Skills Section */}
        <View style={styles.skillsSection}>
          <Text style={styles.skillTitle}>Skill</Text>
          <View style={styles.skillTagsContainer}>
            <View style={styles.skillTag}>
              <Text style={styles.skillText}>SQL Tuning</Text>
              <Pressable style={styles.closeButton}>
                <Ionicons name="close" size={16} color="black" />
              </Pressable>
            </View>
            <View style={styles.skillTag}>
              <Text style={styles.skillText}>Software Scalability</Text>
              <Pressable style={styles.closeButton}>
                <Ionicons name="close" size={16} color="black" />
              </Pressable>
            </View>
            <View style={styles.skillTag}>
              <Text style={styles.skillText}>SCRUM Management</Text>
              <Pressable style={styles.closeButton}>
                <Ionicons name="close" size={16} color="black" />
              </Pressable>
            </View>
            <View style={styles.skillTag}>
              <Text style={styles.skillText}>Version Management</Text>
              <Pressable style={styles.closeButton}>
                <Ionicons name="close" size={16} color="black" />
              </Pressable>
            </View>
          </View>
          <Link href="/(tabs)/skill"
          style={styles.seeMorePressable}>
            <Text style={styles.seeMore}>See more</Text>
          </Link>
        </View>

        {/* Course Recommendations */}
        <Text style={styles.sectionTitle}>Course Recommendations</Text>
        <FlatList
          data={recommendedCourses.slice(0, 2)} // Limit to two course cards
          renderItem={() => <CourseCard />}
          keyExtractor={(item) => item.toString()}
          contentContainerStyle={styles.courseList}
          scrollEnabled={false} // Disable scrolling inside FlatList, since it's inside a ScrollView
          
        />
        <Link href="/(tabs)/skill"
         style={styles.seeMorePressable}>
            <Text style={styles.seeMore}>See more</Text>
          </Link>

        {/* Viewed Courses */}
        <View style={styles.courseSection}>
          <Text style={styles.sectionTitle}>Viewed Courses</Text>
          <View style={styles.courseCard}>
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }} // Replace with appropriate viewed course image
              style={styles.courseImage}
            />
            <View style={styles.courseDetails}>
              <Text style={styles.courseTitle}>Basics of UI/UX Design</Text>
              <Text style={styles.courseTime}>12h 52m</Text>
              <Text style={styles.courseRating}>4.7 ⭐</Text>
              <Text style={styles.courseAuthor}>Silverdole Selvester</Text>
            </View>
          </View>
          <Link href="/(tabs)/skill"
           style={styles.seeMorePressable}>
            <Text style={styles.seeMore}>See more</Text>
          </Link>
        </View>

        {/* Add spacing here */}
        <Text style={[styles.sectionTitle, styles.spacingText]}>
          Once you satisfy your gap filling, try to apply for the following openings.
        </Text>

        {/* Job Openings */}
        <View style={styles.jobSection}>
          <Text style={styles.sectionTitle}>Job Openings</Text>
          
          {/* Job Card for IFS */}
          <View style={styles.jobCard}>
            <Image
              source={{ uri: "https://example.com/ifs-logo.png" }} // Replace with the IFS logo URL
              style={styles.jobImage}
            />
            <View style={styles.jobDetails}>
              <Text style={styles.jobTitle}>Associate Technical Lead</Text>
              <Text style={styles.companyName}>IFS</Text>
              <Text style={styles.jobLocation}>Colombo, Sri Lanka</Text>
            </View>
          </View>

          {/* Job Card for CodeGen */}
          <View style={styles.jobCard}>
            <Image
              source={{ uri: "https://example.com/codegen-logo.png" }} // Replace with the CodeGen logo URL
              style={styles.jobImage}
            />
            <View style={styles.jobDetails}>
              <Text style={styles.jobTitle}>Senior Software Engineer</Text>
              <Text style={styles.companyName}>CodeGen</Text>
              <Text style={styles.jobLocation}>Colombo, Sri Lanka</Text>
            </View>
          </View>

          <Link href="/(tabs)/job"
           style={styles.seeMorePressable}>
            <Text style={styles.seeMore}>See more</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  pathway: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 16,
  },
  aspireaiTypo: {
    fontFamily: "DM Sans",
    fontWeight: "700",
  },
  aspireai: {
    fontSize: 28,
    color: "#0d0140",
    textAlign: "center",
    marginTop: 35,
    fontWeight: "bold",
  },
  skillsSection: {
    marginTop: 20,
  },
  skillTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  skillTagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillTag: {
    backgroundColor: "#e0e0e0",
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  skillText: {
    fontSize: 14,
    color: "#333",
  },
  closeButton: {
    marginLeft: 6,
  },
  seeMorePressable: {
    alignSelf: "center",
    marginTop: 10,
  },
  seeMore: {
    color: "#6c63ff",
    fontWeight: "bold",
  },
  courseSection: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  courseCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  courseImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  courseDetails: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  courseTime: {
    fontSize: 14,
    color: "#666",
  },
  courseRating: {
    fontSize: 14,
    color: "#f39c12",
  },
  courseAuthor: {
    fontSize: 14,
    color: "#666",
  },
  spacingText: {
    marginTop: 20, // Add appropriate spacing between this text and other sections
  },
  jobSection: {
    marginTop: 30,
  },
  jobCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: "center", // Aligns items vertically in the center
  },
  jobImage: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
  },
  jobDetails: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  companyName: {
    fontSize: 14,
    color: "#666",
  },
  jobLocation: {
    fontSize: 14,
    color: "#666",
  },
  courseList: {
    paddingVertical: 16,
  },
});

export default Pathway;
