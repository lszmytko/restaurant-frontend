import React, { useState, useEffect } from "react";
import axios from "axios";

import { useGlobalContext } from "../../context/context";
import CustomerDataPres from "./CustomerDataPres";

const CustomerData = ({ setLoading, loading }) => {
  // Getting the user data
  const { userInfo } = useGlobalContext();

  const [data, setData] = useState({
    flatNumber: "",
    phone: "",
    name: "",
    lastName: "",
    street: "",
    userId: ""
  });
  const [error, setError] = useState({
    message: ""
  });
  const [isDataChanged, setIsDataChanged] = useState(false);

  useEffect(() => {
    const { flatNumber, phone, name, lastName, street, userId } = userInfo;
    setData({
      flatNumber,
      lastName,
      userId,
      street,
      name,
      phone
    });
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    // Check if all fields filled
    if (
      !data.lastName.length ||
      !data.flatNumber.length ||
      !data.street.length ||
      !data.name.length ||
      !data.phone.length
    ) {
      setError({
        message: "Wypełnij wszystkie pola!"
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_ADDRESS}/update/${data.userId}`,
        {
          flatNumber: data.flatNumber,
          phone: data.phone,
          name: data.name,
          lastName: data.lastName,
          street: data.street
        }
      );

      setLoading(false);
      setIsDataChanged(true);
    } catch (error) {
      setError({
        message: "Coś poszło nie tak..."
      });
      setLoading(false);
    }
    setLoading(false);
  };

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
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
      data={data}
      handleDataChange={handleDataChange}
      error={error}
      handleUpdate={handleUpdate}
      loading={loading}
      isDataChanged={isDataChanged}
    />
  );
};

export default CustomerData;
