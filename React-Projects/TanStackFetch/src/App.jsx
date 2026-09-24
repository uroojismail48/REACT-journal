import { BrowserRouter, Route,  Routes } from "react-router";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";

function App() {
  return (
     <div>
      <BrowserRouter>
    <Routes>
      <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<ProductPage/>} />
    </Routes>
   
      </BrowserRouter>
    
    </div>
  )
}

export default App;