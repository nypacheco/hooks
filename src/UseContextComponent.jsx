import React, { createContext, useContext } from 'react';

const NumberContext = createContext();

const Display = () => {
  const value = useContext(NumberContext);
  return <div>The value is {value}</div>;
};

const ContextAPIComponent = () => (
  <NumberContext.Provider value={65}>
    <div>
      <Display />
    </div>
  </NumberContext.Provider>
);

export default ContextAPIComponent;
