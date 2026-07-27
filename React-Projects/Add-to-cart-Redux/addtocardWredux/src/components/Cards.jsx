import { useEffect, useState } from "react"
import { useDispatch , useSelector} from "react-redux"; 
import { addTocart } from "../redux/cartSlice"

function Cards() {
    const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items)
  const total = cartItems.reduce((total , item ) => total + item.quantity, 0 ) 
    async function Fetching() {
        setLoading(true)
        const data = await fetch("https://dummyjson.com/products")
        const response = await data.json()
        setLoading(false)
        console.log(response);
        setProduct(response.products)
    }
    useEffect(() => {
        Fetching()
    }, [])
    if (loading) {

    return (
      <div className="flex justify-center items-center h-screen">
        <div className="h-10 w-10 rounded-full border-4 border-black border-t-transparent animate-spin"></div>
      </div>
    );
}
    return (
      <div className="flex flex-wrap justify-center gap-4 p-4">
    
        {product.map((product) => {
            const cartItem = cartItems.find((item) => item.id === product.id)
            return (
              <div
                key={product.id}
                className="w-60 h-100 p-4 border border-black rounded-2xl flex justify-center items-center flex-col gap-2"
              >
                <img src={product.images[0]} className="h-40 w-40" alt="" />

                <h1>{product.title}</h1>
                <hr />

                {/* <h2 className="flex w-full h-14 border border-red-900 overflow-hidden font- ">
              {product.description}
            </h2> */}
                <p>PRICE : {product.price}</p>
                <p>{product.availabilityStatus}</p>
                <p>Rating: {product.rating}</p>
                <button
                  onClick={() => dispatch(addTocart(product))}
                  className="border-2 border-black p-2 w-full cursor-pointer"
                >
                  ADD TO CART
                </button>
                {cartItem && <p>qty : {cartItem.quantity}
                </p>}
              </div>
            );
        })}
      </div>
    );
}

export default Cards