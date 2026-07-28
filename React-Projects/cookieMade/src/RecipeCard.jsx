import { useEffect, useState } from "react"

function RecipeCards() {
    const [recipes, setRecipes] = useState([])       // saare fetched results
    const [categories, setCategories] = useState([]) // dropdown ke liye category list
    const [category, setCategory] = useState("All")  // user ne konsi category choose ki
    const [search, setSearch] = useState("chicken")  // default search term
    const [loading, setLoading] = useState(false)

    // Recipes fetch karna (search ke basis pe)
    async function Fetching(searchTerm) {
        setLoading(true)
        const data = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        )
        const response = await data.json()
        setLoading(false)
        setRecipes(response.meals || [])   // agar kuch na mile to empty array
    }

    // Categories fetch karna (dropdown ke liye, ek hi baar)
    async function FetchCategories() {
        const data = await fetch(
            "https://www.themealdb.com/api/json/v1/1/categories.php"
        )
        const response = await data.json()
        setCategories(response.categories)
    }

    useEffect(() => {
        Fetching(search)
        FetchCategories()
    }, [])

    // Search bar ka submit handle karna
    function handleSearch(e) {
        e.preventDefault()
        Fetching(search)
    }

    // Client-side filter: jo results aa chuke hain unhi ko category se chhaanna
    const filteredRecipes =
        category === "All"
            ? recipes
            : recipes.filter((meal) => meal.strCategory === category)

    return (
        <div className="w-full flex flex-col items-center p-4 gap-6">

            {/* Search + Filter bar */}
            <form
                onSubmit={handleSearch}
                className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl"
            >
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search recipe (e.g. chicken, pasta)"
                    className="flex-1 h-11 rounded-full px-4 border border-black"
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="h-11 rounded-full px-4 border border-black"
                >
                    <option value="All">All Categories</option>
                    {categories.map((cat) => (
                        <option key={cat.idCategory} value={cat.strCategory}>
                            {cat.strCategory}
                        </option>
                    ))}
                </select>

                <button
                    type="submit"
                    className="h-11 px-6 rounded-full bg-black text-white cursor-pointer"
                >
                    Search
                </button>
            </form>

            {/* Loading state */}
            {loading && (
                <div className="flex justify-center items-center h-40">
                    <div className="h-10 w-10 rounded-full border-4 border-black border-t-transparent animate-spin"></div>
                </div>
            )}

            {/* Results */}
            {!loading && filteredRecipes.length === 0 && (
                <p className="text-gray-500">No recipes found.</p>
            )}

            <div className="flex flex-wrap justify-center gap-4">
                {!loading &&
                    filteredRecipes.map((meal) => (
                        <div
                            key={meal.idMeal}
                            className="w-60 border border-black rounded-2xl flex flex-col items-center gap-2 p-4"
                        >
                            <img
                                src={meal.strMealThumb}
                                className="h-40 w-40 rounded-xl object-cover"
                                alt={meal.strMeal}
                            />
                            <h1 className="font-bold text-center">{meal.strMeal}</h1>
                            <hr className="w-full" />
                            <p>Category: {meal.strCategory}</p>
                            <p>Area: {meal.strArea}</p>
                            <button className="border-2 border-black p-2 w-full rounded-lg cursor-pointer">
                                VIEW RECIPE
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default RecipeCards