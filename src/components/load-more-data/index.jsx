import { useEffect, useState } from "react";
import './styles.css';

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      ); //skip 20 data which is already loaded

      const result = await response.json();

    //   if (result && result.products && result.products.length) {
    //     const existingIds = new Set(products.map(p => p.id));
    //     const newItems = result.products.filter(p => !existingIds.has(p.id));
    //     setProducts(prev => [...prev, ...newItems]);
    //     setLoading(false);
    //   }

      if (result && result.products && result.products.length) {
        setProducts((prevData)=> [...prevData, ...result.products]);
        setLoading(false);
      }

      console.log(result);
      console.log("Loaded IDs:", result.products.map(p => p.id));

    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading Data!</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        {/* <button disabled={products.length === 100 ? true : false} onClick={() => setCount(count + 1)}>Load More Products</button> */}

        <button disabled={products.length === 100 ? true : false} onClick={()=> setCount(count+1)}>Load More Products</button>
      </div>
      {
        products.length === 100 ? <div>You have reached your limit!</div> : null
      }
    </div>
  );
}
