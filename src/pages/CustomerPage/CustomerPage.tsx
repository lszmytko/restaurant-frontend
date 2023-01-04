import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/context";
import { useLogRegContext } from "../../context/logregcontext";
import CustomerPagePres from "./CustomerPagePres";

const CustomerPage = () => {
  // If to show login component to log for the users details
  const { showLoginModal } = useLogRegContext();
  // info about user - whether he is logged in , name etc.
  const { userInfo } = useGlobalContext();
  const [loading, setLoading] = useState(false);

  const { setIsSidebarOpen, isSidebarOpen } = useGlobalContext();

  useEffect(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, []);

  return <CustomerPagePres userInfo={userInfo} loading={loading} setLoading={setLoading}/>;
};

export default CustomerPage;
