import styled from "styled-components";
import { Sidebar } from "../components/index";
import React, { useState, useEffect } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { Footer } from "../components/index.js";
import { deliveryHours, openingHours } from "../data/data.js";
import { useGlobalContext } from "../context/context";

const getTodayDeliveryHours = () => {
  const today = new Date().getDay() - 1;
  return deliveryHours[today].hours;
};

const getTodayOpeningHours = () => {
  const today = new Date().getDay() - 1;
  return openingHours[today].hours;
};

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => {
    const [open, setOpen] = useState(false);
    const handleMarkerClick = () => {
      setOpen((prevOpen) => {
        return !prevOpen;
      });
    };
    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 52.1976, lng: 21.0424 }}
      >
        {props.isMarkerShown && (
          <Marker
            position={{ lat: 52.1976, lng: 21.0424 }}
            onClick={handleMarkerClick}
          >
            {open && (
              <InfoWindow
                // position={{ lat: 52.1976, lng: 21.0424 }}
                onCloseClick={handleMarkerClick}
              >
                <div>
                  <div className="hours">
                    <p className="hours-title">Godziny otwarcia:</p>
                    <p>{props.openingHours}</p>
                  </div>
                  <div className="hours">
                    <p className="hours-title">Godziny dostawy:</p>
                    <p>{props.deliveryHours}</p>
                  </div>
                </div>
              </InfoWindow>
            )}
          </Marker>
        )}
      </GoogleMap>
    );
  })
);

export default function DeliveryPage() {
  const { setIsSidebarOpen, isSidebarOpen } = useGlobalContext();

  useEffect(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, []);
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  .info {
    width: 60%;
    margin: 2rem auto;
  }

  .info p {
    line-height: 2;
    text-align: center;
  }
  ${
    "" /* .hours {
    margin-bottom: 0.5rem;
  } */
  }
  .hours p {
    margin-bottom: 0.25rem;
  }

  .hours-title {
    font-weight: bold;
  }
`;
