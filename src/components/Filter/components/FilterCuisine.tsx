import React from "react";

const FilterCuisine = ({ changeCuisineCriteria, cuisines }) => {
  return (
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
                onChange={(e) =>
                  changeCuisineCriteria(e.target.checked, e.target.name)
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterCuisine;
