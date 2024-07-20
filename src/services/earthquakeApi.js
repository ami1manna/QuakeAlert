
import axios from "axios";

export const fetchEarthquakeData = async () => {
  const response = await fetch(
    "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-07-19&endtime=2024-07-19&minmagnitude=4.5"
  );
  const data = await response.json();
  return data.features.map(feature => ({
    lat: feature.geometry.coordinates[1],
    lng: feature.geometry.coordinates[0],
    magnitude: feature.properties.mag,
  }));
};
