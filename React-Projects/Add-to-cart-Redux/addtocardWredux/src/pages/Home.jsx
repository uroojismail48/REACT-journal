
import Cards from "../components/Cards";
import Main from "../components/Main"
import Navbar from "../components/Navbar"
import {useSelector } from "react-redux"; 

const Home = () => {
 
  const cartItems = useSelector((state) => state.cart.items)
  const total = cartItems.reduce((total, item) => total + item.quantity, 0); 
  return (
    <div className="p-2">
      <Navbar />
      <Main />
      <div className="w-full h-10 text-black font-bold text-4xl mt-10 flex justify-around items-center mb-4 ">
              <h1>PRODUCTS</h1>
        <p>
          {` total Items : ${total}`}

     </p>
              
           
      </div>
      <hr />
      <Cards />
    </div>
  );
}

export default Home
