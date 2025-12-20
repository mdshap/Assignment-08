import React, { useEffect } from "react";
import Navbar from "./NavBar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "../ScrollToTOp";

const Root = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <div className="max-w-400 mx-auto">
      <ScrollToTop />
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Outlet />
      <Footer />{" "}
    </div>
  );
};

export default Root;
