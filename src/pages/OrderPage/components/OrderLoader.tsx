import React from "react";

import { Sidebar } from "../../../components";
import Loader from "react-loader-spinner";

export const OrderLoader = () => (
  <section className="OrderPage">
    <Sidebar />
    <div className="finalInfoShown-wrapper">
      <Loader
        type="Puff"
        color={"var(--clr-primary-3)"}
        height={300}
        width={300}
        timeout={3000} //3 secs
      />
    </div>
  </section>
);
