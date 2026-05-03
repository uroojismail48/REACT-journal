import { useState , createContext , useContext } from "react";
const ThemeContext = createContext();

function Theme() {
       const [dark, setDark] = useState(false);
 const toggleTheme = () => {
    setDark(!dark);
 }
       return (

   
<ThemeContext.Provider value={{ dark, toggleTheme }}>
<div div style={{
          background: dark ? "#222" : "#fff",
          color: dark ? "#fff" : "#000",
          minHeight: "100vh",
          padding: "20px",
        }}>


 <Navbar />
        <Content />
        <Footer />

</div>


</ThemeContext.Provider>
  
    )
}


function Navbar(){
  const { dark, toggleTheme } = useContext(ThemeContext);
    return(
 <div>
<h1>{dark ? "Dark Mode" : "Light Mode" }</h1>
<button onClick={toggleTheme}>Toggle theme</button>
   <hr/> 
        </div>
    )
}

function Content (){
    const {dark} = useContext(ThemeContext);
    return(
        <div>
            <h2> content Component   </h2>
            <p>
                current Theme : {dark ? "Dark" : "Light"}
            </p>
        </div>
    )
}


function Footer(){
  const {dark } = useContext (ThemeContext)
    return(
<footer>
    footer : {dark ? "Dark" : "Light"}
</footer>
    )
}
export default Theme;
