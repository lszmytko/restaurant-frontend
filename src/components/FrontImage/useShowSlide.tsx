import { useEffect, useState } from "react";

import salad from "../../images/frontSlider/salad.jpg";
import bolognese from "../../images/frontSlider/bolognese.jpg";
import pierogi from "../../images/frontSlider/pierogi.jpg";

const slides = [salad, bolognese, pierogi];

export const useShowSlide = () => {
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

  return { slides, setActiveSlide, activeSlide };
};
