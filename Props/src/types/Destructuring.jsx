
function Destructuring({title, price, instock }) {
  return (
    <div className="container">
        <h1>Destructuring</h1>
      <h3>{title}</h3>
      <p>Price: {price}</p>
      <p>{instock ? "In Stock" : "Out of Stock"}</p>
    </div>
  )
}

export default Destructuring
