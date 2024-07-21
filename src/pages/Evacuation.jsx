import { useState, useEffect } from 'react';
import axios from 'axios';

const Evacuation = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const storedEmail = localStorage.getItem('userEmail');
      if (storedEmail) {
        try {
          const response = await axios.get(`http://localhost:5000/details/${storedEmail}`);
          setUserInfo(response.data.user);
          setLoading(false);
        } catch (err) {
          console.error('Error fetching user data:', err);
          setError('Failed to fetch user data.');
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const updateLocation = async () => {
      if (userInfo && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            await axios.post('http://localhost:5000/location/update-location', {
              email: userInfo.email,
              lat: latitude,
              long: longitude,
            });
            console.log('Location updated successfully');
          } catch (err) {
            console.error('Error updating location:', err);
          }
        }, (err) => {
          console.error('Error getting geolocation:', err);
        });
      }
    };

    updateLocation();
  }, [userInfo]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      {!userInfo ? (
        <div>Please make sure you are logged in.</div>
      ) : (
        <div>
          <h2>User Information</h2>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <p><strong>Username:</strong> {userInfo.username}</p>
          <p><strong>Location:</strong> {userInfo.location}</p>
          <p><strong>Latitude:</strong> {userInfo.lat ?? 'Not available'}</p>
          <p><strong>Longitude:</strong> {userInfo.long ?? 'Not available'}</p>
        </div>
      )}
    </>
  );
};

export default Evacuation;
