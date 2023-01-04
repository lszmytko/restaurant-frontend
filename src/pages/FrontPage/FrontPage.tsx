import React from "react";

import {
  FrontImage,
  About,
  TryOut,
  Footer,
  Sidebar,
  Basket
} from "../../components";
import Navigation from "../../components/Navigation";
import MainInfo from "../../components/MainInfo";

const FrontPage = () => (
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

export default FrontPage;
