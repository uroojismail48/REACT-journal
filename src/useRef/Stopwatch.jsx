import { useState, useRef } from "react"


function Stopwatch() {
const [time, setTime] = useState(0)
const intervalRef = useRef(null)

const start = () => {
    if(intervalRef.current !== null) return
    intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1)
    }, 1000);
}

const reset = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null;
    setTime(0)
}
const stop = () => {
clearInterval (intervalRef.current);
intervalRef.current = null
}
  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{time} seconds</h2>
      <button onClick={start}>start</button>
            <button onClick={reset}>reset</button>
                  <button onClick={stop}>stop</button>
    </div>
  )
}

export default Stopwatch
