import React, { useEffect } from "react";
import root from "window-or-global";
import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CarIcon from "../../images/car_icon.png";

import './Map.scss';

const { kakao } = root;

const buttonStyles = makeStyles({
    root: {
        position: "absolute",
        bottom: "0",
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

const drawMap = () => {
    const container = document.getElementById("kakaomap");
    const locationButton = document.getElementById("location-button");
    const imageSrc = CarIcon;
    const imageSize = new kakao.maps.Size(48, 48); // 마커이미지의 크기입니다
    const imageOption = { offset: new kakao.maps.Point(24, 24) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
    ); // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const location = {
        latitude: locationButton.dataset.latitude,
        longitude: locationButton.dataset.longitude,
    };
    const markerPosition = new kakao.maps.LatLng(
        location.latitude,
        location.longitude
    ); // 마커가 표시될 위치입니다
    const options = {
        center: new kakao.maps.LatLng(location.latitude, location.longitude),
        level: 3,
    };
    const map = new kakao.maps.Map(container, options); // 지도생성
    var marker = new kakao.maps.Marker({
        position: markerPosition, // 지도 중심좌표에 마커를 생성합니다
        image: markerImage,
    });
    marker.setMap(map); // 마커생성+
    kakao.maps.event.addListener(map, "center_changed", () => {
        var latlng = map.getCenter(); // 지도의 중심좌표를 얻어옵니다
        marker.setPosition(latlng); // 마커 위치를 중심 위치로 옮깁니다
        locationButton.dataset.latitude = latlng.getLat();
        locationButton.dataset.longitude = latlng.getLng();
    });
};

const Map = ({ location, setLocation }) => {
    const buttonStyle = buttonStyles();
    useEffect(() => {
        drawMap();
    }, [location]);
    return (
        <div id="kakaomap">
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

export default Map;
