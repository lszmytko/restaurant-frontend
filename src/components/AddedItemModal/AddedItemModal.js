import React from "react";
import { useGlobalContext } from "../../context/context";
import AddedItemModalPres from "./AddedItemModalPres";

const AddedItemModal = () => {
  const { setIsAddedModalOpen } = useGlobalContext();

  const handleHideAddedModal = () => {
    console.log("zadziałało");
    setIsAddedModalOpen(false);
  };

  return <AddedItemModalPres handleHideAddedModal={handleHideAddedModal} />;
};

export default AddedItemModal;
