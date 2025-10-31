import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
