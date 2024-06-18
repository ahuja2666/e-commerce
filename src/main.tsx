import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App, Cart, ProductDetails } from "./routes";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import ErrorBoundary from "./components/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        errorElement: <ErrorBoundary />,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
        ),
      },
      {
        path: "/details/:id",
        errorElement: <ErrorBoundary />,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        errorElement: <ErrorBoundary />,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "*",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.Fragment>
);
