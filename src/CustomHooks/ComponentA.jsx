import React from 'react';

import useClickOutside from './useClickOutside';

const ComponentA = () => {
  const { ref, show, setShow } = useClickOutside();

  return (
    <div ref={ref}>
      <button type="button" onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'}
      </button>
      {show && <span>I am span</span>}
    </div>
  );
};

export default ComponentA;
