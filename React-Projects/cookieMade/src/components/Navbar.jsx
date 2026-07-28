
function Navbar() {
  return (
    <div>
       <div className="w-full bg-amber-600 h-15 flex p-3
   fixed
       text-white font-bold justify-between items-center">
    <div className="left flex items-center">
        <h1>LOGO</h1>
        
    </div>
<div className="right flex items-center justify-between gap-4">
<a href="">HOME</a>
<a href="">RECIPIES</a>
<a href="">SERVICES</a>

</div>
       </div>

    </div>
  )
}

export default Navbar