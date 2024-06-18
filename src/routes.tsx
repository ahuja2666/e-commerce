import { lazy } from "react";
//lazy load all the routes so the js will ship in bundles route wise
export const App = lazy(() => import("./App.tsx"));
export const ProductDetails = lazy(() => import("./components/ProductDetails"));
export const Cart = lazy(() => import("./components/Cart"));
