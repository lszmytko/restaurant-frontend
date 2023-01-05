import React, { useEffect, useState, useRef } from "react";

const options = {
  rootMargin: "-100px 0px 0px 0px"
};

export const useObserver = () => {
  const [visible, setVisible] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    const elementObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    }, options);
    if (element.current) {
      elementObserver.observe(element.current);
    }
  });

  return { visible, element };
};
