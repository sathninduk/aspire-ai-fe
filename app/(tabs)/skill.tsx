import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { fetchCourses } from '@/app/services/courseService'; // Now it's a TypeScript file

import Header from '@/components/skills/Header';
import SearchBar from '@/components/skills/SearchBar';
import CourseCard from '@/components/skills/CourseCard';
import SpecializationCard from '@/components/skills/SpecializationCard';
import Overview from '@/components/skills/Overview';
import SkillBadge from '@/components/skills/SkillBadge';

const TabSkillScreen = () => {
  const [currentScreen, setCurrentScreen] = useState("viewed");

  return (
    <ScrollView style={styles.container}>
      <Header active={currentScreen} onChange={(screen) => setCurrentScreen(screen)} />
      {currentScreen == "viewed" ? <Viewed /> : null}
      {currentScreen == "overview" ? <Overview /> : null}
      {currentScreen == "sbadge" ? <SkillBadge /> : null}
    </ScrollView>
  );
};

const Viewed = () => {
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

  const handleSearch = async (keyword: string) => {
    try {
      const courses = await fetchCourses(keyword);
      setRecommendedCourses(courses);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

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
      /></>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginVertical: 8,
  },
  courseList: {
    paddingVertical: 16,
  },
});

export default TabSkillScreen;
