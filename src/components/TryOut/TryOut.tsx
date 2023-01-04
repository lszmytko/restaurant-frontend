import { Link } from "react-router-dom";

import React from "react";

const TryOut = () => {
  return (
    <section className="TryOut section">
      <h2>wanna try?</h2>
      <button className="order">
        <Link to="/menu">order now</Link>
      </button>
    </section>
  );
};

export default TryOut;
