import { lazy } from "react";
//lazy load all the routes so the js will ship in bundles route wise
export const App = lazy(() => import("./App.tsx"));
