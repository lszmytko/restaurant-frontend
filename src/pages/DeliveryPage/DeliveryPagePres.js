import React from "react";
import { Footer, Sidebar } from "../../components";
import MyMapComponent from "../../components/MyMapComponent/MyMapComponent";

const DeliveryPagePres = ({ getTodayOpeningHours, getTodayDeliveryHours }) => {
  return (
    <section className="DeliveryPage">
      <Sidebar />
      <header className="title">
        <h1>obszary dostawy</h1>
        <h2>gdzie dostarczamy</h2>
      </header>
      <div className="info">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim esse
          laboriosam aperiam voluptate rem est earum fugiat, vero sint! Est
          optio voluptas placeat, corrupti minus voluptatem deleniti aspernatur
          recusandae perferendis earum adipisci non sapiente repudiandae
          reiciendis nihil nostrum. Vel, quo?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
          tenetur magni aliquam? Magnam nobis optio debitis fugit iure qui
          dolore beatae, animi cumque iusto nemo necessitatibus culpa mollitia
          incidunt ducimus voluptatum, maiores excepturi, aliquam cupiditate.
          Fuga officiis necessitatibus labore ut aspernatur, veniam quis maxime
          possimus! Assumenda voluptate aperiam totam sint omnis blanditiis
          eligendi numquam provident! Nemo delectus sed culpa nobis quisquam
          nulla vel repudiandae ex. Deserunt accusantium, ipsa id velit tempora
          vero nihil nobis minus labore quibusdam nostrum voluptate ratione!
        </p>
      </div>
      <div>
        <MyMapComponent
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          openingHours={getTodayOpeningHours()}
          deliveryHours={getTodayDeliveryHours()}
        />
      </div>
      <Footer />
    </section>
  );
};

export default DeliveryPagePres;
