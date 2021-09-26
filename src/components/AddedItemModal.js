import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from "../context/context.js";

const AddedItemModal = ()=>{
    const {setIsAddedModalOpen } = useGlobalContext();
    return (
        <Wrapper className="modal">
            <div className="banner">
                <h2>Hej!</h2>
                <h3>Dodane do zamówienia</h3>
                <button className="btn" onClick={()=>setIsAddedModalOpen(false)}>ok</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
  z-index: 11;

  .banner {
    text-align: center;
    padding: 2rem 3rem;
    background: white;
  }

  .banner h2,
  .banner h3 {
    margin-bottom: 1.5rem;
  }

  button {
    width: 60%;
    padding: 1rem 0;
  }

  @media screen and (min-width: 768px) {
    .banner {
      padding: 3rem 4rem;
    }
  }
`;

export default AddedItemModal;