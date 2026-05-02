import PageTitle from "./useeffect/pageTitle";
import Timer from "./useeffect/Timer";
import Apifetch from "./useeffect/ApiFetch";
// import Toggle from './usestate/toggle'
// import Increament from './usestate/increament'
// import Add from './usestate/add-delete'
function App() {
  return (
    <div>
      <Timer />
      <Apifetch/>
      <PageTitle/>
    {/* <Add />
    <Increament/>
    <Toggle/> */}
    </div>
  )
}

export default App;
