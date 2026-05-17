import React from 'react'

function renderlist() {
    const fruits = ["Apple", "banana", "orange"];
     const fruitsitem = fruits.map (fruits => <li>{fruits}  </li>)  
  return (
    <div>
      <ol>
        {fruitsitem}
      </ol>
    </div>
  )
}

export default renderlist
