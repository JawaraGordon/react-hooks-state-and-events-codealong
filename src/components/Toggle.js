import React, { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  // console.log(useState);

  const clickHandle = () => {
    setIsOn((isOn) => !isOn);
  };

  const color = isOn ? 'red' : 'white';

  return (
    <button style={{ background: color }} onClick={clickHandle}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}

export default Toggle;
