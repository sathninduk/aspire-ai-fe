import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SkillScreen = () => {
  // Sample data for courses
  const courses = [
    {
      id: 1,
      title: 'Basics of UI/UX Design',
      instructor: 'Silverdole Selvester',
      duration: '12h 52m',
      rating: 4.7,
      image: 'https://via.placeholder.com/100', // Replace this with your image URL
    },
    // Add more courses if needed
  ];

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Viewed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Skill Badge</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#9e9e9e" />
        <TextInput placeholder="Search" style={styles.searchInput} />
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="options" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Course List */}
      <ScrollView>
        {courses.map((course) => (
          <View key={course.id} style={styles.courseCard}>
            <Image source={{ uri: course.image }} style={styles.courseImage} />
            <View style={styles.courseInfo}>
              <Text style={styles.instructor}>{course.instructor}</Text>
              <Text style={styles.title}>{course.title}</Text>
              <View style={styles.courseDetails}>
                <Text style={styles.duration}>
                  <Icon name="time-outline" size={16} /> {course.duration}
                </Text>
                <Text style={styles.rating}>
                  <Icon name="star" size={16} color="orange" /> {course.rating}
                </Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.viewCourse}>View Course</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Icon name="home-outline" size={30} color="#6e6e6e" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="school-outline" size={30} color="#6e6e6e" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="sparkles-outline" size={30} color="#6e6e6e" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="briefcase-outline" size={30} color="#6e6e6e" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="person-outline" size={30} color="#6e6e6e" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  tab: {
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#7b61ff',
  },
  tabText: {
    fontSize: 16,
    color: '#9e9e9e',
  },
  activeTabText: {
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
  filterButton: {
    backgroundColor: '#7b61ff',
    padding: 10,
    borderRadius: 10,
  },
  courseCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  courseImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  courseInfo: {
    flex: 1,
    marginLeft: 10,
  },
  instructor: {
    fontSize: 14,
    color: '#9e9e9e',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  courseDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  duration: {
    fontSize: 14,
    color: '#9e9e9e',
  },
  rating: {
    fontSize: 14,
    color: '#9e9e9e',
  },
  viewCourse: {
    color: '#7b61ff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#fff',
    elevation: 5,
  },
});

export default SkillScreen;
