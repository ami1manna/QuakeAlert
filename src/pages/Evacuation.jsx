import { useState, useEffect } from 'react';
import axios from 'axios';

const Evacuation = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch email from localStorage and user info from backend
    const storedEmail = localStorage.getItem('userEmail');
    
    if (storedEmail) {
      // Fetch user information if email exists
      axios.get(`http://localhost:5000/details/${storedEmail}`)
        .then(response => {
          console.log('Fetched user data:', response.data); // Debug log
          setUserInfo(response.data.user); // Set user info
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching user data:', err); // Debug log
          setError('Failed to fetch user data.');
          setLoading(false);
        });
    } else {
      // Handle case where email is not found in localStorage
      setUserInfo(null);
      setLoading(false);
    }
  }, []); // Empty dependency array ensures this effect runs once on mount

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
          <p><strong>Latitude:</strong> {userInfo.lat ?? 'Not available'}</p> {/* Handle missing fields */}
          <p><strong>Longitude:</strong> {userInfo.long ?? 'Not available'}</p> {/* Handle missing fields */}
        </div>
      )}
    </>
  );
};

export default Evacuation;
