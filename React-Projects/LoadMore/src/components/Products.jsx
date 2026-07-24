import { useEffect, useState } from "react"

function Products() {
    const [count, setCount] = useState(0)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    async function fetchData() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const result = await response.json()
            if (result && result.products && result.products.length) {
                setProducts(result.products)
            }
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [count])

    if (loading) {
        return <div className="h-10 w-10 rounded-full border border-black animate-spin border-t-transparent"></div>
    }

    return (
        <div className=" w-full border ">
            <div className="pro flex justify-around">
                {products && products.length ? products.map(item =>
                    <div key={item.id}>
                        <img
                            src={item.thumbnail}
                            className="img-fluid rounded-top"
                            alt={item.title}
                        />
                        <p>{item.title}</p>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Products