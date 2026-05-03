import PageTitle from "./useeffect/pageTitle";
import Timer from "./useeffect/Timer";
import Apifetch from "./useeffect/ApiFetch";
// import Toggle from './usestate/toggle'
// import Increament from './usestate/increament'
// import Add from './usestate/add-delete'
import Inputauto from "./useRef/Inputauto";
import PrevValue from "./useRef/PrevValue";
import Stopwatch from "./useRef/Stopwatch";
import ThemeContext from './useContext/ThemeContext'
import Language from "./useContext/LanguageContext";

function App() {
  return (
    <div>
      <Language />
      <Timer />
      <Apifetch/>
<Inputauto/>
<PrevValue/>
      <PageTitle/>
<Stopwatch/>
<ThemeContext/> 
    {/* <Add />
    <Increament/>
    <Toggle/> */}

    </div>
  )
}

export default App;
