import { useEffect, useRef, useState } from "react";

import { useGlobalContext } from "../../context/context";
import { cuisines, minPrice, maxPrice } from "../../data/data";

export const useFilterCriteria = () => {
  const [value, setValue] = useState(0);

  const { filterCriteria, setFilterCriteria } = useGlobalContext();
  const yesRadio = useRef(null);
  const noRadio = useRef(null);

  const changeFriedCriteria = (isChecked: boolean, radio) => {
    if (radio === yesRadio) {
      noRadio.current.checked = false;
    } else if (radio === noRadio) {
      yesRadio.current.checked = false;
    }

    if (isChecked === true && radio === yesRadio) {
      setFilterCriteria((prevCriteria) => {
        return { ...prevCriteria, isFried: true };
      });
    } else if (isChecked === true && radio === noRadio) {
      setFilterCriteria((prevCriteria) => {
        return { ...prevCriteria, isFried: false };
      });
    } else setFilterCriteria({ ...filterCriteria, isFried: "all" });
  };

  const changeCuisineCriteria = (isChecked: boolean, radioValue: string) => {
    let newCuisines = filterCriteria.cuisine;
    if (!isChecked) {
      newCuisines = newCuisines.filter((item) => {
        return item !== radioValue;
      });
    } else newCuisines.push(radioValue);

    setFilterCriteria({
      ...filterCriteria,
      cuisine: [...new Set(newCuisines)]
    });
  };

  const changePriceCriteria = (maxPrice: number) => {
    setValue(maxPrice);
    setFilterCriteria({ ...filterCriteria, price: maxPrice });
  };

  useEffect(() => {
    setValue((maxPrice - minPrice) / 2 + minPrice);
    setFilterCriteria({
      price: maxPrice,
      cuisine: [],
      isFried: "all"
    });
  }, []);

  return {
    value,
    changePriceCriteria,
    changeCuisineCriteria,
    changeFriedCriteria,
    yesRadio,
    noRadio,
    cuisines
  };
};
