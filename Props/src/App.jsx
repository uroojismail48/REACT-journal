import BasicProp from "./types/BasicProp"
import BooleanProp from "./types/BooleanProp"
import Destructuring from "./types/Destructuring"
function App() {
  return (


    <div className="aa">
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
