
function KeyProp() {
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
  
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
            <li>{fruit}</li>
        ))}

        {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
        ))}
      </ul>

    </div>
  )
}

export default KeyProp
