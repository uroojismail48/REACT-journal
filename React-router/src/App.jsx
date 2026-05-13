
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Product from './Components/Product';
import Contact from './Components/Contact';
import About from './Components/About';
import "./App.css";
function App() {
  return (
    <>
      <Header />
<Routes>
<Route path="/" element ={<Home/>} />
<Route path="/product" element = {<Product/>} />
<Route path="/contact" element ={<Contact/>} />
<Route path="/About" element ={<About/>} />
</Routes>
<Footer/>
    </>
  );
}

export default App;