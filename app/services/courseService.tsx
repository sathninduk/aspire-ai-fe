import axios from 'axios';

// Define the structure of a course
export interface Course {
  title: string;
  url: string;
  source: string;
  status?: number; // Optional status field as per your API response
}

export interface PersonalizedResponse {
  userCourses: {
    _id: string;
    number: string;
    list: {
      tag: string;
      courses: Course[];
    }[];
  };
}

// API URL (with the required query parameter)
const API_URL = 'https://ai.sliit.xyz/course/personalized?number=84649464'; 

// Function to fetch courses with type annotations
export const fetchCourses = async (keyword: string): Promise<Course[]> => {
  try {
    const response = await axios.get<PersonalizedResponse>(`${API_URL}`);
    console.log("API Response:", response.data);

      const filteredCourses = response.data.userCourses.list
      .flatMap(courseCategory => courseCategory.courses);

      console.log("dataaaaaa :", filteredCourses);
    return filteredCourses;
  } catch (error) {
    console.error('Error fetching courses:', error.response || error);
    throw error;
  }
};


export const markCourseAsCompleted = async (_id: string, userId: string) => {
  try {
    const response = await axios.post('https://ai.sliit.xyz/course/course-completed', {
      courseId: "84649464",
      number: "6709c68c375505c5da2c481a",
    });
    return response.data;
  } catch (error) {
    // Handle different types of errors
    if (axios.isAxiosError(error)) {
      // Log the full error response
      console.error('Axios error:', {
        message: error.message,
        response: error.response,
        request: error.request,
      });

      // Customize error message based on response status
      const status = error.response?.status;
      const errorMessage = error.response?.data?.message || 'An error occurred while marking the course as completed.';

      // Log the error for debugging
      console.error(`Error marking course as completed: ${errorMessage} (Status Code: ${status})`);

      // Throw a custom error to handle it further up the call stack
      throw new Error(errorMessage);
    } else {
      // Handle other types of errors (e.g., network error)
      console.error('Unexpected error marking course as completed:', error);
      throw new Error('An unexpected error occurred. Please try again later.');
    }
  }
};