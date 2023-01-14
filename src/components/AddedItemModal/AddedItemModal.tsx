import React from "react";

import { useGlobalContext } from "../../context/context";

const AddedItemModal = () => {
  const { setIsAddedModalOpen } = useGlobalContext();

  return (
    <div className="addedItemModal">
      <div className="banner">
        <h2>Hej!</h2>
        <h3>Dodane do zamówienia</h3>
        <button className="btn" onClick={() => setIsAddedModalOpen(false)}>
          ok
        </button>
      </div>
    </div>
  );
};

export default AddedItemModal;
