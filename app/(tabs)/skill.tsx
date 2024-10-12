import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { fetchCourses, markCourseAsCompleted } from '@/app/services/courseService';
import Header from '@/components/skills/Header';
import SearchBar from '@/components/skills/SearchBar';
import CourseCard from '@/components/skills/CourseCard';
import Overview from '@/components/skills/Overview';
import SkillBadge from '@/components/skills/SkillBadge';
import axios from 'axios';

// Define Course Interface
interface Course {
  title: string;
  url: string;
  source: string;
  status?: number; // Optional status if present in your data
  _id: string; // Unique identifier for the course
  userId: string; // Unique identifier for the user
}

const TabSkillScreen = () => {
  const [currentScreen, setCurrentScreen] = useState("viewed");
  const [recommendedCourses, setRecommendedCourses] = useState<Course[]>([]);

  const handleMarkCompleted = async (_id: string, userId: string) => {
    try {
      await markCourseAsCompleted(_id, userId);
      Alert.alert('Success', 'Course marked as completed!');
    } catch (error) {
      console.error('Failed to mark course as completed:', error);
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || 'Network error occurred.';
        Alert.alert('Error', errorMessage);
      } else {
        Alert.alert('Error', 'Failed to mark course as completed. Please try again.');
      }
    }
  };

  useEffect(() => {
    const fetchInitialCourses = async () => {
      try {
        const courses = await fetchCourses('oracle sql');
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

  const renderHeader = () => (
    <Header active={currentScreen} onChange={(screen) => setCurrentScreen(screen)} />
  );

  const renderContent = () => {
    switch (currentScreen) {
      case "viewed":
        return (
          <Viewed
            recommendedCourses={recommendedCourses}
            onMarkCompleted={handleMarkCompleted}
            onSearch={handleSearch} // Pass the search function here
          />
        );
      case "overview":
        return <Overview />;
      case "sbadge":
        return <SkillBadge />;
      default:
        return null;
    }
  };

  return (
    <FlatList
      data={[{}]} // Dummy data to enable the FlatList's header
      renderItem={() => null} // Render nothing for the dummy data
      keyExtractor={() => 'dummy'} // Provide a static key
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderContent}
      contentContainerStyle={styles.container}
      scrollEnabled
    />
  );
};

// Updated Viewed component to accept onSearch
const Viewed = ({ recommendedCourses, onMarkCompleted, onSearch }: { recommendedCourses: Course[]; onMarkCompleted: (_id: string, userId: string) => Promise<void>; onSearch: (keyword: string) => void }) => {
  return (
    <View style={styles.viewedContainer}>
      <SearchBar onSearch={onSearch} /> {/* Pass the onSearch prop */}
      <Text style={styles.sectionTitle}>Course Recommendations</Text>
      <FlatList
        data={recommendedCourses}
        renderItem={({ item }) => (
          <CourseCard
            title={item.title}
            url={item.url}
            source={item.source}
            status={item.status}
            _id={item._id}
            userId={item.userId}
            onMarkCompleted={onMarkCompleted}
          />
        )}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.courseList}
        ListEmptyComponent={<Text>No courses available</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  viewedContainer: {
    flex: 1,
    marginTop: 16,
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
