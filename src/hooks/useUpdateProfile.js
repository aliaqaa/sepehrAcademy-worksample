import { useState } from 'react';

const useUpdateProfile = () => {
  const  baseApi = import.meta.env.VITE_BASE_API_URL;
  const [formData, setFormData] = useState({
    LName: '',
    FName: '',
    UserAbout: '',
    LinkdinProfile: '',
    TelegramLink: '',
    ReceiveMessageEvent: false,
    HomeAdderess: '',
    NationalCode: '',
    Gender: false,
    BirthDay: '',
    Latitude: '',
    Longitude: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch(`{${baseApi}}/SharePanel/UpdateProfileInfo`, {
        method: 'PUT',
        headers: {
          Authorization: '<API Key>', // Replace with your actual API key
        },
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const result = await response.json();
      setSuccess(true);
      console.log('Profile updated successfully:', result);
    } catch (error) {
      setError(error.message);
      console.error('Error updating profile:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
    success,
  };
};

export default useUpdateProfile;