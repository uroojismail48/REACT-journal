import { useEffect, useState } from "react";
import RecipeCards  from './RecipeCard'
function App() {
    const [recipe, setRecipe] = useState([])
    const [category, setCategory] = useState([])
   async function fetchData() {
        const data = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
        const response = await data.json();
        console.log(response);
        setRecipe(response.meals || [])
    }
    useEffect(()=> {
        fetchData()
    },[])
    const filterR = category === "All" ? recipe : recipe.filter((meal) => meal.strCategory === category)
  return (
    <>
    <div>Recipe Finder App</div>
    <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
       <option value="All">All</option>
    <option value="Dessert">Dessert</option>
    <option value="Seafood">Seafood</option>
    <option value="Vegetarian">Vegetarian</option>
    </select>

    {filterR.map((meal) => (
  <RecipeCards key={meal.idMeal} meal={meal} />
    ))}
    </>
  )
}

export default App