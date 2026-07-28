import { useEffect, useState } from "react";

function FeatureSections() {
  const [recipes, setRecipes] = useState([]);

  async function fetchData() {
    const requests = Array.from({ length: 6 }, () =>
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
         {recipes.length > 5 && (
               <button className="mt-4 bg-orange-400 text-white px-4 py-2 rounded">
    Show More →
  </button>
            )}
</div>
      <div className="grid grid-cols-5 gap-1 ">
        {recipes.slice(0,5).map((meal) => (
          <div key={meal.idMeal} className="border 
relative
          rounded-b-md border-3 border-orange-400
          bg-orange-300">
            
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-60 object-cover relative "
            />
            <h2 className="font-bold mt-2 flex justify-center 
           absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
            items-center text-white">{meal.strMeal}</h2>
   
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSections;