import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

//want my header to be present on all page that's why added this layout file

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <Toaster />
      <main className="container mx-auto z-0 pt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
