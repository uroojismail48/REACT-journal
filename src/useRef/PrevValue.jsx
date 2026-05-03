import { useState , useEffect, useRef} from "react"


function PrevValue() {
  const [count, setCount] = useState(0);

  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);
    
  return (
    <div>
      <h1>current : {count}</h1>
      <h2>Previous: {prevCount.current}</h2>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  )
}

export default PrevValue;
