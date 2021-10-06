import styled from "styled-components";
import restaurant from "../../images/restaurant.jpg";
import React from "react";

const About = () => {
  return (
    <Wrapper className="section">
      <section className="about section-center">
        <img src={restaurant} alt="" className="restaurant" />
        <article className="description">
          <div className="title">
            <h2 className="title_h2">Our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus, quidem error quis aliquid debitis labore iure
            doloremque et magnam beatae vero minima omnis voluptatibus aliquam?
            Velit rem soluta iste enim illum officiis assumenda quisquam, nulla
            eveniet iusto{" "}
          </p>
        </article>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .about {
    display: block;
    text-align: center;
  }
  .restaurant {
    border-radius: var(--radius);
    width: 100%;
    margin: 2rem auto;
    min-width: 20rem;
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  .description {
    padding: 2rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    width: 100%;
    margin: 0 auto;
  }

  .description p {
    padding-top: 2rem;
    letter-spacing: 0.2rem;
  }

  .restaurant {
    height: 20rem;
    object-fit: cover;
  }

  @media (min-width: 992px) {
    .about {
      display: flex;
      justify-content: space-between;
      align-content: stretch;
    }
    .underline {
      margin: 2px auto 5px;
    }
    .restaurant {
      width: calc(50% - 5rem);
      margin: auto;
      margin-right: 5rem;
      min-width: 30rem;
    }

    .description {
      width: calc(50% - 5rem);
    }

    .description p {
      font-size: 0.9rem;
      align-content: stretch;
    }
  }
`;

export default About;
