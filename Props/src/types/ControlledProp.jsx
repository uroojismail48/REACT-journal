import { useState } from "react"


function ControlledProp() {
    const [text, setText] = useState("")
  return (
    <div>
<h2>you are typing... {text}</h2>      
    <input

     type="text" value={text}
      onChange={(e) => setText(e.target.value)}
       name="" id="" 
       placeholder="Type something..."
       
       />
    </div>
  )
}

export default ControlledProp
