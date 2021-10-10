import axios from "axios";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/context";
import CustomerDataPres from "./CustomerDataPres";

const CustomerData = ({ setLoading, loading }) => {
  // Getting the user data
  const { userInfo } = useGlobalContext();

  const [flatNumber, setFlatNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState({
    message: "",
  });
  const [isDataChanged, setIsDataChanged] = useState(false);

  useEffect(() => {
    const { flatNumber, phone, name, lastName, street, id } = userInfo;
    setLastName(lastName);
    setFlatNumber(flatNumber);
    setId(id);
    setStreet(street);
    setName(name);
    setPhone(phone);
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    // Check if all fields filled
    if (
      !lastName.length ||
      !flatNumber.length ||
      !street.length ||
      !name.length ||
      !phone.length
    ) {
      setError({
        message: "Wypełnij wszystkie pola!",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.put(
        `https://restaurant-site-api.herokuapp.com/update/${id}`,
        {
          flatNumber,
          phone,
          name,
          lastName,
          street,
        }
      );

      setLoading(false);
      setIsDataChanged(true);
    } catch (error) {
      setError({
        message: "Coś poszło nie tak...",
      });
      setLoading(false);
    }
    setLoading(false);
  };

  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFlatNumberChange = (e) => {
    setFlatNumber(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  // Cancelling data changed info
  useEffect(() => {
    if (isDataChanged) {
      setTimeout(() => {
        setIsDataChanged(false);
      }, 3000);
    }
  }, [isDataChanged]);

  return (
    <CustomerDataPres
      name={name}
      handleNameChange={handleNameChange}
      lastName={lastName}
      handleLastNameChange={handleLastNameChange}
      street={street}
      handleStreetChange={handleStreetChange}
      flatNumber={flatNumber}
      handleFlatNumberChange={handleFlatNumberChange}
      phone={phone}
      handlePhoneChange={handlePhoneChange}
      error={error}
      handleUpdate={handleUpdate}
      loading={loading}
      isDataChanged={isDataChanged}
    />
  );
};

export default CustomerData;
