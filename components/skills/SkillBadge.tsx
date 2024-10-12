import { useEffect, useState } from "react";
import { Image, Text, TouchableHighlight, View, StyleSheet } from "react-native";
import SearchBar from "./SearchBar";
import ProgressBar from "./ProgressBar";
import { fetchCourses } from "../../app/services/courseService";
import { router } from "expo-router";

// Function to group courses by tag and calculate percentage of completed courses
function calculateCompletionByTag(courses) {
  const tagMap = {};

  courses.forEach((course) => {
    const { tag, status } = course;

    // Ensure the tag is present and valid
    if (!tag || typeof tag !== 'string') return;

    if (!tagMap[tag]) {
      tagMap[tag] = { total: 0, completed: 0 };
    }

    tagMap[tag].total += 1; // Increment the total count for this tag
    if (status === 1) { // Assuming status 1 indicates completion
      tagMap[tag].completed += 1; // Increment the completed count for this tag
    }
  });

  return Object.keys(tagMap).map((tag) => {
    const { total, completed } = tagMap[tag];
    const percentage = total > 0 ? (completed / total) * 100 : 0; // Avoid NaN if total is 0
    return { tag, percentage };
  });
}

function SkillBadge() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the courses from the API
        const courses = await fetchCourses("oracle sql"); // Replace with your skill category/tag
        console.log("Fetched Courses:", courses); // Log fetched courses for debugging

        // Group the courses by tag and calculate completion percentages
        const completionData = calculateCompletionByTag(courses);
        console.log("Completion Data:", completionData); // Log completion data for debugging

        setSkills(completionData);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.skillsContainer}>
        {/* Render dynamic skills */}
        {skills.map((skill, index) => (
          <SkillProgress
            key={index}
            skillName={skill.tag}
            progress={skill.percentage}
            onPress={() => router.push({
              pathname: "/skills/view-skill-status",
              params: { progress: skill.percentage, title: skill.tag }, // Pass the percentage as a parameter
            })}
          />
        ))}
      </View>
    </View>
  );
}

interface SkillProgressProps {
  skillName: string;
  progress: number;
  onPress?: () => void;
}

function SkillProgress({ skillName, progress, onPress }: SkillProgressProps) {
  return (
    <TouchableHighlight onPress={onPress} style={styles.skillButton}>
      <>
        <View style={styles.skillHeader}>
          <Image
            source={require("../../assets/images/Filter.png")}
            resizeMode="contain"
            style={styles.skillImage}
          />
          <Text style={styles.skillText}>{skillName}</Text>
        </View>
        <View style={styles.progressContainer}>
          <ProgressBar progress={progress} />
          <Text style={styles.progressText}>{progress.toFixed(0)}%</Text>
        </View>
      </>
    </TouchableHighlight>
  );
}

// Stylesheet for styling components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  skillsContainer: {
    flex: 1,
    gap: 30,
    marginTop: 34,
  },
  skillButton: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 12,
    elevation: 1, // Add elevation for Android shadow effect
  },
  skillHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  skillImage: {
    height: 40,
    marginRight: 12,
    marginBottom: 16,
  },
  skillText: {
    fontSize: 16,
    fontWeight: "500",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressText: {
    marginLeft: 5,
    fontSize: 14,
  },
});

export default SkillBadge;
