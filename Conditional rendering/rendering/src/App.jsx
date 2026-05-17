import React from 'react'
import Ternary from './ternary.jsx'
import And from './And.jsx'
import Or from './Or.jsx'
import Switch from './Switch.jsx'
import Renderlist from './renderlist.jsx'
import Renderobject from './renderobject.jsx'
function App() {
  
     const mobiles = [
            { name: "iphone" , price:"10,000" ,},
        { name: "infinix" , price:"7000" },
        { name: "oppo" , price:"9000"}
    
    ]

  return (
    
    <div>
      <Ternary
        isloggedin ={true}
      />
      <And hasnotifications={true}
      />
      <Or user={null}
      />
```
      <Switch status='inactive' />
      <Renderlist  />
      <Renderobject items={mobiles} category="electronics" />
       
    </div>
  )
}

export default App
