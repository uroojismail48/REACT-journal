import React from 'react'

function Or(props) {
  return (
    <div>
      <h1> hello {props.user || "guest"  }!</h1>
    </div>
  )
}

export default Or
