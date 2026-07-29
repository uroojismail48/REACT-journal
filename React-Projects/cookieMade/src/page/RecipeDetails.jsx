import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      setMeal(data.meals[0]);
    }

    fetchRecipe();
  }, [id]);

  if (!meal) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-14 h-14 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 py-30 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="grid md:grid-cols-2 gap-8">

          {/* Image */}
          <div>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-10">

            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              {meal.strCategory}
            </span>

            <h1 className="text-4xl font-bold mt-4 text-gray-800">
              {meal.strMeal}
            </h1>

            <div className="flex gap-3 mt-5 flex-wrap">
              <span className="bg-gray-200 px-4 py-2 rounded-lg font-medium">
               {meal.strArea}
              </span>

              <span className="bg-gray-200 px-4 py-2 rounded-lg font-medium">
                 {meal.strCategory}
              </span>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-3 text-orange-600">
              Instructions
            </h2>

            <p className="text-gray-700 leading-8 text-justify">
              {meal.strInstructions}
            </p>

            {meal.strYoutube && (
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-8 bg-orange-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                ▶ Watch Recipe Video
              </a>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;