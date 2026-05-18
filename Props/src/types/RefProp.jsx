import { useRef } from "react"


function RefProp() {
    const inputRef = useRef()
  return (
    <div>
      <input type="text" ref={inputRef}
       />
       <button onClick={() => inputRef.current.focus()}>focus</button>
    </div>
  )
}

export default RefProp
