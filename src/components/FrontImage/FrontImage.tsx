import React from "react";

import { useShowSlide } from "./useShowSlide";

const FrontImage = () => {
  const { slides, setActiveSlide, activeSlide } = useShowSlide();
  return (
    <section className="FrontImage">
      <section
        className="photo"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slides[activeSlide]}) no-repeat center/cover fixed`
        }}
      >
        <h1>Witajcie smakosze...</h1>
        <h2>
          <span>Gotujemy tak,</span>
          <br />
          <span>jak chcielibyśmy jadać</span>
        </h2>
        <div className="slides">
          {slides.map((slide, index) => {
            return (
              <div
                className={`${
                  activeSlide === index ? "slider activeSlider" : "slider"
                }`}
                key={index}
                onClick={() => setActiveSlide(index)}
              ></div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default FrontImage;
