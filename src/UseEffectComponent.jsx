import React, { useState, useEffect } from 'react';

const UseEffectComponent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [majority, setMajority] = useState(false);

  useEffect(() => {
    setName('Yuki');
    // return () => { /* componentWillUnmount() */ };
  }, []);

  useEffect(() => {
    if (age === 18) setMajority(true);
  }, [age]);

  useEffect(() => {
    console.log('updated state');
  });

  const handleOnClick = () => setAge(age + 1);

  return (
    <div>
      <h2>My name is {name}</h2>
      <h2>I am {age} years old</h2>
      <h3>Majority: {String(majority)}</h3>
      <button type="button" onClick={handleOnClick}>
        Increase my age!
      </button>
    </div>
  );
};

export default UseEffectComponent;
