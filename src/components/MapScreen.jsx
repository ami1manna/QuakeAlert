import React, { useEffect, useRef, useState } from 'react';

import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';

import L from 'leaflet';
import HeatmapLayerComponent from './HeatmapLayerComponent';
import { fetchEarthquakeData } from '../services/earthquakeApi';
import 'leaflet.heat';

// Fixing marker icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocationUpdater = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.flyTo([location.lat, location.lng], 13, {
        duration: 1.5, // Duration in seconds
      });
    }
  }, [location, map]);

  return null;
};


const ClickHandler = ({ onClick }) => {
  useMapEvents({
    click(event) {
      onClick(event.latlng);
    },
  });

  return null;
};

const MapScreen = ({ location, selectedLatLon, earthquakeInfo, onMapClick }) => {

  const [points, setPoints] = useState([]);
  const [error, setError] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    const getEarthquakeData = async () => {
      try {
        const earthquakeData = await fetchEarthquakeData();

        setPoints(earthquakeData);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };
    getEarthquakeData();
  }, []);

  const defaultPosition = [20, 0]; // Centered on the world
  const maxZoom = 15; // Set your desired maximum zoom level here

  const minZoom = 2; // Restrict minimum zoom level here
  const bounds = [[-90, -180], [90, 180]]; // Set map boundaries


  return (
    <>
      <MapContainer
        className='map-container overflow-hidden'
        center={defaultPosition}
        zoom={2}
        maxZoom={maxZoom} // Restrict maximum zoom level

        minZoom={minZoom} // Restrict minimum zoom level
        maxBounds={bounds} // Set map boundaries
        maxBoundsViscosity={1.0} // Makes sure the map stays within the set bounds
        style={{ height: '100%', width: '100%' }}

        whenCreated={mapInstance => mapRef.current = mapInstance}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {location && (
          <Marker position={[location.lat, location.lng]}>
            <Popup>
              Latitude: {location.lat} <br /> Longitude: {location.lng}
            </Popup>
          </Marker>
        )}

        {selectedLatLon && (
          <Marker position={[selectedLatLon.lat, selectedLatLon.lng]}>
            <Popup>
              Latitude: {selectedLatLon.lat} <br /> Longitude: {selectedLatLon.lng} <br />
              {earthquakeInfo ? (
                <>
                  Magnitude: {earthquakeInfo.magnitude} <br />
                  Location: {earthquakeInfo.location} <br />
                  Date: {earthquakeInfo.date}
                </>
              ) : (
                'No earthquake data available for this location'
              )}
            </Popup>
          </Marker>
        )}
        {error && <p className="text-red-500">{error}</p>}
        <HeatmapLayerComponent points={points} />
        <LocationUpdater location={location} />
        <ClickHandler onClick={onMapClick} />

      </MapContainer>
    </>
  );
};

export default MapScreen;
