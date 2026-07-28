import Png from  '../assets/baker-man.png'
function Main() {
  return (
    <div className="w-full h-190  flex 
    w-full justify-center items-center">
<div className="left  w-200 p-4 h-full flex justify-center  flex-col gap-4" >
    <div className=" p-4 flex gap-4 flex-col
    ">
    <h1 className='font-bold text-7xl'>Learn Cooking in a Simple way </h1>
    <p className='text-2xl '>Over 1000+ Recipes from all around the world ,
        <span>You can Start cooking now!</span>
    </p>
    </div>
    <div className="flex gap-4 w-120 p-4">
    <button className="bg-amber-400 p-2 px-5 rounded-2xl" >Get Started</button>
    <input className="rounded-2xl text-center " placeholder='Search recipes'  type="text" name="" id="" />
    <button className="">Search</button>
</div>
</div>
<div className="right w-200 p-10" >
<img src={Png} alt="" />
</div>
    </div>
  )
}

export default Main