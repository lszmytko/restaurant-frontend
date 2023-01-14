import React from "react";
import styled from "styled-components";

import FilterCuisine from "./components/FilterCuisine";
import FilterIfFried from "./components/FilterIfFried";
import FilterPrice from "./components/FilterPrice";
import { useFilterCriteria } from "./useFilterCriteria";

const Filter = () => {
  const {
    value,
    changePriceCriteria,
    changeCuisineCriteria,
    changeFriedCriteria,
    yesRadio,
    noRadio,
    cuisines
  } = useFilterCriteria();
  return (
    <Wrapper>
      <div className="Filter section-center">
        <form action="" className="filter-form">
          <FilterPrice
            value={value}
            changePriceCriteria={changePriceCriteria}
          />
          <FilterCuisine
            changeCuisineCriteria={changeCuisineCriteria}
            cuisines={cuisines}
          />
          <FilterIfFried
            yesRadio={yesRadio}
            noRadio={noRadio}
            changeFriedCriteria={changeFriedCriteria}
          />
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Filter;
