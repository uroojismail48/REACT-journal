import { useEffect } from "react"
import Navbar  from './components/Navbar'
import Main from "./components/Main"
import FeatureSections from "./components/FeatureSections"
import RecipeBy from "./components/RecipeBy"
function App() {

async function fetchData(){
  const data = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
const response = await data.json()


}
useEffect(() => 
{
fetchData()
},[])
  return (
    <div className="h-screen w-full bg-orange-100 text-black ">
<Navbar/>
<div className="px-4">
<Main/>
<FeatureSections/>
<RecipeBy/>
    </div>
    </div>
  )
}

export default App