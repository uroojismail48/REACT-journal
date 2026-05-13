import react, { useCallback, useState } from "react";

const Button = React.memo(({ onClick, text }) => {
  console.log(`${text} button rendered`);

  return (
    <button onClick={onClick} style={{ marginRight: "10px" }}>
      {text}
    </button>
  );
});


function Buttonrender() {
  rconst [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
                                
                                        
  const increase = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div
      style={{
        background: dark ? "#222" : "#fff",
        color: dark ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Count: {count}</h1>

      < button text="Increase" onClick={()  => setCount(count + 1)}>Increase</button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        se} />
 
      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Buttonrender;
