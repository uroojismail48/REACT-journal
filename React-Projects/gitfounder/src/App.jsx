import { useEffect, useState } from "react"
import User from "./components/User"

function App() {
    const [userName, setUserName] = useState("uroojismail48")
    const [data, setData] = useState(null)
    const [laoding, setLaoding] = useState(false)
 const Handlesubmit = () => 
 {
     fetchGithub()
 }
    async function  fetchGithub() {
        setLaoding(true)
        const response = await fetch(`https://api.github.com/users/${userName}`)
        const result = await response.json()
        if (result) {
            setData(result)
            setLaoding(false)
        }
        console.log(result.name)
    }
   
    useEffect(() => {
     fetchGithub()   
    },[]) 

    if (laoding) {
        return (
          <div className="w-full h-screen flex justify-center items-center bg-black ">
            <div className="h-10 w-10 border border-white rounded-full animate-spin border-t-transparent "></div>
          </div>
        );
    }

  return (
    <div
      className="border border-black  text-white
      w-full h-screen  flex justify-center items-center flex-col 
bg-gray-900 "
    >
      <h1 className="text-4xl font-bold ">GITHUB Profile Hunter</h1>
      <div className="border-3 border-white w-80  p-6 gap-5 flex justify-center items-center flex-col ">
        <div className=" w-70 flex justify-center items-center gap-3">
          <input
            type="text"
            className="border-2 border-emerald-400  text-white font-semibold p-1 text-center"
            name="search by name"
            placeholder="Search Github User"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            className="border-2 border-emerald-400 p-1 w-30 text-center text-white font-bold "
            onClick={Handlesubmit}
          >
            {" "}
            Search
          </button>
        </div>
        {data !== null ? <User user={data} /> : null}
      </div>
    </div>
  );
}

export default App
