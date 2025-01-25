import { useState } from 'react';

const baseUrl = process.env.VITE_BASE_API_URL;

const fetchApi = async (url, payload, method = "POST") => {
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json(); // Parse the response as JSON
  } catch (error) {
    console.error("Error during fetch:", error);
    throw error; // Propagate error
  }
};

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendCode = async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchApi("Sign/SendVerifyMessage", payload);
      return data;
    } catch (err) {
      setError(err.message);
      throw err; // Re-throw so caller can manage it
    } finally {
      setLoading(false);
    }
  };

  const verifyCode = async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchApi("Sign/VerifyMessage", payload);
      return data;
    } catch (err) {
      setError(err.message);
      throw err; // Re-throw so caller can manage it
    } finally {
      setLoading(false);
    }
  };

  const registerNewUser = async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchApi("Sign/Register", payload);
      return data;
    } catch (err) {
      setError(err.message);
      throw err; // Re-throw so caller can manage it
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchApi("Sign/Login", payload);
      return data;
    } catch (err) {
      setError(err.message);
      throw err; // Re-throw so caller can manage it
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchApi("Sign/ForgetPassword", payload);
      return data;
    } catch (err) {
      setError(err.message);
      throw err; // Re-throw so caller can manage it
    } finally {
      setLoading(false);
    }
  };

  const resetFinalStepPassword = async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchApi("Sign/Reset", payload);
      return data;
    } catch (err) {
      setError(err.message);
      throw err; // Re-throw so caller can manage it
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    sendCode,
    verifyCode,
    registerNewUser,
    loginUser,
    resetPassword,
    resetFinalStepPassword,
  };
};

export default useApi;