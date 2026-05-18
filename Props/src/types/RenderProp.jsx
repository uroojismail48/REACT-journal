import { useState } from "react";

function RenderProp({ render }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) =>
        setPos({
          x: e.clientX,
          y: e.clientY,
        })
      }
      style={{
        height: "200px",
        border: "1px solid gray",
      }}
    >
      {render(pos)}
    </div>
  );
}

export default RenderProp;