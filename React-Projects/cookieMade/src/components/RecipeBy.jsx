import { useEffect, useState } from "react";


function RecipeBy() {
    const [category, setCategory] = useState([])
    async function fetchData  () {
        const data = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        const response = await data.json()
//    const cc =     response.categories.forEach((category) => {
//  console.log(category.strCategory);
//         setCategory(cc)
//         })
const names = response.categories.map((item) => item.strCategory)
   setCategory(names)
    }
    useEffect(() => {
fetchData()
    },[])
  return (
    <div className="mt-10">
    <hr/>
        <div className=" p-4 mt-5 flex justify-center items-center text-center flex-col">
            <h2 className="font-bold text-4xl">Find Recipes By Category</h2>
            <div className="flex gap-2 w-full items-center mt-6 justify-center flex-wrap ">
{category.map((name, index) => 
(
<div className="flex flex-col px-3 py-2 rounded-2xl bg-amber-500 text-white font-semibold font-sans border-2 border-amber-600" >
<button key={index}>{name}</button>
</div>
))
}
            </div>
        </div>
    </div>
  )
}

export default RecipeBy