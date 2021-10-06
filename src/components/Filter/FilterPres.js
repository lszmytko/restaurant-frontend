import React from "react";
import styled from "styled-components";

const FilterPres = ({value, min, max, setPriceCriteria, cuisines, setCuisineCriteria, setFriedCriteria, yesRadio, noRadio}) => {
  return (
    <Wrapper value={value} min={min} max={max} className="section-center">
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
            />
          </div>
        </div>

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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .filter-form {
    margin-bottom: 2rem;
    width: 100%;
  }
  .price-form {
    min-width: 15rem;
    text-align: center;
    margin-right: 2rem;
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
  }

  .price-form-container {
    min-width: 20rem;
  }

  .price-form label {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  .price-form h4 {
    margin-bottom: 1rem;
  }

  .rangeBar {
    -webkit-appearance: none;
    background: white;
    width: 100%;
    height: 1rem;
    position: relative;
    outline: none;
    ${"" /* border: 2px solid black; */}
    border-radius: var(--radius);
  }

  .rangeBar::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ value, min, max }) =>
      ((value - min) / (max - min)) * 100 + "%"};
    height: 100%;
    background: var(--clr-primary-5);
    border-radius: var(--radius);
  }

  .rangeBar::-webkit-slider-thumb {
    -webkit-appearance: none;
    apperance: none;
    width: 1.5rem;
    height: 1.5rem;
    background: var(--clr-primary-2);
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    z-index: 3;
  }

  .rangeBar::-moz-range-thumb {
    width: 1.5rem;
    height: 1.5rem;
    background: var(--clr-primary-2);
    border-radius: 50%;
    cursor: pointer;
  }

  .price-label {
    display: block;
  }

  .filter-form-radio {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .filter-form-options {
    display: flex;
    ${"" /* align-items: flex-end; */}
    justify-content: center;
  }

  .filter-form-option {
    padding: 0 1rem;
  }

  .filter-form-option label {
    text-transform: capitalize;
    font-size: 1rem;
    margin-right: 0.5rem;
    cursor: pointer;
  }

  input[type="checkbox"] {
    appearance: none;
    webkit-appearance: none;
    width: 1rem;
    height: 1rem;
    ${"" /* background: var(--clr-primary-9); */}
    ${"" /* margin-right: 1rem; */}
    border: 2px solid var(--clr-primary-2);
    cursor: pointer;
  }

  .filter-form-option input:checked {
    background: var(--clr-primary-5);
  }

  .filter-title {
    text-transform: capitalize;
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }

  @media screen and (min-width: 992px) {
    .filter-form {
      display: flex;
      justify-content: center;
    }

    .price-form {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 0;
    }

    .price-form label {
      font-size: 1.25rem;
    }

    .filter-form-radio {
      margin-right: 2rem;
      margin-bottom: 0;
    }

    .filter-title {
      font-size: 1.25rem;
    }

    .filter-form-option label {
      font-size: 1.25rem;
    }
  }
`;

export default FilterPres;