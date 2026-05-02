import { useState, useEffect } from "react"

function Timer() {
    const [count, setCount] = useState(0)
const [running, setRunning] = useState(false)
    useEffect(() => {
        if(!running)
            return;
        
     const timer = setInterval(() => {
setCount((prev) => (prev + 1))
     }, 1000)
    return () => {
        clearInterval(timer)
    }
  
    }, [running])
    
  return (
    <div>
      <h1>Timer : {count}</h1>
      <button onClick={() => setRunning(true)}>start</button>
      <button onClick={() => setRunning(false)}>stop</button>
    </div>
  )
}

export default Timer
