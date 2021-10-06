import styled from "styled-components";

import { useEffect, useState } from "react";
import React from "react";
import FrontImagePres from "./FrontImagePres";
import schabowy from "../../images/frontSlider/schabowy.jpg";
import bolognese from "../../images/frontSlider/bolognese.jpg";
import pierogi from "../../images/frontSlider/pierogi.jpg";

const slides = [schabowy, bolognese, pierogi];

const FrontImage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveSlide((prevSlide) => {
        if (prevSlide === slides.length - 1) {
          return 0;
        }
        return prevSlide + 1;
      });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [activeSlide]);

  return (
    <FrontImagePres
      slides={slides}
      activeSlide={activeSlide}
      setActiveSlide={setActiveSlide}
    />
  );
};

export default FrontImage;
