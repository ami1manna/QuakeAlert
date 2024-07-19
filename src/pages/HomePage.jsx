import React, { useState } from 'react';
import { fetchCoordinates } from '../services/api'; // Adjust the path as needed
import 'leaflet/dist/leaflet.css';
import MapScreen from '../components/MapScreen';

const HomePage = () => {
  const [place, setPlace] = useState('');
  const [location, setLocation] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const coords = await fetchCoordinates(place);
      setLocation(coords);
      setError('');
    } catch (err) {
      setError(err.message);
      setLocation(null);
    }
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-between items-center">
        <div className="h-full w-1/6 bg-black">
          <form className="max-w-sm mx-auto p-7" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="place"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Pls Enter Place
              </label>
              <input
                type="text"
                id="place"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="eg. Mumbai"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="h-full bg-slate-400 flex-1">
          <MapScreen location={location} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
