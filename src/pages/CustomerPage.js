import React, { useState } from "react";
import styled from "styled-components";
import { LoginModal, Sidebar } from "../components";
import CustomerData from "../components/CustomerData";
import CustomerHistory from "../components/CustomerHistory";
import { useGlobalContext } from "../context/context";
import { useLogRegContext } from "../context/logregcontext";

const CustomerPage = () => {
  // If to show login component to log for the users details
  const { showLoginModal } = useLogRegContext();
  // info about user - whether he is logged in , name etc.
  const { userInfo } = useGlobalContext();
  const [loading, setLoading] = useState(false);

  return (
    <Wrapper>
      <Sidebar></Sidebar>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  .userInfoContainer {
    display: grid;
    row-gap: 2rem;
    min-width: 300px;
    max-width: 400px;
    background: var(--clr-primary-9);
    border-radius: 2rem;
    padding: 2rem 0;
  }

  h1 {
    text-align: center;
    padding: 2rem 0;
  }

  @media screen and (min-width: 768px) {
    .userInfoContainer {
      max-width: none;
      grid-template-columns: 1fr 1fr;
      margin: 0 auto;
      column-gap: 10rem;
      padding: 2rem;
    }
  }
`;

export default CustomerPage;
