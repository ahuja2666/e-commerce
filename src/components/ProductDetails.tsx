import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCardPropType } from "./ProductCard";
import toast from "react-hot-toast";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductCardPropType | null>(null);
  const [loading, setLoading] = useState(true);

  const getProductById = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        toast.error("Unable to Fetch Product Details!");
      }
      const json: ProductCardPropType = await response.json();
      setProduct(json);
    } catch (error) {
      toast.error("Unable to Fetch Product Details!");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getProductById();
  }, [getProductById]);

  return (
    <div className="flex flex-col">
      <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-24 max-sm:mx-2">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          {loading ? (
            <div className="w-full">
              <div className="h-[600px] rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />
            </div>
          ) : (
            <div>
              <img
                src={product?.image ? product.image : "/vite.svg"}
                alt="Product Image"
                width={600}
                height={600}
                className="w-full rounded-lg contain-size"
              />
            </div>
          )}
          {loading ? (
            <div className="space-y-4">
              <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 animate-pulse" />
              <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-700 animate-pulse" />
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 animate-pulse" />
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 animate-pulse" />
              </div>
              <div className="h-10 w-1/3 bg-gray-200 dark:bg-gray-700 animate-pulse" />
            </div>
          ) : (
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">
                {product?.title}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {product?.description}
              </p>
              <div className="flex items-center gap-2">
                {product?.rating?.rate
                  ? new Array(Math.round(product.rating.rate))
                      .fill(1)
                      .map((item, idx) => (
                        <StarIcon
                          key={item + idx + "star"}
                          className="w-5 h-5 fill-primary"
                        />
                      ))
                  : null}

                {5 - Math.round(product?.rating?.rate || 0)
                  ? new Array(5 - Math.round(product?.rating?.rate || 0))
                      .fill(1)
                      .map((item, idx) => (
                        <StarIcon
                          key={item + idx + "starno"}
                          className="w-5 h-5 fill-muted stroke-muted-foreground"
                        />
                      ))
                  : null}

                <span className="text-gray-500 dark:text-gray-400 ml-2">
                  {product?.rating?.rate
                    ? `${product.rating.rate}(${product.rating.count} reviews)`
                    : null}
                </span>
              </div>
              <div className="flex gap-4">
                <button
                  disabled={loading}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  Add to Cart
                </button>
                <div className="cursor-pointer inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300">
                  <HeartIcon className="w-4 h-4 mr-2" />
                  Add to Wishlist
                </div>
              </div>
              <div className="text-4xl font-bold">
                {Math.round(product?.price || 0).toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function HeartIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function StarIcon(props: { className: string; key?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
