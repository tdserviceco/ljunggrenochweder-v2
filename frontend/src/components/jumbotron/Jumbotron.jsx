import React from 'react'
import { useEffect } from 'react';
import { useTransition } from "react-transition-state";

 function Jumbotron() {

  const [effect, setEffect] = useTransition({
    timeout: 500,
    mountOnEnter: true,
    unmountOnExit: true,
    preEnter: true,
    preExit: true
  });

  const showEffect = effect === "unmounted";

  useEffect(() => {
    setEffect();
  },[])

  return (
    <div className={`home-container`}>
      {!showEffect &&
      <div className={`home-content ${ effect }`}>
        <h1>Welcome Home!</h1>
        <h3>Have a seat by the fire</h3>
      </div>
      }
    </div>    
  )
}

export default Jumbotron;