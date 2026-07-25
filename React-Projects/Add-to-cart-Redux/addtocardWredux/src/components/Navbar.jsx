
function Navbar() {
  return (
    <div className="w-full h-17 bg-black text-white flex justify-around items-center">
      <div className="right w-200 h-14   flex justify-center items-center gap-30">
        <h1 className="font-bold text-3xl">LOGO</h1>
        <input type="text" name="" id="" placeholder="SEARCH" className="border-2 border-white p-4 text-center h-7 rounded-2xl " />
      </div>
      <div className="left  w-100 h-14   flex  justify-center items-center gap-6">
        <a href="">HOME</a>
        <a href="">PRODUCTS</a>
        <a href="">SERVICEs</a>
        <a href="">CONTACT</a>
      </div>
    </div>
  );
}

export default Navbar