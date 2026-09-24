import { useQuery } from "@tanstack/react-query";
import getProducts from "../Api/Api";
import { NavLink } from "react-router";

function Products() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-500 animate-pulse">Loading...</p>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Products</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {data?.products?.map((product) => (
          <NavLink
            key={product.id}
            to={`/products/${product.id}`}
            className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-100"
          >
            <div className="aspect-square bg-gray-50 overflow-hidden">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="p-3">
              <h2 className="text-sm font-medium text-gray-800 truncate">
                {product.title}
              </h2>
              <div className="flex items-center justify-between mt-2">
                <span className="text-base font-semibold text-gray-900">
                  ${product.price}
                </span>
                <span className="flex items-center gap-1 text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                  ⭐ {product.rating}
                </span>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Products;