import {
  Navigation,
  FrontImage,
  About,
  MainInfo,
  TryOut,
  Footer,
  Sidebar,
  Basket,
} from "../components/index.js";
import React, { useEffect } from "react";
import { useGlobalContext } from "../context/context.js";

const FrontPage = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  // hiding sidebar
  useEffect(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, []);
  return (
    <div>
      <Sidebar class="nav-sidebar" />
      <Basket />
      <Navigation />
      <FrontImage />
      <About />
      <MainInfo />
      <TryOut />
      <Footer />
    </div>
  );
};

export default FrontPage;
