// src/services/feedback-service.js

import { myAxios } from './helper'; // Importing your axios instance

// Function to get the userId from the /api/auth/me endpoint
export const getUserId = async () => {
  try {
    const token = localStorage.getItem('accessToken'); // Getting the access token from localStorage
    if (!token) {
      throw new Error('No access token found');
    }

    const response = await myAxios.get('/api/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`, // Using the token for authorization
      },
    });

    return response.data.userId; // Assuming the response contains userId
  } catch (error) {
    console.error('Error fetching user ID:', error);
    throw new Error('Unable to fetch user information');
  }
};

// Function to send a feedback message to /api/feedbacks
export const sendFeedbackMessage = async (feedbackData) => {
  try {
    const token = localStorage.getItem('accessToken'); // Getting the access token from localStorage
    if (!token) {
      throw new Error('No access token found');
    }

    await myAxios.post('/api/feedbacks', feedbackData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Adding authorization header
      },
    });
  } catch (error) {
    console.error('Error sending feedback:', error);
    throw new Error('Failed to send feedback');
  }
};

// Function to get all feedbacks
export const getFeedbacks = async () => {
  try {
    const token = localStorage.getItem('accessToken'); // Getting the access token from localStorage
    if (!token) {
      throw new Error('No access token found');
    }

    const response = await myAxios.get('/api/feedbacks', {
      headers: {
        Authorization: `Bearer ${token}`, // Using the token for authorization
      },
    });

    return response.data; // Assuming the response contains an array of feedbacks
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    throw new Error('Unable to fetch feedbacks');
  }
};

// Function to delete feedback by ID
export const deleteFeedback = async (feedbackId) => {
  try {
    const token = localStorage.getItem('accessToken'); // Getting the access token from localStorage
    if (!token) {
      throw new Error('No access token found');
    }

    await myAxios.delete(`/api/feedbacks/${feedbackId}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Adding authorization header
      },
    });
  } catch (error) {
    console.error('Error deleting feedback:', error);
    throw new Error('Failed to delete feedback');
  }
};
