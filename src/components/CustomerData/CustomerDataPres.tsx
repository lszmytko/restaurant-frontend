import React from "react";

import { Form } from "./components/Form";

const CustomerDataPres = ({
  data,
  handleDataChange,
  error,
  handleUpdate,
  loading,
  isDataChanged
}) => {
  return (
    <section className="CustomerData">
      <h3>Twoje dane</h3>
      <div className="form-container">
        <Form
          data={data}
          error={error}
          handleDataChange={handleDataChange}
          handleUpdate={handleUpdate}
        />
      </div>
      {loading ? <p className="loading">Loading...</p> : null}
      {isDataChanged ? (
        <p className="updated">Dane zostały zaktualizowane</p>
      ) : null}
    </section>
  );
};

export default CustomerDataPres;
