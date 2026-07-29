import Png from  '../assets/baker-man.png'
function Main() {
  return (
    <div className="w-full min-h-screen  flex flex-col sm:py-10
    w-full justify-center items-center md:flex-row py-10 px-5 ">
<div className="left  w-full md:w-1/2 p-4 h-full flex justify-center  flex-col gap-4" >
    <div className=" p-4 flex gap-4 flex-col
    ">
    <h1 className='font-bold text-7xl sm:text-5xl lg:text-7xl'>Learn Cooking in a Simple way </h1>
    <p className='text-lg sm:text-xl lg:text-2xl'>Over 1000+ Recipes from all around the world ,
        <span>You can Start cooking now!</span>
    </p>
    </div>
    <div className="flex flex-col sm:flex-row gap-4 ">
    <button className="bg-amber-400 p-2 px-5 rounded-2xl" >Get Started</button>
    <input className="rounded-2xl text-center border-2 border-white placeholder:text-white bg-amber-500" placeholder='Search recipes'  type="text" name="" id="" />
    <button className="w-10 h-10 bg-amber-100 rounded-full border-4 border-white">S</button>
</div>
</div>
<div className="right w-full md:w-1/2  flex justify-center items-center mt-10 md:mt-0 " >
<img src={Png} 
className='w-72 sm:w-96 md:w-full max-w-md object-contain'
alt="" />
</div>
    </div>
  )
}

export default Main