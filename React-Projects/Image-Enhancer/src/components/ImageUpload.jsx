
function ImageUpload(props) {
   const ShowImageHandler = (e) => {
  
    const file = e.target.files[0];
    if(file)
    {
props.ShowImageHandler(file)
    }
    }
  
  return (

      <div className="bg-white shadow:lg rounded-2xl p-6 max-w-2xl w-full">
          <label htmlFor="Inputlabel" className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all" >
            <input type="file"  name="" id="Inputlabel" hidden onChange={ShowImageHandler} />
            <p className="text-gray-600 font-medium">Click or drag Your File</p>
              
          </label>
         
    </div>
  )
}

export default ImageUpload
