import { forwardRef, useRef } from "react"

const FancyInput = forwardRef((props, ref) => (
  <input ref={ref} placeholder="Fancy input" {...props} />
))

function ForwardRef() {
const ref = useRef()

    return (
    <div>
      <FancyInput ref={ref} /> 
      <button onClick={() => ref.current.focus()}> child focus</button>
    
    </div>
  )
}

export default ForwardRef
