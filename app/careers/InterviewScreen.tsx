import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import TabNavigation from '../../components/home_sub/TabNavigation';
import { TouchableOpacity} from 'react-native';
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from '@react-navigation/stack';

interface InterviewScreenProps {}

const InterviewScreen: React.FC<InterviewScreenProps> = () => {
  const [jobKeyword, setJobKeyword] = useState<string>('');
  const [interviewQuestions, setInterviewQuestions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  // Default common interview questions
  const defaultQuestions = [
    { title: "Common Interview Questions", questions: [
        "Tell me about yourself.",
        "What are your strengths and weaknesses?",
        "Why do you want to work here?",
        "Where do you see yourself in five years?",
        "Describe a challenge you've faced at work and how you handled it.",
      ] 
    },
    { title: "Behavioral Interview Questions", questions: [
        "Give an example of a time you demonstrated leadership skills.",
        "Describe a situation where you had to work as part of a team.",
        "How do you handle conflict in the workplace?",
        "Can you share an instance where you made a mistake and how you fixed it?",
        "What motivates you to do your best work?",
      ] 
    }
  ];

  // Function to fetch interview questions
  const fetchInterviewQuestions = async (jobKeyword: string) => {
    setLoading(true);
    setError(null);
    setInterviewQuestions([]); // Clear previous questions

    try {
      const response = await fetch(`http://localhost:6340/interview/questions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobKeyword }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setInterviewQuestions(data.questions); // Assuming data.questions is an array
    } catch (error) {
      console.error("Error fetching interview questions:", error);
      setError('Failed to load questions, please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Interviews</Text>
      <br></br>
      <View style={styles.tabContainer}>
        <Button mode="outlined" style={[styles.tabButton, styles.inactiveTab]} labelStyle={styles.buttonLabel} onPress={() => navigation.navigate('job')}>Overview</Button>
        <Button mode="outlined" style={[styles.tabButton, styles.inactiveTab]} labelStyle={styles.buttonLabel}>Viewed</Button>
        <Button mode="contained" style={[styles.tabButton, styles.activeTab]} labelStyle={styles.activeButtonLabel} onPress={() => navigation.navigate('careers/InterviewScreen')}>Interviews</Button>
      </View>
      <br></br>
      <View style={styles.searchContainer}>
        <Searchbar
          style={styles.searchBar}
          value={jobKeyword}
          onChangeText={setJobKeyword}
          placeholder="Search Interview"
        />
        <TouchableOpacity 
  style={{
    backgroundColor: '#6C63FF',
    padding: 10,
    borderRadius: 8, // Adjust as needed
    alignItems: 'center',
    marginLeft: 15,
    height: 52
  }}
  onPress={() => fetchInterviewQuestions(jobKeyword)}
>
  <Text style={{ color: 'white' }}>Get Interview</Text>
</TouchableOpacity>

      </View>

      <br></br> <br></br>
      {loading && <Text style={styles.loadingText}>Loading...</Text>}
      {error && <Text style={styles.errorText}>{error}</Text>}

      <View style={styles.questionsContainer}>
        {interviewQuestions.length === 0 && defaultQuestions.map((item, index) => (
          <View key={index} style={styles.questionBlock}>
            <Text style={styles.questionTitle}>{item.title}</Text>
            {item.questions.map((question, qIndex) => (
              <Text key={qIndex} style={styles.question}>{question}</Text>
            ))}
          </View>
        ))}

        {interviewQuestions.length > 0 && (
          <View style={styles.questionBlock}>
            <Text style={styles.questionTitle}>Interview Questions for "{jobKeyword}"</Text>
            {interviewQuestions.map((question, index) => (
              <Text key={index} style={styles.question}>{question}</Text>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D0140',
    marginBottom: 20,
    alignItems: 'center',
  },
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    width: 300,
    marginRight: 10,
  },
  loadingText: {
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  questionsContainer: {
    alignItems: 'center',
  },
  questionBlock: {
    borderWidth: 1,
    borderColor: '#6C63FF',
    borderRadius: 8,
    padding: 15,
    margin: 10,
    width: '100%',
    maxWidth: 600,
    backgroundColor: 'white',
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  questionTitle: {
    margin: 0,
    marginBottom: 10,
    fontSize: 20,
    color: '6C63FF'
  },
  question: {
    marginBottom: 5,
  },
  tabContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tabButton: {
    minWidth: 100,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: '#E0D4FF',
    borderRadius: 10,
  },
  inactiveTab: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
  },
  buttonLabel: {
    color: '#524B6B',
    fontWeight: 'bold',
  },
  activeButtonLabel: {
    color: '#6A41FF',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  searchBar: {
    flex: 1,
    borderRadius: 10,
  },
});

export default InterviewScreen;
