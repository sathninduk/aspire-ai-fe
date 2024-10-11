import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

// A mock function to simulate API call (you can replace this with a real API call)
const fetchInterviewQuestions = async (jobKeyword: string) => {
  try {
    const response = await fetch('http://localhost:6340/interview/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ jobKeyword }),
    });
    return await response.json();
  } catch (error) {
    console.error('Error fetching interview questions:', error);
  }
};

const InterviewScreen = () => {
  const [jobKeyword, setJobKeyword] = useState<string>('');  // Search input for job keywords
  const [interviewQuestions, setInterviewQuestions] = useState<string[]>([]);  // Fetched interview questions

  // Fetch interview questions whenever the keyword changes
  const getQuestions = async () => {
    const questions = await fetchInterviewQuestions(jobKeyword);
    setInterviewQuestions(questions);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Careers</Text>
      <View style={styles.tabBar}>
        <Text style={styles.tab}>Overview</Text>
        <Text style={styles.tab}>Viewed</Text>
        <Text style={[styles.tab, styles.selectedTab]}>Interviews</Text>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search Interview"
        value={jobKeyword}
        onChangeText={setJobKeyword}
        onSubmitEditing={getQuestions} // Fetch questions when user submits search
      />

      <ScrollView style={styles.interviewList}>
        <Text style={styles.sectionTitle}>Mockup Interviews</Text>

        {/* Iterate over interview questions and display them */}
        {interviewQuestions.map((question, index) => (
          <View key={index} style={styles.interviewCard}>
            <Text style={styles.interviewTitle}>Interview {index + 1}</Text>
            <Text style={styles.questionText}>{question}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Take Interview</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default InterviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tabBar: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    marginRight: 15,
    color: '#666',
    fontSize: 16,
  },
  selectedTab: {
    color: '#5A67D8',
    borderBottomWidth: 2,
    borderBottomColor: '#5A67D8',
  },
  searchInput: {
    height: 40,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  interviewList: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  interviewCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  interviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  questionText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#5A67D8',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
