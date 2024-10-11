// services/courseService.ts
import axios from 'axios';

// Define the structure of a course
export interface Course {
  title: string;
  url: string;
  source: string;
}

const API_URL = 'http://172.28.24.89:6340/course'; 

// Function to fetch courses with type annotations
export const fetchCourses = async (keyword: string): Promise<Course[]> => {
  try {
    const response = await axios.get(`${API_URL}?keyword=${keyword}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses', error);
    throw error;
  }
};
