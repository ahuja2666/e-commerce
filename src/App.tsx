import React, { useEffect, useState } from "react";
import ProductCard, { ProductCardPropType } from "./components/ProductCard";
import toast from "react-hot-toast";

function App() {
  const [products, setProducts] = useState<Array<ProductCardPropType>>([]);
  const [loading, setLoading] = useState(true);

  const getAllProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        toast.error("Unable to Fetch Products!");
      }
      const json: Array<ProductCardPropType> = await response.json();
      setProducts(json);
    } catch (error) {
      toast.error("Unable to Fetch Products!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-6 sm:mx-0">
          {new Array(20).fill(1).map((item, idx) => (
            <div
              key={item + idx + "ske"}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg dark:bg-gray-950"
            >
              <div className="h-60 bg-gray-200 dark:bg-gray-800 animate-pulse" />
              <div className="p-4 space-y-4">
                <div className="h-4 bg-gray-200 w-3/4 rounded dark:bg-gray-800" />
                <div className="h-4 bg-gray-200 w-2/3 rounded dark:bg-gray-800" />
                <div className="h-8 bg-gray-200 rounded w-full dark:bg-gray-800" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {products?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-6 sm:mx-0">
              {products.map((product) => (
                <React.Fragment key={product?.id}>
                  <ProductCard product={product} />
                </React.Fragment>
              ))}
            </div>
          ) : (
            <div className="text-center text-4xl">
              No Products Availabe <br></br> Please try after some time
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
