import { dishes } from "../../data/data";
import { useGlobalContext } from "../../context/context.js";
import React, { useEffect, useState, useRef } from "react";
import FilterPres from "./FilterPres";

const Filter = () => {

  // Getting array of prices
  const prices = dishes
    .map((dish) => {
      return dish.price;
    })
    .sort();

  // Getting array of cuisines
  const cuisines = Array.from(
    new Set(
      dishes.map((dish) => {
        return dish.cuisine;
      })
    )
  );

  const min = prices[0];
  const max = prices[prices.length - 1];
  // STATES
  const [value, setValue] = useState(0);
  const [checkedCuisines, setCheckedCuisines] = useState([]);

  // END OF STATES

  const { filterCriteria, setFilterCriteria } = useGlobalContext();
  const yesRadio = useRef(null);
  const noRadio = useRef(null);

  const setFriedCriteria = (data, radio) => {
    if (radio === yesRadio) {
      noRadio.current.checked = false;
    } else if (radio === noRadio) {
      yesRadio.current.checked = false;
    }

    if (data === true && radio === yesRadio) {
      setFilterCriteria((prevCriteria) => {
        return { ...prevCriteria, fried: true };
      });
    } else if (data === true && radio === noRadio) {
      setFilterCriteria((prevCriteria) => {
        return { ...prevCriteria, fried: false };
      });
    } else setFilterCriteria({ ...filterCriteria, fried: "all" });
  };

  const setCuisineCriteria = (checked, radioValue) => {
    console.log(checked);
    let newCuisines = filterCriteria.cuisine;
    if (!checked) {
      newCuisines = newCuisines.filter((item) => {
        return item !== radioValue;
      });
      console.log(newCuisines);
    } else newCuisines.push(radioValue);

    setFilterCriteria({
      ...filterCriteria,
      cuisine: [...new Set(newCuisines)],
    });
  };

  const setPriceCriteria = (maxPrice) => {
    setValue(maxPrice);
    setFilterCriteria({ ...filterCriteria, price: maxPrice });
  };

  const toggleCuisineRadio = (e) => {
    console.log("działa sprawdzenie");
    if (filterCriteria.cuisine.includes(e.target.name)) {
      return false;
    } else {
      return true;
    }
  };

  // STARTING USEFFECT

  useEffect(() => {
    setValue((max - min) / 2 + min);
    setFilterCriteria({
      price: max,
      cuisine: [],
      fried: "all",
    });
    setCheckedCuisines(() => {
      return cuisines.map((cuisine) => {
        return cuisine;
      });
    });
  }, []);

  // END OF STARTING USEFFECT


  // Rangebar:after width
  const calculatedWidth = ((value - min) / (max-min)) * 100 + "%";
  const calculatedWidthStyle = {"--width" : calculatedWidth}

  return (
    <FilterPres
      value={value}
      min={min}
      max={max}
      calculatedWidthStyle={calculatedWidthStyle}
      setPriceCriteria={setPriceCriteria}
      cuisines={cuisines}
      setCuisineCriteria={setCuisineCriteria}
      setFriedCriteria={setFriedCriteria}
      yesRadio={yesRadio}
      noRadio={noRadio}
      style={calculatedWidthStyle}
    />
  );
};

export default Filter;
