import {useState , useContext,createContext } from 'react'

const LanguageContext = createContext();

function Language() {
    const [language, setLanguage] = useState("en")
  const togglelanguage = () => {
    setLanguage ((prev ) => (prev === "en" ? "ur" : "en"))
  }
    return (
  <LanguageContext.Provider value= {{ language , togglelanguage}}> 
  <div>
      <Navbar />
        <Content />
        <Footer />
    </div>
      </LanguageContext.Provider>
  )
}

function Navbar(){
    const {language , togglelanguage} = useContext (LanguageContext)
    return(
        <div>
<button onClick={togglelanguage}>
         {language === "en"
          ? "Switch to Urdu"
          : "English mein karo"}
</button>
<hr/>
        </div>
    )
}
function Content (){
    const {language } = useContext(LanguageContext)

return(
    <div>
<h1>
      {language === "en"
          ? "Welcome"
          : "خوش آمدید"}
</h1>
 <p>
        {language === "en"
          ? "This is a React Context "
          :  "   ہے۔یہ React Context"}
      </p>
    </div>
)
}

function Footer (){
    const {language} = useContext(LanguageContext)

    return(
        <div className="d">
             <footer style={{ marginTop: "30px" }}>
      {language === "en"
        ? "Thank you"
        : "شکریہ"}
    </footer>
        </div>
    )
}
export default Language
