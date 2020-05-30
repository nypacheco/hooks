import { useState, useEffect } from 'react';

export const getCurrentPosition = () => new Promise(
  (resolve, reject) => {
    const { geolocation } = navigator;

    if (!geolocation) {
      reject(new Error('Geolocation is not supported'));
    }

    geolocation.getCurrentPosition(
      ({ coords }) => resolve({ lat: coords.latitude, lon: coords.longitude }),
      ({ message }) => reject(new Error(message)),
    );
  },
);

const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const pos = await getCurrentPosition();
        setPosition(pos);
      } catch (err) {
        setError(err.message);
      }
    };

    load();
  }, []);

  return { ...position, error };
};

export default usePosition;
