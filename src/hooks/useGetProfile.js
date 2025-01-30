// useGetProfile.js
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useGetProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const dispatch =useDispatch()
  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch('https://classapi.sepehracademy.ir/api/SharePanel/GetProfileInfo', {
          method: 'GET',
         body:{
            "token": useSelector(state => state.token),
         }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }

        const data = await response.json();
        dispatch(setProfile(response.setProfile))
        dispatch(updateProfile(response.updateProfile))
        dispatch(clearProfile(response.clearProfile))
        dispatch(setToken(response.setToken))
        dispatch(setCurrentPictureAddress(response.setCurrentPictureAddress))
        dispatch(setProfileCompletionPercentage(response.setProfileCompletionPercentage))
        dispatch(setUserImage(response.setUserImage))
        dispatch(setEmail(response.setEmail))
        dispatch(setPhoneNumber(response.setPhoneNumber))
        dispatch(setLName(response.setLName))
        dispatch(setFName(response.setFName))
        dispatch(setUserAbout(response.setUserAbout))
        dispatch(setLinkdinProfile(response.setLinkdinProfile))
        dispatch(setTelegramLink(response.setTelegramLink))
        dispatch(setReceiveMessageEvent(response.setReceiveMessageEvent))
        dispatch(setHomeAddress(response.setHomeAddress))
        dispatch(setNationalCode(response.setNationalCode))
        dispatch(setGender(response.setGender))
        dispatch(setBirthDay(response.setBirthDay))
        dispatch(setLatitude(response.setLatitude))
        dispatch(setLongitude(response.setLongitude))
      
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  return { profile, loading, error };
};

export default useGetProfile;