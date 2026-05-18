import BasicProp from "./types/BasicProp"
import BooleanProp from "./types/BooleanProp"
import ControlledProp from "./types/ControlledProp"
import Destructuring from "./types/Destructuring"
import ForwardRef from "./types/ForwardRef"
import Middle from "./types/Propdrilling/Middle"
import RefProp from "./types/RefProp"
import RenderProp from "./types/RenderProp"
import RestProp from "./types/RestProp"
import SpreadProp from "./types/SpreadProp"
import UncontrolledProp from "./types/UncontrolledProp"
import Layout from "./types/layoutProp/Layout"
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
<br />
<RefProp/>
<br />
<ForwardRef/>
<ControlledProp/>
<br />
<RenderProp
render={({
    x,y
}) => <p>X: {x} | y: {y}</p>}
/>
<br />
<Layout
header={
    <h1>my navbar</h1>
}
sidebar={<ul><li>Home</li><li>About</li></ul>}
content={<p>Main content here</p>}
/>
<UncontrolledProp/>
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
