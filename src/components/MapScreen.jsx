import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

// Fixing marker icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapScreen = ({ location }) => {
  const mapRef = useRef();

  const LocationUpdater = ({ location }) => {
    const map = useMap();

    useEffect(() => {
      if (location) {
        map.flyTo([location.lat, location.lng], 7, {
          duration: 1.5, // Duration in seconds
        });
      }
    }, [location, map]);

    return null;
  };

  const defaultPosition = [51.505, -0.09];

  return (
    <>
      <MapContainer
        center={defaultPosition}
        zoom={2}
        style={{ height: '100vh', width: '100%' }}
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
        <LocationUpdater location={location} />
      </MapContainer>
    </>
  );
};

export default MapScreen;
