import { createSlice } from '@reduxjs/toolkit';

// Initial state for the profile slice
const initialState = {
  currentPictureAddress: "Not-set",
  profileCompletionPercentage: 0,
  userImage: [],
  email: "",
  phoneNumber: "",
  lName: null,
  fName: null,
  userAbout: null,
  linkdinProfile: null,
  telegramLink: null,
  receiveMessageEvent: false,
  homeAdderess: null,
  nationalCode: null,
  gender: false,
  birthDay: null,
  latitude: null,
  longitude: null,
};

// Create the profile slice
const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
   
  
    // Action to set the entire profile data
    setProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
    // Action to update specific fields in the profile
    updateProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
    // Action to clear the profile data (reset to initial state)
    clearProfile: () => {
      return initialState;
    },
    // Individual actions to set each property
    setCurrentPictureAddress: (state, action) => {
      state.currentPictureAddress = action.payload;
    },
    setProfileCompletionPercentage: (state, action) => {
      state.profileCompletionPercentage = action.payload;
    },
    setUserImage: (state, action) => {
      state.userImage = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setLName: (state, action) => {
      state.lName = action.payload;
    },
    setFName: (state, action) => {
      state.fName = action.payload;
    },
    setUserAbout: (state, action) => {
      state.userAbout = action.payload;
    },
    setLinkdinProfile: (state, action) => {
      state.linkdinProfile = action.payload;
    },
    setTelegramLink: (state, action) => {
      state.telegramLink = action.payload;
    },
    setReceiveMessageEvent: (state, action) => {
      state.receiveMessageEvent = action.payload;
    },
    setHomeAddress: (state, action) => {
      state.homeAdderess = action.payload;
    },
    setNationalCode: (state, action) => {
      state.nationalCode = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setBirthDay: (state, action) => {
      state.birthDay = action.payload;
    },
    setLatitude: (state, action) => {
      state.latitude = action.payload;
    },
    setLongitude: (state, action) => {
      state.longitude = action.payload;
    },
  },
});

// Export the actions
export const {
  setProfile,
  updateProfile,
  clearProfile,
  setToken,
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
} = profileSlice.actions;

// Export the reducer
export default profileSlice.reducer;