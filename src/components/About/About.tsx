import React from "react";

import restaurant from "src/images/restaurant.jpg";

const About = () => {
  return (
    <section className="About section-center">
      <img src={restaurant} alt="" className="restaurant" />
      <article className="description">
        <div className="title">
          <h2 className="title_h2">Our story</h2>
          <div className="underline"></div>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus,
          quidem error quis aliquid debitis labore iure doloremque et magnam
          beatae vero minima omnis voluptatibus aliquam? Velit rem soluta iste
          enim illum officiis assumenda quisquam, nulla eveniet iusto{" "}
        </p>
      </article>
    </section>
  );
};

export default About;
