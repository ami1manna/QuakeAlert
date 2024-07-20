import axios from "axios";

// for getting lat long
const API_KEY = "626a7106501a4faba1944b98c0ef6632"; // Replace with your actual API key

export const fetchCoordinates = async place => {
  try {
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(place)}&key=${API_KEY}`
    );
    const results = response.data.results;
    if (results.length > 0) {
      return {
        lat: results[0].geometry.lat,
        lng: results[0].geometry.lng,
      };
    } else {
      throw new Error("No results found");
    }
  } catch (err) {
    throw new Error("Error fetching data");
  }
};
