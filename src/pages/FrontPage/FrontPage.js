import React, { useEffect, useState } from "react";
import FrontPagePres from "./FrontPagePres.js";

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
  return <FrontPagePres />;
};

export default FrontPage;
