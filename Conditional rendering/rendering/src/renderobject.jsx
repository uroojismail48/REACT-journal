import React from 'react'

function Renderobject(props) {

  const items = props.items

  // ✅ Pehle check karo — empty hai ya nahi
  if (!items || items.length === 0) {
    return <p>NO ITEMS FOUND</p>
  }

  const newMobiles = items.map(item => (
    <li key={item.name}>
      {item.name} — {item.price}
    </li>
  ))

  return (
    <div>
      <ul>
        {newMobiles}
      </ul>
    </div>
  )
}

Renderobject.defaultProps = {
  items: []  // ✅ Empty array — default
}

export default Renderobject