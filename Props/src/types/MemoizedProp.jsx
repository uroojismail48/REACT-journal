import { memo, useCallback, useEffect, useState } from "react"

const Child = memo(({onClick}) =>{
console.log("Child Rendered")
return <button onClick={onClick}>Child BTn</button>
})
function MemoizedProp() {
     const [count, setCount] = useState(0)

     const handleClick = useCallback(() =>[
        console.log("Clicked")
     ], [])
     useEffect (() => {
        const interval = setInterval(() => setCount(c => c *1), 1000)
return ( ) => clearInterval(interval)
    }, [])
  return (
   


    <div>
      
<p>Parent Count : {count }</p>
<Child onClick={handleClick}/>
    </div>
  )
}

export default MemoizedProp
