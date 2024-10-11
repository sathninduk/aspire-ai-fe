import { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { Course, fetchCourses } from "../services/courseService";
import CourseCard from "@/components/skills/CourseCard";

function ViewSkillStatus() {
    const [recommendedCourses, setRecommendedCourses] = useState<Course[]>([]); // Correctly typed array

    useEffect(() => {
        const fetchInitialCourses = async () => {
            try {
                console.log("fetching courses")
                const courses = await fetchCourses('oracle sql');
                console.log("courses", courses)

                setRecommendedCourses(courses);
            } catch (error) {
                console.error('Failed to fetch courses:', error);
            }
        };

        fetchInitialCourses();
    }, []);
    return (
        <View style={{ height: "100%", backgroundColor: "white" }}>
            <ScrollView>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 98, alignItems: "center" }}>
                        <Image source={require("../../assets/images/Filter.png")} resizeMode="contain" style={{ height: 40, marginRight: 12 }} />
                        <Text>{"Project Management"}</Text>
                    </View>
                    <Text style={styles.yourProgress}>Your Progress</Text>
                    <View>
                        <CircularProgress value={80} activeStrokeColor="#6a41ff" radius={130} />
                    </View>
                </View>
                <View style={{padding: 28}}>
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
    )
}

export default ViewSkillStatus;

const styles = StyleSheet.create({
    yourProgress: {
        fontSize: 24,
        fontWeight: "600",
        fontFamily: "Poppins-SemiBold",
        color: "#000",
        textAlign: "center",
        width: 169,
        height: 38,
        // flex: 1,
        marginTop: 56,
        marginBottom: 33,
        // backgroundColor: "red"
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
        marginTop: 46
    },
});
