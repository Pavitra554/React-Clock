import { useState,useRef } from "react";
import "../Style/Timer.css";
const Timer = () => {
  let s = 0;
  let m = 0;
  let h = 0;
  const [Hour, setHour] = useState(h);
  const [min, setmin] = useState(m);
  const [sec, setsec] = useState(s);
  const [currtime,setcurrtime] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const start = () => {
    setIsActive(!isActive);
    countRef.current = setInterval(() => {
      s++;
      setsec(s);
      if (s === 60) {
        m++;
        setmin(m);
        if (m === 60) {
          h++;
          setHour(h);
          m = 0;
          setmin(m);
        }
        s = 0;
        setsec(s);
      }
    }, 1000);
  };
  const resume = () => {
    h = Hour;
    m = min;
    s = sec;
    start()
    setIsPaused(!isPaused);
    setIsActive(!isActive);
  };
  const gettime = () => {
    setcurrtime(currtime + Hour +':'+ min +':'+ sec);
  }

  const restart = () => {
    clearInterval(countRef.current);
    setIsActive(!isActive);
    setHour(0);
    setmin(0);
    setsec(0)
  }

   
  const stop = () => {
    clearInterval(countRef.current);
    setIsPaused(!isPaused);
  }


  return (
    <div className="mainbox">
      <div className="mainTimer">
        <div className="timeview">
          <div className="minutes">{Hour}</div>:
          <div className="minutes">{min}</div>
          <div className="seconds">:{sec}</div>
        </div>
      </div>
      <div className="lap">
        <span>{currtime}</span>
      </div>
      <div className="settimer">

      <button className="button_on" onClick={gettime}>
          Lap
        </button>

        <button className={isActive?"restart":"button_off"} 
        onClick={isActive? restart: start}>
          {isActive?"Restart":"Start"}
        </button>

        <button className={isPaused?"resume":"pause"}
        onClick={isPaused?resume: stop}>
        {isPaused?"Resume":"Pause"}
        </button>

        
      </div>
    </div>
  );
};

export default Timer;
