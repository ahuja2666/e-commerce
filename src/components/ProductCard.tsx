import React from "react";
import { Link } from "react-router-dom";

export type ProductCardPropType = {
  id: number;
  image?: string;
  title?: string;
  description?: string;
  category?: string;
  rating: {
    rate: number;
    count: number;
  };
  price?: number;
};

type ProductCardProp = {
  product: ProductCardPropType;
};

const ProductCard: React.FC<ProductCardProp> = ({ product }) => {
  const { id, image, title, category } = product;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg dark:bg-gray-950 flex flex-col h-full">
      <Link to={`/details/${id}`} className="block">
        <img
          src={image ? image : "/vite.svg"}
          alt="Product Image"
          width={400}
          height={300}
          className="w-full h-60 object-cover"
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <Link to={`/details/${id}`} className="block">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-1">
              {title ? title : null}
            </h3>
          </Link>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            {category ? category : null}
          </p>
        </div>
        <button className="cursor-pointer inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
