import { useEffect, useState } from "react";
import ProductCard, { ProductCardPropType } from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState<Array<ProductCardPropType>>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json() as Promise<Array<ProductCardPropType>>)
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-10 items-stretch">
        {products.map((product, i) => (
          <div key={product.id}>
            <ProductCard product={product} newProduct={i % 2 === 0} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
