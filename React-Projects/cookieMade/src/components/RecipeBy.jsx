/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unreachable */
import { useEffect, useState } from "react";


function RecipeBy() {
    const [recipe, setRecipe] = useState([])
    const [selected, setSelected] = useState("")
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState([])
    async function fetchData  () {
       
        const data = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        const response = await data.json()
     
//response.categories.forEach((category) => {
//  console.log(category.strCategory);
//         setCategory(cc)
//         })
const names = response.categories.map((item) => item.strCategory)
   setCategory(names)
    }
    useEffect(() => {
fetchData()
    },[])

     async function newData(categoryName){
        setSelected(categoryName)
        setLoading(true)
        const rex = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
        const Hassle = await rex.json()
        setLoading(false)
        setRecipe(Hassle.meals)
        console.log(Hassle.meals)
    }
    if(loading) {
      return (
        <div className="w-full h-full flex justify-center items-center mt-30 flex-col">
          <div className="h-15 w-15 rounded-full border border-black animate-spin border-t-transparent"></div>
        </div>
      )
    }

    return (
    <div className="mt-10 h-screen">
    <hr/>
        <div className=" p-4 mt-5 flex justify-center items-center text-center flex-col ">
            <h2 className="font-bold text-4xl">Find Recipes By Category</h2>
            <div className="flex gap-2 w-full items-center mt-6 justify-center flex-wrap 
            
            ">
{category.map((name, index) => (
    <div key={index} className="flex flex-col px-3 py-2 rounded-2xl bg-amber-500 text-white font-semibold font-sans border-2 border-amber-600" >
        <button onClick={() => newData(name)}>{name}</button>
    </div>
))}</div>
            </div>
            {!selected ? (
                  <div className="mt-10 text-center">
    <h2 className="text-2xl font-semibold">
      Please select a category
    </h2>
  </div>
            )  : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
  {recipe.map((meal) => (
    <div key={meal.idMeal} className="border relative rounded-lg overflow-hidden">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-50 object-cover"
      />
      <h3 className="p-3  flex justify-center items-center text-white  absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent font-bold text-center">
        {meal.strMeal}
      </h3>

    </div>
  ))}
</div>
            )}
        


    </div>
  )
}

export default RecipeBy