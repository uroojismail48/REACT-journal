
function RestProp({label , error , ...rest}) {
  return (
    <div>
      <label>{label}</label>
      <input {...rest} />
      {error && <p style={{color:"red" }}>{error}</p>}
    </div>
  )
}

export default RestProp
