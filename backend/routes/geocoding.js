const express = require('express');
const router = express.Router();
const axios = require('axios');

// Define the route to get earthquake data
router.get('/', async (req, res) => {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    const response = await axios.get(`https://earthquake.usgs.gov/fdsnws/event/1/query`, {
      params: {
        format: 'geojson',
        latitude: lat,
        longitude: lng,
        maxradius: 5 // Adjust this as needed
      }
    });

    // Process response data
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching earthquake data' });
  }
});

module.exports = router;
