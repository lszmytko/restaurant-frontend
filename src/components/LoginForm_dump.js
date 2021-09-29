import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Login = () => {
  return (
      <form>
          <div className="info">
              <label htmlFor="email"></label>
              <input type="text" name="email" id="email" placeholder="email"/>
              <label htmlFor="password"></label>
              <input type="text" name="password" id="password" placeholder="password"/>
          </div>
      </form>
  )
}



const LoginForm_dump = () => {
  
  // const checkIfLogged = (id)=>{
  //   const response = await axios.post("")
  // }

    
  // const handleRegister = async (e) => {
  //   e.preventDefault()
  //   console.log("działa");
  //   const response = await axios.post("http://localhost:4000/users/register", {
  //     name, lastName, email, street, nrDomu, password
  //   });
  //   console.log(response);

  // };
  return (
    <Wrapper>
      <h3>Nie jesteś zalogowany</h3>
      
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--main-darker);
  text-align: center;
  padding: 1rem;
  color: white;
  border-radius: var(--radius);

  h3 {
    color: white;
  }
`;

export default LoginForm_dump;
