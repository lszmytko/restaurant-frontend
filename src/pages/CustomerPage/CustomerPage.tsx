import React, { useState, useEffect } from "react";

import { useGlobalContext } from "../../context/context";
import { Sidebar } from "../../components";
import {
  CustomerData,
  CustomerHistory,
  LoginModal,
  LogOut
} from "../../components";
// import CustomerData from "../../components/CustomerData";
// import CustomerHistory from "../../components/CustomerHistory";
// import LoginModal from "../../components/LoginModal";
// import LogOut from "../../components/LogOut/LogOut";

const CustomerPage = () => {
  const { userInfo } = useGlobalContext();
  const [loading, setLoading] = useState(false);

  const { setIsSidebarOpen, isSidebarOpen } = useGlobalContext();

  useEffect(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, []);

  return (
    <div className="CustomerPage">
      <Sidebar />
      {userInfo.isLogged && <LogOut />}
      <div className="container">
        <h1>Twoje konto</h1>
        {userInfo.isLogged ? (
          <section className="userInfoContainer">
            <CustomerData setLoading={setLoading} loading={loading} />
            <CustomerHistory />
          </section>
        ) : (
          <LoginModal />
        )}
      </div>
    </div>
  );
};

export default CustomerPage;
