import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
const history=useHistory()
  useEffect(() => {

    let timePassed = 0;
    const intervalId = setInterval(() => {
      timePassed++;
      setSeconds(timePassed % 60);
      setMinutes(Math.floor(timePassed / 60))
      ;
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  if(minutes===8){
    history.push("/Uipage")
  }
  return (
    <div>
      {minutes} minutes and {seconds} seconds have passed
    </div>
  );
}

export default Timer;