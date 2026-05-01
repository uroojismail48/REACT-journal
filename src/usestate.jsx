
import React from 'react';
import { useState } from 'react'

function usestate() {

const [dark, setDark] = useState (false)
    const [plus, setPlus] = useState (0)

  return (

    < div style= {{
      backgroundColor: dark ? "black" : "darkgray",
  height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: dark ? "darkgray" : "black",
      
    }}>
        <h1>COUNTER</h1>       
      <button onClick={() => setPlus(plus + 1)} > +</button>
      <p>{plus}</p>
            <button  onClick={() => setPlus(plus - 1)} > - </button>

             < div className="" >
                <button className='a'  onClick={() => setDark(!dark)}> Toggle </button>

             
    </div>
    </div>
  )
}

export default usestate
