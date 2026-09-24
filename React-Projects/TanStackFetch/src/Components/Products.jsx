import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getProducts, { DeleteApi } from "../Api/Api";
import { NavLink } from "react-router";
import { useState } from "react";

function Products() {
const [page, setPage] = useState(1)
  const LIMIT = 12

 
  const { data, isLoading } = useQuery({
    queryKey: ["products", page],
    queryFn: () =>  getProducts( page,LIMIT ),
    keepPreviousData : true
  });
const queryClient = useQueryClient()
  const DELETEPRoduct = useMutation({
    mutationFn : (id) =>  DeleteApi(id), 
    
    onSuccess : (_data , deletedId) => {
      queryClient.setQueryData(["products", page], (old) =>
        old
          ? {
              ...old,
              products: old.products.filter((m) => m.id !== deletedId),
            }
          : old
      )
     const deletedIDs = JSON.parse(localStorage.getItem("deletedIDs" ) || "[]")
     localStorage.setItem("deletedIDs", JSON.stringify([...deletedIDs, deletedId]) )
    }
  })

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-500 animate-pulse">Loading...</p>
      </div>
    );
 const totalPages = Math.ceil(data.total / LIMIT)
     const deletedIDs = JSON.parse(localStorage.getItem("deletedIDs" ) || "[]")
     const visibleProducts = data?.products?.filter((p) => !deletedIDs.includes(p.id))
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-400 mb-6">ALL PRO-ducts</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {visibleProducts?.map((product) => (
          <div 
               key={product.id}
          className="">
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
   </NavLink>
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
                <button 
                onClick={()=> DELETEPRoduct.mutate(product.id)}
                className=" bg-red-500 p-2 text-sm rounded-2xl text-white">DELETE</button>
              </div>
              
            </div>
       </div>
        ))}
      <div className="w-full flex justify-center items-center gap-5">
          <button onClick={() => setPage((prev) => Math.min(prev + 1,totalPages))}

          disabled={page === totalPages}
          >  Increase</button>
           <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        
        </span>
         <button onClick={() => setPage((prev) => Math.max( prev - 1 , 1))}
          disabled={page === 1}          
          >  decrease</button>
      </div>
      </div>
    </div>
  );
}

export default Products;