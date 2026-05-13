
import Footer from "./Components/Footer";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from './Components/Home';
import Product from './Components/Product';
// import Contact from './Components/Contact';
import About from './Components/About';
import "./App.css";
import RootLayout from "./Layout/RootLayout";
import ContactLayout from "./Layout/ContactLayout";
import ContactForm from "./Components/ContactForm";
import ContactInfo from "./Components/ContactInfo";
import NotFound from "./Components/NotFound";
import JobsLayout from "./Layout/JobsLayout";
import Jobs, { JobsLoader } from "./Components/Jobs";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path='/' element={<RootLayout/>}>
        <Route path="/" element ={<Home/>} />
<Route path="product" element = {<Product/>} />
<Route path="contact" element ={<ContactLayout/>}>
<Route path='info' element={<ContactInfo/> } />
   
<Route path='Form' element={<ContactForm />} />
</Route>
<Route path="About" element ={<About/>} />

<Route path="jobs" element={<JobsLayout/>}>
  <Route index element={<Jobs/>} loader={JobsLoader}/>
</Route>
 <Route path='*' element={<NotFound/>} /> 
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