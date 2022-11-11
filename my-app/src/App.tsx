import React, { useEffect, useState } from 'react';
import './App.scss';

type Colors = 'red' | 'yellow' | 'green';

function App() {
  const [activeColor, setActiveColor] = useState<Colors | null>(null);
  const trafficLightColors: Colors[] = ['red', 'yellow', 'green'];

  function turnOn() {
    let index = 0;
  
    setTimeout(function go() {
      setActiveColor(trafficLightColors[index]);
      index === 2 ? index = 0 : index++;
      setTimeout(go, 1000);
    }, 1000);
  }

  useEffect(() => {
    turnOn();
  }, []);

  return (
    <div className="trafficLight">
      <span className={`${activeColor === 'red' ? 'red' : 'gray'}`}></span>
      <span className={`${activeColor === 'yellow' ? 'yellow' : 'gray'}`}></span>
      <span className={`${activeColor === 'green' ? 'green' : 'gray'}`}></span>
    </div>
  );
}

export default App;
