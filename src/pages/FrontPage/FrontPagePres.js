import React from "react";
import {
  FrontImage,
  About,
  TryOut,
  Footer,
  Sidebar,
  Basket,
} from "../../components/index.js";
import Navigation from "../../components/Navigation/Navigation.js";
import MainInfo from "../../components/MainInfo/MainInfo.js";

const FrontPagePres = () => {
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

export default FrontPagePres;
