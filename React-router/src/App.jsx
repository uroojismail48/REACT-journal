
import Footer from "./Components/Footer";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from './Components/Home';
import Product from './Components/Product';
import Contact from './Components/Contact';
import About from './Components/About';
import "./App.css";
import RootLayout from "./Layout/RootLayout";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path='/' element={<RootLayout/>}>
        <Route path="/" element ={<Home/>} />
<Route path="product" element = {<Product/>} />
<Route path="contact" element ={<Contact/>} />
<Route path="About" element ={<About/>} />
      </Route>
    )
  );
  return (
    <>
   <RouterProvider  router={router}/>

<Footer/>
    </>
  );
}

export default App;