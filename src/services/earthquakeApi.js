// // services/earthquakeApi.js
// export const fetchEarthquakeData = async () => {
//     const endDate = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format
//     const startDate = new Date();
//     startDate.setFullYear(startDate.getFullYear() - 1);
//     const startDateString = startDate.toISOString().split('T')[0]; // Previous year date in YYYY-MM-DD format

//     const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startDateString}&endtime=${endDate}`;

//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Error ${response.status}: ${response.statusText}`);
//     }
//     const data = await response.json();
//     return data.features.map(feature => ({
//       lat: feature.geometry.coordinates[1],
//       lng: feature.geometry.coordinates[0],
//       magnitude: feature.properties.mag
//     }));
//   };
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
