
function Navbar() {
  return (
    <div>
       <div className="w-full bg-amber-600 h-15 flex p-3
   fixed
       text-white font-bold justify-between items-center">
    <div className="left flex items-center">
        <h1>LOGO</h1>
        
    </div>
<div className="right flex items-center justify-between gap-6">
<a href="">HOME</a>
<a href="">RECIPIES</a>
<a href="">SERVICES</a>
<button className="bg-amber-500 px-6 py-2 rounded-3xl border border-white">Sign Up</button>
</div>
       </div>

    </div>
  )
}

export default Navbar