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
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context.js";

const FrontPage = () => {
  const [isFullScreen, setIsFullScreen] = useState(true);
  // hiding sidebar
  useEffect(() => {
    // if (isSidebarOpen) {
    //   setIsSidebarOpen(false);
    // }
    console.log(window.screen.width);
    if (window.screen.width < 768) {
      setIsFullScreen(false);
    } else {
      setIsFullScreen(true);
    }
  }, []);
  return (
    <div>
      <Sidebar smallScreenVisibility={"smallScreenVisibility"} />
      <Basket />
      <Navigation/>
      <FrontImage />
      <About />
      <MainInfo />
      <TryOut />
      <Footer />
    </div>
  );
};

export default FrontPage;
