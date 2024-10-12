import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import ButtonTop from "./ButtonTop";
import SearchBar from "./SearchBar";
import Specialization from "./Specialization";
import { useEffect, useState } from "react";
import { Course, fetchCourses } from "@/app/services/courseService";
import CourseCard from "./CourseCard";

export default function Overview() {
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
        <View>
            <Text style={styles.topSearchedCourses}>Top Searched Courses</Text>
            <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", gap: 10, width: "100%" }}>
                <ButtonTop text="Data science" />
                <ButtonTop text="Digital Marketing" />
                <ButtonTop text="SEO Basics" />
                <ButtonTop text="Time Management" />
                <ButtonTop text="Public Speaking" />
            </View>
            <SearchBar />
            <Text style={styles.specialization}>Specialization</Text>
            <View style={{ flex: 1, flexDirection: "row", height: "100%", flexWrap: "wrap", gap: 20, justifyContent: "center" }}>
            <Specialization selected containerStyle={{ width: "45%" }} title="User Experience Design" coursesCount={140} icon={require("../../assets/images/icon_design.png")} />
    <Specialization selected containerStyle={{ width: "45%" }} title="Web Development" coursesCount={200} icon={require("../../assets/images/icon_design.png")} />
    <Specialization selected containerStyle={{ width: "45%" }} title="Digital Marketing" coursesCount={180} icon={require("../../assets/images/icon_design.png")} />
    <Specialization selected containerStyle={{ width: "45%" }} title="Data Science" coursesCount={120} icon={require("../../assets/images/icon_design.png")} />
    <Specialization selected containerStyle={{ width: "45%" }} title="Mobile App Development" coursesCount={160} icon={require("../../assets/images/icon_design.png")} />
    <Specialization selected containerStyle={{ width: "45%" }} title="Graphic Design" coursesCount={100} icon={require("../../assets/images/icon_design.png")} />
            </View>
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
    )
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 16,
        fontWeight: "700",
        fontFamily: "DMSans-Bold",
        color: "#150a33",
        textAlign: "left",
        marginTop: 46
    },
    topSearchedCourses: {
        fontSize: 14,
        paddingBottom: 28,
        fontFamily: "DMSans-Regular",
        color: "#150b3d",
        textAlign: "left"
    },
    specialization: {
        fontSize: 16,
        fontWeight: "700",
        fontFamily: "DMSans-Bold",
        color: "#150a33",
        textAlign: "left",
        // width: 113,
        paddingTop: 20,
        marginBottom: 20
    },
    courseList: {
        paddingVertical: 16,
    },
});