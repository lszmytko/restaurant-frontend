import React from "react";
import styled from "styled-components";

const FilterPres = ({
  value,
  min,
  max,
  setPriceCriteria,
  cuisines,
  setCuisineCriteria,
  setFriedCriteria,
  yesRadio,
  noRadio,
  calculatedWidthStyle,
}) => {
  return (
    <Wrapper>
      <div value={value} min={min} max={max} className="Filter section-center">
        <form action="" className="filter-form">
          <div action="/" className="price-form">
            <div className="price-form-container">
              <label htmlFor="price" className="price-label">
                <p className="filter-title">price</p>
              </label>
              <h4>{value.toFixed(2)}</h4>
              <input
                type="range"
                max={max}
                min={min}
                id="price"
                step="0.1"
                className="rangeBar"
                value={value}
                onChange={(e) => setPriceCriteria(parseFloat(e.target.value))}
                style={calculatedWidthStyle}
              />
            </div>
          </div>

          {/* Filter cusiine */}

          <div className="filter-form-radio">
            <p className="filter-title">cuisine</p>
            <div className="filter-form-options">
              {cuisines.map((item, id) => {
                return (
                  <div className="filter-form-option" key={id}>
                    <label htmlFor={item} className="filter-radio-option">
                      {item}
                    </label>
                    <input
                      type="checkbox"
                      name={item}
                      id={item}
                      // checked={true}
                      onChange={(e) =>
                        setCuisineCriteria(e.target.checked, e.target.name)
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Filter if fried  */}

          <div className="filter-fried filter-form-radio">
            <p className="filter-title">fried?</p>
            <div className="filter-form-options">
              <div className="filter-form-option">
                <label htmlFor="yes">yes</label>
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  onChange={(e) => setFriedCriteria(e.target.checked, yesRadio)}
                  ref={yesRadio}
                />
              </div>
              <div className="filter-form-option">
                <label htmlFor="no">no</label>
                <input
                  type="checkbox"
                  name="no"
                  id="no"
                  onChange={(e) => setFriedCriteria(e.target.checked, noRadio)}
                  ref={noRadio}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // .rangeBar::after {
  //   width: } + "%";
  // }
`;

export default FilterPres;
