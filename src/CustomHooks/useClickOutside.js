import { useRef, useState, useEffect } from 'react';

const useClickOutside = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  const handleClickOutside = ({ target }) => {
    if (ref.current && !ref.current.contains(target)) setShow(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return ({ ref, show, setShow });
};

export default useClickOutside;
