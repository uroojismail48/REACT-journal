
function PropTypes({title, rating, released}) {
  return (
    <div>
      <p>{title}</p>
      <p>Rating : {rating}</p>
      <p>{released ? "Released" : "Upcming"}</p>
    </div>
  )
}
PropTypes.PropTypes ={
 title: PropTypes.string,
    rating : PropTypes.number,
    released : PropTypes.bool

}
export default PropTypes
