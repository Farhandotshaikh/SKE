// src/layouts/SiteLayout.jsx
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function SiteLayout() {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}