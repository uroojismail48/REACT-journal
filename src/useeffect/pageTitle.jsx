import { useState, useEffect } from "react";

function PageTitle() {
    const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>counter</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1 )}>+</button>
    </div>
  )
}

export default PageTitle
