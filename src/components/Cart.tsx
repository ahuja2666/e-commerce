import { useAppSelector, useAppDispatch } from "../hooks";
import {
  addItemToCart,
  decreaseQuantity,
  getCartQuantity,
  getCartTotal,
  removeItemFromCart,
} from "../slices/cartSlice";
import MinusIcon from "./MinusIcon";
import PlusIcon from "./PlusIcon";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";
import TrashIcon from "./TrashIcon";

export default function Cart() {
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const cartQuantity = useAppSelector(getCartQuantity);
  const total = useAppSelector(getCartTotal);
  return (
    <>
      {Object.keys(cart).length > 0 ? (
        <div className="grid md:grid-cols-[1fr,300px] gap-8">
          <div className="overflow-y-auto mx-5 overflow-x-hidden max-h-[calc(100vh-8rem)] max-w-full max-md:scrollbar-hide">
            <div className="flex flex-col gap-6">
              {Object.values(cart).map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 border-b pb-4"
                >
                  <Link to={`/details/${product.id}`} className="flex-shrink-0">
                    <img
                      src={product?.image ? product.image : "/vite.svg"}
                      alt="Product Image"
                      width={35}
                      height={35}
                      className="rounded-md w-36 h-36 contain-size"
                    />
                  </Link>
                  <div className="flex-1 overflow-hidden">
                    <Link to={`/details/${product.id}`}>
                      <h3 className="font-medium text-sm sm:text-base overflow-ellipsis overflow-hidden whitespace-nowrap">
                        {product.title}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-2 mt-2">
                      {product.quantity?.toString() === "1" ? (
                        <button
                          onClick={() =>
                            dispatch(removeItemFromCart(product?.id || ""))
                          }
                          className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-900 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            dispatch(decreaseQuantity(product?.id || ""))
                          }
                          className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-900 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                      )}
                      <span className="text-sm sm:text-base">
                        {product.quantity}
                      </span>

                      <button
                        onClick={() => dispatch(addItemToCart(product))}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-900 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      >
                        <PlusIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-sm sm:text-base font-medium">
                    {Math.round(product?.price || 0).toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sticky bottom-0 bg-gray-950 rounded-lg shadow-lg p-6 md:p-8 md:sticky md:top-4">
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <p className="font-medium">Total Items</p>
                <p className="font-medium">{cartQuantity}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-medium">Total Price</p>
                <p className="font-medium">
                  {Math.round(total).toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <button className="cursor-pointer inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}
