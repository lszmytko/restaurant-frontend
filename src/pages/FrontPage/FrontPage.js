import React, { useEffect, useState } from "react";
import FrontPagePres from "./FrontPagePres.js";

const FrontPage = () => {
  const [isFullScreen, setIsFullScreen] = useState(true);
  useEffect(() => {
    if (window.screen.width < 768) {
      setIsFullScreen(false);
    } else {
      setIsFullScreen(true);
    }
  }, []);

  return (
    <div className="FrontPage">
      <Sidebar smallScreenVisibility={"smallScreenVisibility"} />
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
