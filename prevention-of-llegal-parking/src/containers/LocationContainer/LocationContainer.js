import React from "react";
import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Map from "../../components/Map/Map";

import "./LocationContainer.scss";

const buttonStyles = makeStyles({
    root: {
        position: "absolute",
        bottom: "0px",
        width: "100%",
        height: "48px",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        padding: "0 30px",
        zIndex: "1500",
    },
});

const LocationContainer = ({ location, setLocation }) => {
    const buttonStyle = buttonStyles();
    return (
        <div className="location-container">
            <Map location={location} setLocation={setLocation}></Map>
            <ButtonBase
                id="location-button"
                className={buttonStyle.root}
                data-latitude={location.latitude}
                data-longitude={location.longitude}
                onClick={(e) => {
                    setLocation({
                        latitude: e.target.dataset.latitude,
                        longitude: e.target.dataset.longitude,
                    });
                }}
            >
                현재위치로 지정
            </ButtonBase>
        </div>
    );
};

export default LocationContainer;
