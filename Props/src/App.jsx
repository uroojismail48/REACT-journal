import BasicProp from "./types/BasicProp"
import BooleanProp from "./types/BooleanProp"
import Destructuring from "./types/Destructuring"
import Middle from "./types/Propdrilling/Middle"
import RestProp from "./types/RestProp"
import SpreadProp from "./types/SpreadProp"
function App() {
    const username="Urooj"
  return (


    <div className="aa">
        <div className="propdrillig">
        
            <Middle username={username}/>
        </div>
 
    <SpreadProp/>
    <br />
    <RestProp label="username"
    error = "required"
    type="text"
    placeholder="Enter your username"
    minlength={20}
/>
        <Destructuring
        title={"new product"}
        price={22000}
        instock={true}
        />
   <BasicProp
      name="Urooj"
      age={21}
      city="karachi"
      />
     <BooleanProp
disabled={true}
/>
   
    </div>
  )
 }


export default App
