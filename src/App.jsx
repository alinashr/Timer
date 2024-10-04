import { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval= setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="max-w-md flex flex-col items-center justify-center py-8">
      <h1 className="text-2xl font-semibold pb-2">01-Stopwatch</h1>

      <div className="text-xl font-semibold">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}:</span>
        <div>

        <div className="flex flex-row justify-between">
          {running ? (
          <button
          onClick={() => {
            setRunning(false);
          }}
        >
          Stop
        </button>
          ) : (
            <button
            onClick={() => {
              setRunning(true) }}
          >
            Start
          </button>
          )
        }

        <button onClick={() => { setTime(0) }}>Reset</button>

        </div>
      </div>
      </div>
      </div>
)}

export default App;
