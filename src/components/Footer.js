import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer section-center">
        <div className="social-links">
          <a href="https://facebook.com">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://tiktok.com">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
        <h3>&copy; best restaurant 2021</h3>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: black;
  padding: 2rem 0;

  .social-links {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    font-size: 1rem;
  }

  .social-links a{
    margin-right: 2rem;
    transition: var(--transition);
    color: var(--clr-primary-5);
  }

  .social-links a:hover {
    color: var(--clr-primary-10);
  }

  h3 {
    text-align: center;
  }

  @media screen and (min-width: 768px){
      .social-links{
          font-size: 2rem;
      }
  }
`;

export default Footer;
