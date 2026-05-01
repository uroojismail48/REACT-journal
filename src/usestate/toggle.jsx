import { useState } from "react";

function Toggle() {
      const [dark, setDark] = useState (false);
  return (

      <div
      style={{
        backgroundColor: dark ? "black" : "darkgray",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: dark ? "white" : "black",
        gap: "20px",
      }}
    >
       {/* Dark Mode */}
      <button onClick={() => setDark(!dark)}>
        Toggle
      </button>
    </div>
  )
}

export default Toggle
