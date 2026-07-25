
import Cards from "../components/Cards";
import Main from "../components/Main"
import Navbar from "../components/Navbar"


const Home = () => {


  return (
    <div className="p-2">
      <Navbar />
      <Main />
      <div className="w-full h-10 text-black font-bold text-4xl mt-10 flex justify-around items-center mb-4 ">
              <h1>PRODUCTS</h1>
     
              
           
      </div>
      <hr />
      <Cards />
    </div>
  );
}

export default Home
