import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import FeatureSections from "./components/FeatureSections";
import RecipeBy from "./components/RecipeBy";
import RecipeDetails from "./page/RecipeDetails";

function Home() {
  return (
    <>
      <Main />
      <FeatureSections />
      <RecipeBy />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen w-full bg-orange-100 text-black">
      <Navbar />

      <div className="px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;