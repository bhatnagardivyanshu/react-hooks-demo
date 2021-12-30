import React, { useState, useEffect } from 'react';

const Bulb = ({ status = false }) => {
  const [state, setState] = useState(status);
  const [state2, setState2] = useState(status);

  const handleButtonClick = () => {
    setState((state) => !state);
  };

  useEffect(() => {
    return () => console.log('clearing effect');
  })

  useEffect(() => {
    const listener = () => setState((state) => !state);

    window.addEventListener('click', listener);

    return () => {
      console.log('removed listener');
      window.removeEventListener('click', listener);
    };
  }, []);

  const text = state ? <div>Bulb ON</div> : <div>Bulb OFF</div>;

  return (
    <div>
      <button onClick={handleButtonClick}>Switch Bulb ON/OFF</button>
      {text}
    </div>
  );
};

export default function () {
  const [bulbState, setBulbState] = useState(false);

  const handleButtonClick = () => {
    setBulbState((state) => !state);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        {bulbState ? `Hide` : `Show`} Bulb
      </button>
      {bulbState && <Bulb />}
    </div>
  );
}
