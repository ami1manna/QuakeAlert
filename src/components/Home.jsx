
import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [depth, setDepth] = useState("");

  const [significance, setSignificance] = useState("");

  const [magnitude, setMagnitude] = useState(null);

  const handlePredict = async () => {
    try {
      const response = await axios.post("http://localhost:5000/predict", {
        longitude: parseFloat(longitude),
        latitude: parseFloat(latitude),
        depth: parseFloat(depth),

        significance: parseFloat(significance),

      });
      setMagnitude(response.data.magnitude);
    } catch (error) {
      console.error("Error predicting magnitude", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-2xl font-bold mb-4">Natural Disaster Prediction</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Longitude:
          <input
            type="number"
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Latitude:
          <input
            type="number"
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Depth:
          <input
            type="number"
            value={depth}
            onChange={e => setDepth(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Significance:
          <input
            type="number"
            value={significance}
            onChange={e => setSignificance(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>

      <button
        onClick={handlePredict}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Predict
      </button>
      {magnitude !== null && (
        <div className="mt-4">
          <h2 className="text-xl">Predicted Magnitude: {magnitude}</h2>
        </div>
      )}
    </div>
  );
}

export default Home;
