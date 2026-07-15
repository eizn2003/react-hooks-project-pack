import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";

export const LoadMoreData = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      once: true,
    });
  });

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`,
        );
        const data = await response.json();
        if (data && data.products && data.products.length) {
          setProducts((prevProducts) => [...prevProducts, ...data.products]);
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [count]);

  if (loading) {
    return <div className="bg-green-400 text-center font-bold text-white rounded-md w-[50%] translate-x-1/2 mt-60 py-4">Loading...</div>;
  }

  return (
    <div className="w-full h-full flex flex-col gap-4 items-center justify-center bg-green-400">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-auto p-4">
        {products.map((product) => (
          <div key={product.id} className="relative bg-white rounded-md border-1 p-4" data-aos="fade-up" data-aos-delay="100">
            <img src={product.thumbnail} alt={product.title} />
            <hr />
            <h3 className="text-lg font-bold text-red-700">{product.title}</h3>
            <p className="text-gray-600 font-semibold mt-2">{product.description}</p>
            <button className="bg-blue-700 text-white py-2 px-4 mt-4 w-full rounded-md hover:bg-blue-600">Add to Cart</button>
            <p className="absolute top-0 left-5 bg-red-700 text-white py-1 px-2 rounded-md rounded-t-none">Price: ${product.price}</p>
          </div>
        ))}
      </div>
      <p className={`text-center font-bold ${count * 20 === 100 ? 'text-green-700' : 'text-gray-700'}`}>
        {count * 20 === 100 ? `You have reached ${count * 20} products.` : ""}
      </p>
      <button onClick={() => setCount(count + 1)} className={`bg-blue-700 text-white py-2 px-4 mb-5 rounded-md hover:bg-blue-600 ${count * 20 === 100 ? 'cursor-not-allowed opacity-50' : ''}`} disabled={count * 20 === 100}>
        Load More
      </button>
    </div>
  )
};
