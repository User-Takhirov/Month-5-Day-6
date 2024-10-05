import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const MainLayout = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer className="footer" />
    </>
  );
};

