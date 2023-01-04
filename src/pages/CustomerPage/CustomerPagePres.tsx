import React from "react";
import { Sidebar } from "../../components";
import CustomerData from "../../components/CustomerData";
import CustomerHistory from "../../components/CustomerHistory/CustomerHistory";
import LoginModal from "../../components/LoginModal";
import LogOut from "../../components/LogOut/LogOut";

const CustomerPagePres = ({ userInfo, setLoading, loading }) => {
  return (
    <div className="CustomerPage">
      <Sidebar></Sidebar>
      {userInfo.isLogged && <LogOut />}
      <div className="container">
        <h1>Twoje konto</h1>
        {/* If he is not logged in show login modal */}
        {!userInfo.isLogged && <LoginModal />}
        {/* If he is logged in show users details form and history  */}
        {userInfo.isLogged && (
          <section className="userInfoContainer">
            <CustomerData setLoading={setLoading} loading={loading} />
            <CustomerHistory />
          </section>
        )}
      </div>
    </div>
  );
};

export default CustomerPagePres;
