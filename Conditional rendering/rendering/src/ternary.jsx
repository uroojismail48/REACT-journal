import React from 'react'

function ternary(props) {
  return (
    <div>
      {props.isloggedin ? <h1>Welcome to the site</h1> : <h1>Please login to continue</h1>}
    </div>
  )
}

export default ternary
