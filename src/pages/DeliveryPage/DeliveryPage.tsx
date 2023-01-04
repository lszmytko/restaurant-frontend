import React, { useEffect } from "react";

import { Footer, Sidebar } from "../../components";
import { useGlobalContext } from "../../context/context";
import MyMapComponent from "../../components/MyMapComponent/MyMapComponent";
import { info1, info2 } from "./static";
import { getTodayDeliveryHours, getTodayOpeningHours } from "./utils";

const DeliveryPage = () => {
  const { setIsSidebarOpen, isSidebarOpen } = useGlobalContext();

  const deliveryHours = getTodayDeliveryHours();
  const openingHours = getTodayOpeningHours();

  useEffect(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, []);

  return (
    <section className="DeliveryPage">
      <Sidebar />
      <header className="title">
        <h1>obszary dostawy</h1>
        <h2>gdzie dostarczamy</h2>
      </header>
      <div className="info">
        <p>{info1}</p>
        <p>{info2}</p>
      </div>
      <div>
        <MyMapComponent
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          openingHours={deliveryHours}
          deliveryHours={openingHours}
        />
      </div>
      <Footer />
    </section>
  );
};

export default DeliveryPage;
