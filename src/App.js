import React, { useState, useEffect } from "react";

function App() {
  const [timeCount, setTimeCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let timer;
    if (timeCount > 0) {
      timer = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(timer);
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    } else {
      setCurrentTime(0);
    }
    return () => clearInterval(timer);
  }, [timeCount]);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      const inputTime = Math.floor(parseFloat(event.target.value));
      if (isNaN(inputTime)) {
        setCurrentTime(0);
      } else {
        setTimeCount(inputTime);
        setCurrentTime(inputTime);
      }
      event.target.value = "";
    }
  }

  return (
    <div>
      <input type="text" placeholder="Enter time in seconds" onKeyDown={handleKeyDown} />
      <div id="current-time">{currentTime}</div>
    </div>
  );
}

export default App;
