import axios from "axios";

export const signInWithEmail = async (email, password) => {
  try {
    const response = await axios.post('/login', {
      email,
      password,
    });
    return response.data;  // Assume the response contains user data and token
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Function to sign up a new user
export const signUp = async (email, password, displayName) => {
  try {
    const response = await axios.post('/register', {
      email,
      password,
      name: displayName,
    });
    return response.data;  // Assume the response contains user data and token
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Function to get the current authenticated user
export const getCurrentUser = async (token) => {
  // redux
  try {
    const response = await axios.get('/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;  // Assume the response contains user data
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Function to sign out the user
export const signOutUser = async () => {
  try {
    const response = await axios.post('/signout');
    return response.data;  // Assume the response is a success message
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

