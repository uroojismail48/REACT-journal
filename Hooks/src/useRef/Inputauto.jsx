import { useEffect, useRef } from "react"


function Inputauto() {
   
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type here..."
      />
    </div>
  );
}


export default Inputauto
