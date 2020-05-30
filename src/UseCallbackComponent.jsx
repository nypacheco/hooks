import React, { useState, useEffect, useCallback } from 'react';

const MyButton = ({ onClick }) => {
  useEffect(() => {
    console.log('onClick button - render');
  }, [onClick]);

  return (
    <button type="button" onClick={onClick}>Button</button>
  );
};

const UseCallbackComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('app - render');
  });

  // const handleOnClick = () => setCount(count + 1);
  const handleOnClick = useCallback(() => setCount((prev) => prev + 1), []);

  return (
    <div>
      <h2>{count}</h2>
      <MyButton onClick={handleOnClick} />
    </div>
  );
};

export default UseCallbackComponent;
