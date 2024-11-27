// src/services/contact-service.js

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

// Function to send a contact message to /api/contacts
export const sendContactMessage = async (messageData) => {
  try {
    const token = localStorage.getItem('accessToken'); // Getting the access token from localStorage
    if (!token) {
      throw new Error('No access token found');
    }

    await myAxios.post('/api/contacts', messageData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Adding authorization header
      },
    });
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Failed to send message');
  }
};

// Function to get all contacts
export const getContacts = async () => {
    try {
      const token = localStorage.getItem('accessToken'); // Getting the access token from localStorage
      if (!token) {
        throw new Error('No access token found');
      }
  
      const response = await myAxios.get('/api/contacts', {
        headers: {
          Authorization: `Bearer ${token}`, // Using the token for authorization
        },
      });
  
      return response.data; // Assuming the response contains an array of contacts
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw new Error('Unable to fetch contacts');
    }
  };
  
  // Function to delete a contact by ID
  export const deleteContact = async (contactId) => {
    try {
      const token = localStorage.getItem('accessToken'); // Getting the access token from localStorage
      if (!token) {
        throw new Error('No access token found');
      }
  
      await myAxios.delete(`/api/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Adding authorization header
        },
      });
  
    } catch (error) {
      console.error('Error deleting contact:', error);
      throw new Error('Failed to delete contact');
    }
  };

  // Function to get contact by ID
export const getContactById = async (contactId) => {
  try {
    const token = localStorage.getItem('accessToken'); // Getting the access token from localStorage
    if (!token) {
      throw new Error('No access token found');
    }

    const response = await myAxios.get(`/api/contacts/${contactId}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Using the token for authorization
      },
    });

    return response.data; // Returning the contact data
  } catch (error) {
    console.error('Error fetching contact details:', error);
    throw new Error('Unable to fetch contact details');
  }
};
