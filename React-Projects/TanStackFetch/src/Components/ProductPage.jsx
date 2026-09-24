import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router";

function ProductPage() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      if (!res.ok) throw new Error("Product not found");
      return res.json();
    },
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-500 animate-pulse">Loading...</p>
      </div>
    );

  if (isError)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">{error.message}</p>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <NavLink
        to="/products"
        className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 mb-6"
      >
        ← Back to products
      </NavLink>

      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="bg-gray-50 rounded-xl flex items-center justify-center p-6">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="max-h-80 object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-900">{data.title}</h1>
          <p className="text-gray-500 mt-3 leading-relaxed">
            {data.description}
          </p>

          <div className="flex items-center gap-4 mt-6">
            <span className="text-3xl font-bold text-gray-900">
              ${data.price}
            </span>
            <span className="flex items-center gap-1 text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
              ⭐ {data.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;