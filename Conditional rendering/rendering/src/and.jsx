import React from 'react'

function And(props) {
  return (
    <div>
      <h1>dashboard</h1>
      {props.hasnotifications && <p> u have a msg </p>}
    </div>
  )
}

export default And
