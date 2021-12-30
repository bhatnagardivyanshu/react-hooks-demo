import React, { useState, useEffect } from 'react';
import './style.css';

import Sample from './sample';

// import useWindowWidth from "./useWindowWidth";
// const windowWidth = useWindowWidth();
const windowWidth = window.innerWidth;
let counter = 1;

export default function App() {
  // useState called gets logged everytime this component re-renders
  const [state, setState] = useState(0);

  /**
   * this doesn't update the state by 2
   * as the value of `state` remains the same for both the setState calls
   */
  const updateState = () => {
    setState(state + 1);
  };

  // useEffect(() => {
  //   return () => console.log('%c clearing useEffect', 'background: red');
  // });

  return (
    <div>
      <div onClick={updateState}> {state}</div>
      <Sample />
    </div>
  );
}

// export default function App() {
//   const [state, setState] = useState(console.log('useState called'));

//   // console.log({ state, counter });

//   useEffect(() => {
//     counter++;
//     console.log('useEf', state);
//     setState(20);
//   });

//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }
