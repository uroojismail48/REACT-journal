import { createContext, useContext } from "react"
const ThemeContext = createContext()

function Context() {
    const theme = useContext(ThemeContext)
  return (
<div style={{
      background: theme === "dark" ? "#333" : "#fff",
      color: theme === "dark" ? "#fff" : "#333",
      padding: "16px"
    }}>
      Theme is: {theme}
    </div>
  )
}

export default Context
