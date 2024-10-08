import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';

import Header from '@/components/skills/Header.jsx'; // Tab buttons section
import SearchBar from '@/components/skills/SearchBar'; // Search bar with filter button
import CourseCard from '@/components/skills/CourseCard'; // Single course card
import SpecializationCard from '@/components/skills/SpecializationCard'; // Card for each specialization

const TabSkillScreen = () => {
  const specializations = [
    { id: '1', title: 'Design', courses: 140 },
    { id: '2', title: 'Finance', courses: 250 },
    { id: '3', title: 'Education', courses: 120 },
    { id: '4', title: 'Restaurant', courses: 85 },
    { id: '5', title: 'Health', courses: 235 },
    { id: '6', title: 'Programmer', courses: 412 },
  ];

  const recommendedCourses = [1, 2, 3]; // Placeholder data

  return (
    <ScrollView style={styles.container}>
      <Header /> {/* Header with tabs (Overview, Viewed, Skill Badge) */}
      
      <View style={styles.topSearchedContainer}>
        <Text style={styles.sectionTitle}>Top Searched Courses</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {["Data Science", "Digital Marketing", "SEO Basics", "Time Management", "Public Speaking"].map((course, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{course}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <SearchBar /> {/* Search bar component */}

      <Text style={styles.sectionTitle}>Specialization</Text>
      <View style={styles.specializationsContainer}>
        {specializations.map((spec) => (
          <SpecializationCard key={spec.id} title={spec.title} courses={spec.courses} />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Course Recommendations</Text>
      <FlatList
        data={recommendedCourses}
        renderItem={() => <CourseCard />}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={styles.courseList}
        scrollEnabled={false} // Disable scrolling inside FlatList, since it's inside a ScrollView
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  topSearchedContainer: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginVertical: 8,
  },
  tag: {
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  tagText: {
    color: '#3A3A3A',
  },
  specializationsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  courseList: {
    paddingVertical: 16,
  },
});

export default TabSkillScreen;