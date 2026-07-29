import { useEffect, useState } from "react";
import {Link } from 'react-router-dom'
import RecipeDetails from "../page/RecipeDetails";
function FeatureSections() {
  const [recipes, setRecipes] = useState([]);

  async function fetchData() {
    const requests = Array.from({ length: 5 }, () =>
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => res.json())
    );

    const data = await Promise.all(requests);

    const meals = data.map((item) => item.meals[0]);

    setRecipes(meals);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-full">
      <div className="flex justify-between items-center mt-5 ">
      <h2 className="text-4xl font-bold mb-5">Random Recipes</h2>

</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">        {recipes.slice(0,5).map((meal) => (
        <div
  key={meal.idMeal}
  className="rounded-md  overflow-hidden"
>
  <div className="relative">
    <img
      src={meal.strMealThumb}
      alt={meal.strMeal}
      className="w-full h-60 object-cover"
    />

    <h2 className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/20 to-transparent text-white font-bold text-xl text-center px-2">
      {meal.strMeal}
    </h2>
  </div>

  <div className="p-3 py-2">
    <Link
  to={`/recipe/${meal.idMeal}`}
  className="block text-center py-2 rounded font-bold text-white bg-orange-500"
>
  View
</Link>
  </div>
</div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSections;