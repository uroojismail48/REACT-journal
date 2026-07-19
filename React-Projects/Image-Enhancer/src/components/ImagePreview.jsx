
function ImagePreview() {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-1 w-full  max-w-4xl">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-bold text-center    bg-gray-900  text-gray-200 py-2">
          orginal image
        </h2>
        <img src="" className="w-full h-full  object-cover " alt="" />
        <div className="w-full bg-gray-500 flex justify-center items-center  h-80">
          No img selected
        </div>
      </div>

       <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-bold text-center    bg-gray-900  text-gray-200 py-2">
          orginal image
        </h2>
        <img src="" className="w-full h-full  object-cover " alt="" />
        <div className="w-full bg-gray-500 flex justify-center items-center  h-80">
          No img selected
        </div>
      </div>
    </div>
  );
}

export default ImagePreview
