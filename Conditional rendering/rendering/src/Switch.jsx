import React from 'react'

function Switch({status}) {
  return (
    <div>
      {status === 'active' && <p>Status: Active</p>}
      {status === 'inactive' && <p>Status: Inactive</p>}
    </div>
  )
}

export default Switch
