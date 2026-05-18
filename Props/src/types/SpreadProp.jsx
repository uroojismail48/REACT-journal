
function SpreadProp() {
    const input = {
        type : "text",
        placeholder: "Enter",
        minLength: 20
    }
  return (
    <div>
      <input {...input} />
    </div>
  )
}

export default SpreadProp
