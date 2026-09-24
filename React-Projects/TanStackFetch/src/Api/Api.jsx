async function getProducts(page, LIMIT) {
  let skip = (page - 1) * LIMIT;
  const res = await fetch(
    `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`,
  );
  const data = await res.json();
  console.log(data);
  return data;
}

export async function DeleteApi(id) {
  const res = await fetch(
    `https://dummyjson.com/products/${id}`, {
 method : "DELETE"
    }
  );
 
  return res.json()
}

export default getProducts;
