import Home from "./components/Home";

function App() {
  return (
    <div className=" flex flex-col items-center justify-center bg-black   min-h-screen text-white">
      <h1 className="text-white text-4xl font-bold mb-5">AI Image Enhancer </h1>
      <p className="text-gray text-semibold mb-7">
        Upload your Image let AI handle it
      </p>
      <Home />
      <p className="text-gray text-semibold mt-4">
        made by Urooj-Ismail
    </p>
    </div>
  );
}

export default App
