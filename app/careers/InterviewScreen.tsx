import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BACKEND_URL } from '@/config';

const InterviewScreen: React.FC = () => {
  const [jobKeyword, setJobKeyword] = useState<string>('');
  const [interviewQuestions, setInterviewQuestions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const defaultQuestions = [
    {
      title: "Common Interview Questions",
      questions: [
        "Tell me about yourself.",
        "What are your strengths and weaknesses?",
        "Why do you want to work here?",
        "Where do you see yourself in five years?",
        "Describe a challenge you've faced at work and how you handled it.",
      ],
    },
    {
      title: "Behavioral Interview Questions",
      questions: [
        "Give an example of a time you demonstrated leadership skills.",
        "Describe a situation where you had to work as part of a team.",
        "How do you handle conflict in the workplace?",
        "Can you share an instance where you made a mistake and how you fixed it?",
        "What motivates you to do your best work?",
      ],
    },
  ];

  const fetchInterviewQuestions = async () => {
    setLoading(true);
    setError(null);
    setInterviewQuestions([]);

    try {
      const response = await fetch(`${BACKEND_URL}/interview/questions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobKeyword }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setInterviewQuestions(data.questions || []);
    } catch (err) {
      const message = (err instanceof Error) ? err.message : 'Failed to load questions.';
      console.error("Error fetching interview questions:", message);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Careers</Text>
      <View style={styles.tabContainer}>
        <Button 
          mode="outlined" 
          style={[styles.tabButton, styles.inactiveTab]} 
          labelStyle={styles.buttonLabel} 
          onPress={() => navigation.navigate('job')}
        >
          Overview
        </Button>
        <Button 
          mode="contained" 
          style={[styles.tabButton, styles.activeTab]} 
          labelStyle={styles.activeButtonLabel} 
          onPress={() => navigation.navigate('careers/InterviewScreen')}
        >
          Interviews
        </Button>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          value={jobKeyword}
          onChangeText={setJobKeyword}
          placeholder="Search Interview"
        />
        <TouchableOpacity 
          style={styles.getInterviewButton}
          onPress={fetchInterviewQuestions}
        >
          <Text style={styles.getInterviewButtonText}>Get Interview</Text>
        </TouchableOpacity>
      </View>

      {loading && <Text style={styles.loadingText}>Loading...</Text>}
      {error && <Text style={styles.errorText}>{error}</Text>}
      <View style={styles.questionsContainer}>
        {interviewQuestions.length === 0 ? (
          defaultQuestions.map((item, index) => (
            <QuestionBlock key={index} title={item.title} questions={item.questions} />
          ))
        ) : (
          <QuestionBlock title={`Interview Questions for "${jobKeyword}"`} questions={interviewQuestions} />
        )}
      </View>
    </ScrollView>
  );
};

// Component to render question blocks
const QuestionBlock: React.FC<{ title: string; questions: string[] }> = ({ title, questions }) => (
  <View style={styles.questionBlock}>
    <Text style={styles.questionTitle}>{title}</Text>
    {questions.map((question, qIndex) => (
      <Text key={qIndex} style={styles.question}>{question}</Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    paddingTop: 40,
    marginHorizontal: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D0140',
    marginBottom: 20,
  },
  tabContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#f0ecf4',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f0ecf4'
  },
  getInterviewButton: {
    backgroundColor: '#6C63FF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 15,
    height: 40,
  },
  getInterviewButtonText: {
    color: 'white',
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
    marginLeft: 5,
    marginRight: 5
  },
  questionTitle: {
    marginBottom: 10,
    fontSize: 20,
    color: '#6C63FF',
  },
  question: {
    marginBottom: 5,
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
});

export default InterviewScreen;
