import { useRef } from "react"




function UncontrolledProp() {
const ref = useRef()

const handleSubmit = () => {
    alert("Value is " + ref.current.value)
}
    return (
    <div>
      <input ref={ref} defaultValue="Initial text" type="text" name="" id="" />
    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default UncontrolledProp
