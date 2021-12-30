import React, { useState, useEffect } from 'react';

const useWindowWidth = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  });

  return width;
};

export default useWindowWidth;
