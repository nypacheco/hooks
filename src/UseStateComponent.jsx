import React, { useState } from 'react';

const UseStateComponent = () => {
  const [age, setAge] = useState(18);

  const handleOnClick = () => setAge(age + 1);

  return (
    <div>
      <h2>Eu tenho {age} anos</h2>
      <button type="button" onClick={handleOnClick}>
        Increase my age!
      </button>
    </div>
  );
};

export default UseStateComponent;
