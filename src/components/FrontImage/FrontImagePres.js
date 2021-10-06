import React from "react";
import styled from "styled-components";


const FrontImagePres = ({ activeSlide, setActiveSlide, slides }) => {
  return (
    <Wrapper>
      <section
        className="photo"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slides[activeSlide]}) no-repeat center/cover fixed`,
        }}
      >
        <h1>Witajcie smakosze...</h1>
        <h2>
          <span>Gotujemy tak,</span>
          <br />
          <span>jak chcielibyśmy jadać</span>
        </h2>
        <div className="slides">
          {slides.map((slide, index) => {
            return (
              <div
                className={`${
                  activeSlide === index ? "slider activeSlider" : "slider"
                }`}
                key={index}
                onClick={() => setActiveSlide(index)}
              ></div>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 100px;

  .photo {
    height: calc(100vh - 100px);
    position: relative;
  }

  .photo img {
    opacity: 0.5;
    object-fit: cover;
    height: 100%;
  }

  .photo h1,
  .photo h2 {
    text-align: center;
  }

  .photo h1 {
    padding: 20vh 0 2rem;
  }

  .photo h2 {
    line-height: 1.5;
    margin-bottom: 2rem;
  }

  .slides {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 5%;
    display: flex;
    background: transparent;
    justify-content: center;
  }

  .slider {
    height: 2rem;
    width: 2rem;
    border: 3px solid white;
    margin: 0 1rem;
    cursor: pointer;
  }

  .activeSlider {
    background: var(--clr-primary-3);
  }

  @media screen and (min-width: 992px) {
    .slider {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export default FrontImagePres;
