import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import {
  setCurrentPictureAddress,
  setProfileCompletionPercentage,
  setUserImage,
  setEmail,
  setPhoneNumber,
  setLName,
  setFName,
  setUserAbout,
  setLinkdinProfile,
  setTelegramLink,
  setReceiveMessageEvent,
  setHomeAddress,
  setNationalCode,
  setGender,
  setBirthDay,
  setLatitude,
  setLongitude,
} from '../features/userSlice'; // Adjust the import path

const useGetProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const jwtToken = Cookies.get('jwt'); // Assuming the JWT token is stored in a cookie
    const fetchProfile = async () => {
      try {
        const response = await fetch("https://classapi.sepehracademy.ir/api/SharePanel/GetProfileInfo", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${jwtToken}`, // ✅ Send token in the header
            "Content-Type": "application/json"
          },
        });
    

        if (!response.ok) {
          throw new Error(`Failed to fetch profile: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();

        // Dispatch actions to update the Redux store
        dispatch(setCurrentPictureAddress(data.currentPictureAddress));
        dispatch(setProfileCompletionPercentage(data.profileCompletionPercentage));
        dispatch(setUserImage(data.userImage));
        dispatch(setEmail(data.email));
        dispatch(setPhoneNumber(data.phoneNumber));
        dispatch(setLName(data.lName));
        dispatch(setFName(data.fName));
        dispatch(setUserAbout(data.userAbout));
        dispatch(setLinkdinProfile(data.linkdinProfile));
        dispatch(setTelegramLink(data.telegramLink));
        dispatch(setReceiveMessageEvent(data.receiveMessageEvent));
        dispatch(setHomeAddress(data.homeAddress));
        dispatch(setNationalCode(data.nationalCode));
        dispatch(setGender(data.gender));
        dispatch(setBirthDay(data.birthDay));
        dispatch(setLatitude(data.latitude));
        dispatch(setLongitude(data.longitude));

        // Set the profile state
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (jwtToken) {
      fetchProfile();
    } else {
      setError('No JWT token found');
      setLoading(false);
    }
  }, [dispatch]);

  return { profile, loading, error };
};

export default useGetProfile;