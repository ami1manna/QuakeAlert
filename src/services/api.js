import axios from 'axios';
const getUserByEmail = async (email) => {
    try{
        const response = await axios.get(`http://localhost:5000/auth/user/${email}`);
        return response.data.user;//use name 
    }
    catch(error){
            console.error('Error fetching user data : ',error);
            return null;
    }
}
export default getUserByEmail; 

// for getting lat long 
const API_KEY = '626a7106501a4faba1944b98c0ef6632'; // Replace with your actual API key

export const fetchCoordinates = async (place) => {
  try {
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(place)}&key=${API_KEY}`
    );
    const results = response.data.results;
    if (results.length > 0) {
      return {
        lat: results[0].geometry.lat,
        lng: results[0].geometry.lng
      };
    } else {
      throw new Error('No results found');
    }
  } catch (err) {
    throw new Error('Error fetching data');
  }
};
