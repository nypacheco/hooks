import React, { createContext } from 'react';

const NumberContext = createContext();

const Display = () => (
  <NumberContext.Consumer>
    {(value) => <div>The value is {value}</div>}
  </NumberContext.Consumer>
);

const ContextAPIComponent = () => (
  <NumberContext.Provider value={55}>
    <div>
      <Display />
    </div>
  </NumberContext.Provider>
);

export default ContextAPIComponent;
