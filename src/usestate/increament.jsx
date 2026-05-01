import React from 'react'
import { useState } from "react";
function increament() {
      const [plus, setPlus] = useState(0);
  return (
    <div>
            {/* Counter */}
      <h1>COUNTER</h1>

      <div>
        <button onClick={() => setPlus(plus + 1)}>+</button>

        <p>{plus}</p>

        <button onClick={() => setPlus(plus - 1)}>-</button>
      </div>
    </div>
  )
}

export default increament
