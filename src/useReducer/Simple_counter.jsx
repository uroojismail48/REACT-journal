import { useReducer } from 'react'
 const initial = 0;
 function reducer(state, action){
    if(action === "increament"){
        return state + 1
    }
    if(action === "decreament"){
        return state - 1;
    

    }
return state;
}

function Simple_counter() {
  
    const [count, dispatch] = 
    useReducer(reducer, initial)
  return (
    <div>
        <h1>{count}</h1>

        <button onClick={() => dispatch("increament")}>+ </button>
    </div>
  )
}

export default Simple_counter
