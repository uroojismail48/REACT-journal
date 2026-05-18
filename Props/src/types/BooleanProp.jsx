
function BooleanProp({disabled}) {
  return (

    <div>
      <button disabled={disabled}
       style={{ background: disabled ? "gray" : "blue", color: "white" }}
    className="btn"
    >
Boolean button
      </button>
    </div>
  )
}

export default BooleanProp
