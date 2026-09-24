import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import Products from "./Components/Products";
import ProductPage from "./Components/ProductPage";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
    <div className="w-full h-20 bg-black text-white font-bold text-2xl  flex justify-around items-center">
      <h1>STOCKMARKET</h1>
    <div className="  flex justify-end gap-5 ">
      <NavLink to="/products">
    <button className="border border-white/30 text-white rounded-2xl p-2 bg-white/20 text-sm">Show products</button>
    </NavLink>
<NavLink to="/">
    <button className="border border-white/30 text-white rounded-2xl p-2 bg-white/20 text-sm">GO BACK</button>
    </NavLink>
    <NavLink to="/signUp">
    <button className="border border-white/30 text-white rounded-2xl p-2 bg-white/20 text-sm">Sign Up</button>
    </NavLink>
    </div>
    </div>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
