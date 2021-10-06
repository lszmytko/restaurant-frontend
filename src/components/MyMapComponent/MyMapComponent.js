import React, {useState} from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

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

export default MyMapComponent
