import React from "react";

const AddedItemModalPres = ({handleHideAddedModal}) => {
  return (
    <div className="addedItemModal">
      <div className="banner">
        <h2>Hej!</h2>
        <h3>Dodane do zamówienia</h3>
        <button className="btn" onClick={handleHideAddedModal}>
          ok
        </button>
      </div>
    </div>
  );
};

export default AddedItemModalPres;
