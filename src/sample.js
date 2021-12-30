import React, { useState } from 'react';

export default function () {
  const [count, setCount] = useState(0);

  const showAlert = () => {
    setTimeout(() => alert(`${count} times clicked`), 2000);
  };

  return (
    <div>
      <p>Number of times clicked: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <button onClick={showAlert}>Click Me</button>
    </div>
  );
}
