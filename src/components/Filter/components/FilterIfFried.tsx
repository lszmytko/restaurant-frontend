import React from "react";

const FilterIfFried = ({ yesRadio, noRadio, changeFriedCriteria }) => {
  return (
    <div className="filter-fried filter-form-radio">
      <p className="filter-title">fried?</p>
      <div className="filter-form-options">
        <div className="filter-form-option">
          <label htmlFor="yes">yes</label>
          <input
            type="checkbox"
            name="yes"
            id="yes"
            onChange={(e) => changeFriedCriteria(e.target.checked, yesRadio)}
            ref={yesRadio}
          />
        </div>
        <div className="filter-form-option">
          <label htmlFor="no">no</label>
          <input
            type="checkbox"
            name="no"
            id="no"
            onChange={(e) => changeFriedCriteria(e.target.checked, noRadio)}
            ref={noRadio}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterIfFried;
