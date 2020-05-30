import React from 'react';

import usePosition from './usePosition';

const ComponentB = () => {
  const { lat, lon } = usePosition();

  return (
    <span>My current position is {`${lat}, ${lon}`}</span>
  );
};

export default ComponentB;
