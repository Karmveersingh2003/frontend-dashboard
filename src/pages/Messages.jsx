
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Replace with your backend URL

const BusTracker = () => {
  const [busLocation, setBusLocation] = useState({ latitude: 0, longitude: 0 });
  const [userLocation, setUserLocation] = useState({ latitude: 0, longitude: 0 });
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ask for user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError('Location access denied. Please enable location services.');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }

    // Listen to bus location updates from the server
    socket.on('busLocationUpdate', (data) => {
      setBusLocation(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Live Bus Tracker</h1>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div style={{ marginBottom: '20px' }}>
          <h3>Your Location:</h3>
          <p>Latitude: {userLocation.latitude}</p>
          <p>Longitude: {userLocation.longitude}</p>
        </div>

        <div>
          <h3>Bus Location:</h3>
          <p>Latitude: {busLocation.latitude}</p>
          <p>Longitude: {busLocation.longitude}</p>
        </div>

        <iframe
          src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyDX387BkppnDYaGEy65kolk4n4M00-9p7Y&center=${busLocation.latitude},${busLocation.longitude}&zoom=14`}
          width="100%"
          height="400px"
          title="Bus Location"
        ></iframe>

        <h3>Route Map:</h3>
        <iframe
          src={`https://www.google.com/maps/dir/?api=1&origin=${userLocation.latitude},${userLocation.longitude}&destination=${busLocation.latitude},${busLocation.longitude}&travelmode=driving&key=AIzaSyDX387BkppnDYaGEy65kolk4n4M00-9p7Y`}
          width="100%"
          height="400px"
          title="Route Map"
        ></iframe>
      </div>
   
    </>
  );
};

export default BusTracker;

