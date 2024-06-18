import { Link } from "react-router-dom";
import ShoppingCartIcon from "./ShoppingCartIcon";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 md:px-6">
      <div className="text-center space-y-4">
        <ShoppingCartIcon className="mx-auto h-16 w-16 text-gray-400" />
        <h2 className="text-2xl font-bold tracking-tight">
          Your cart is empty
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Looks like you haven't added anything to your cart yet. Let's change
          that!
        </p>
        <Link
          to="/"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
