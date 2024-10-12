import { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { Course, fetchCourses } from "../services/courseService";
import CourseCard from "@/components/skills/CourseCard";
import { useRoute } from '@react-navigation/native'; // Import useRoute from react-navigation

function ViewSkillStatus() {
    const route = useRoute(); // Get the route prop
    const [recommendedCourses, setRecommendedCourses] = useState<Course[]>([]);
    const [progress, setProgress] = useState<number>(0);
    const [title, setTitle] = useState<string>(''); // Declare title state

    useEffect(() => {
        const fetchInitialCourses = async () => {
            try {
                const courses = await fetchCourses('oracle sql');
                setRecommendedCourses(courses);
            } catch (error) {
                console.error('Failed to fetch courses:', error);
            }
        };

        // Access progress and title from route params
        const { progress: progressParam, title: titleParam } = route.params || {}; // Default to an empty object

        if (progressParam) {
            const parsedProgress = Number(progressParam);
            console.log("Parsed Progress:", parsedProgress);

            // Ensure the parsed progress is between 0 and 100
            const validProgress = Math.min(Math.max(parsedProgress, 0), 100);
            setProgress(validProgress);
            console.log("Set Progress:", validProgress);
        }

        if (titleParam) { // Check if titleParam is defined
            setTitle(titleParam); // Set the title state
        }

        fetchInitialCourses();
    }, [route.params]); // Use route.params to trigger updates when parameters change

    return (
        <View style={{ height: "100%", backgroundColor: "white" }}>
            <ScrollView>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 98, alignItems: "center" }}>
                        <Image 
                            source={require("../../assets/images/Filter.png")} 
                            resizeMode="contain" 
                            style={{ height: 40, marginRight: 12 }} 
                        />
                        <Text style={styles.sectionTitle}>
                            {title || "Loading..."} {/* Fallback text if title is empty */}
                        </Text>
                    </View>
                    <Text style={styles.yourProgress}>Your Progress</Text>
                    <View>
                        <CircularProgress 
                            value={progress} 
                            activeStrokeColor="#6a41ff" 
                            radius={130} 
                        />
                    </View>
                </View>
                <View style={{ padding: 28 }}>
                    <Text style={styles.sectionTitle}>Course Recommendations</Text>
                    <FlatList
                        data={recommendedCourses}
                        renderItem={({ item }) => (
                            <CourseCard
                                title={item.title}
                                url={item.url}
                                source={item.source}
                            />
                        )}
                        keyExtractor={(item) => item.url}
                        contentContainerStyle={styles.courseList}
                        scrollEnabled={false}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    yourProgress: {
        fontSize: 24,
        fontWeight: "600",
        fontFamily: "Poppins-SemiBold",
        color: "#000",
        textAlign: "center",
        marginTop: 56,
        marginBottom: 33,
    },
    courseList: {
        paddingVertical: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "700",
        fontFamily: "DMSans-Bold",
        color: "#150a33",
        textAlign: "left",
        marginTop: 46,
    },
});

export default ViewSkillStatus;
