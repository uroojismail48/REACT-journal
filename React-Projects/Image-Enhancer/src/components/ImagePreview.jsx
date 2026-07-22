import Loading from "./Loading";

function ImagePreview(props) {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-1 w-full max-w-4xl">


      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-bold text-center bg-gray-900 text-gray-200 py-2">
          Original Image
        </h2>

        {props.upload ? (
          <img
            src={props.upload}
            alt="Original"
            className="w-full h-80 object-cover"
          />
        ) : (
          <div className="w-full h-80 bg-gray-500 flex justify-center items-center text-white">
            No Image Selected
          </div>
        )}
      </div>

      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-bold text-center bg-gray-900 text-gray-200 py-2">
          Enhanced Image
        </h2>

        {props.loading ? (
          <Loading />
        ) : props.enhanced ? (
          <img
            src={props.enhanced}
            alt="Enhanced"
            className="w-full h-80 object-cover"
          />
        ) : (
          <div className="w-full h-80 bg-gray-500 flex justify-center items-center text-white">
            No Enhanced Yet
          </div>
        )}
      </div>

    </div>
  );
}

export default ImagePreview;