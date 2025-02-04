import React from 'react';
import useUpdateProfile from '../../../hooks/useUpdateProfile';

const UserInfoEdit = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
    success,
  } = useUpdateProfile();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="LName"
          value={formData.LName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="FName"
          value={formData.FName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>About:</label>
        <input
          type="text"
          name="UserAbout"
          value={formData.UserAbout}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>LinkedIn Profile:</label>
        <input
          type="text"
          name="LinkdinProfile"
          value={formData.LinkdinProfile}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Telegram Link:</label>
        <input
          type="text"
          name="TelegramLink"
          value={formData.TelegramLink}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Receive Message Event:</label>
        <input
          type="checkbox"
          name="ReceiveMessageEvent"
          checked={formData.ReceiveMessageEvent}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Home Address:</label>
        <input
          type="text"
          name="HomeAdderess"
          value={formData.HomeAdderess}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>National Code:</label>
        <input
          type="text"
          name="NationalCode"
          value={formData.NationalCode}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Gender:</label>
        <input
          type="checkbox"
          name="Gender"
          checked={formData.Gender}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Birthday:</label>
        <input
          type="date"
          name="BirthDay"
          value={formData.BirthDay}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Latitude:</label>
        <input
          type="text"
          name="Latitude"
          value={formData.Latitude}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Longitude:</label>
        <input
          type="text"
          name="Longitude"
          value={formData.Longitude}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Updating...' : 'Update Profile'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Profile updated successfully!</p>}
    </form>
  );
};

export default UserInfoEdit;