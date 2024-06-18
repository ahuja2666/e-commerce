import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks";
import {
  addItemToCart,
  removeItemFromCart,
  decreaseQuantity,
  selectCartItems,
} from "../slices/cartSlice";
import MinusIcon from "./MinusIcon";
import PlusIcon from "./PlusIcon";
import TrashIcon from "./TrashIcon";

export type ProductCardPropType = {
  id: number | string;
  image?: string;
  title?: string;
  description?: string;
  category?: string;
  rating: {
    rate: number;
    count: number;
  };
  price?: number;
  quantity?: number;
};

type ProductCardProp = {
  product: ProductCardPropType;
};

const ProductCard: React.FC<ProductCardProp> = ({ product }) => {
  const { id, image, title, category } = product;
  const cart = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();

  return (
    <div className=" rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg bg-gray-950 flex flex-col h-full">
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
            <h3 className="text-lg font-semibold mb-1">
              {title ? title : null}
            </h3>
          </Link>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            {category ? category : null}
          </p>
        </div>
        {Object.keys(cart).includes(id.toString()) ? (
          <div className="flex items-center gap-2">
            {cart[id].quantity?.toString() === "1" ? (
              <button
                onClick={() => dispatch(removeItemFromCart(id))}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-900 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              >
                <TrashIcon className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={() => dispatch(decreaseQuantity(id))}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-900 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              >
                <MinusIcon className="h-4 w-4" />
              </button>
            )}

            <span className="text-sm sm:text-base">{cart[id].quantity}</span>

            <button
              onClick={() => dispatch(addItemToCart(product))}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-900 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              <PlusIcon className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => dispatch(addItemToCart(product))}
            className="cursor-pointer inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
