import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../modules/location";
import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CarIcon from "../../images/car_icon.svg";

const { kakao } = window;

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

const drawMap = (location) => {
    const container = document.getElementById("kakaomap");
    const locationButton = document.getElementById("location-button");
    const imageSrc = {CarIcon};
    const imageSize = new kakao.maps.Size(32, 32); // 마커이미지의 크기입니다
    const imageOption = { offset: new kakao.maps.Point(16, 16) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
    ); // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
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
    kakao.maps.event.addListener(map, "click", (mouseEvent) => {
        var latlng = mouseEvent.latLng; // 클릭한 위도, 경도 정보를 가져옵니다
        marker.setPosition(latlng); // 마커 위치를 클릭한 위치로 옮깁니다
        locationButton.dataset.latitude = latlng.getLat();
        locationButton.dataset.longitude = latlng.getLng();
    });
    kakao.maps.event.addListener(map, "center_changed", () => {
        var level = map.getLevel(); // 지도의  레벨을 얻어옵니다
        var latlng = map.getCenter(); // 지도의 중심좌표를 얻어옵니다
        marker.setPosition(latlng); // 마커 위치를 중심 위치로 옮깁니다
        locationButton.dataset.latitude = latlng.getLat();
        locationButton.dataset.longitude = latlng.getLng();
    });
};

const KakaoMap = ({ onMap, setOnMap, location }) => {
    const buttonStyle = buttonStyles();
    const dispatch = useDispatch();
    let carLocation;
    useEffect(() => {
        const locationButton = document.getElementById("location-button");
        carLocation = {
            latitude: locationButton.dataset.latitude,
            longitude: locationButton.dataset.longitude
        }
        drawMap(carLocation);
    });
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                dispatch(setLocation(location));
            });
        }
    }, [])
    return (
        <div
            id="kakaomap"
            style={{
                display: onMap ? "block" : "none",
                pointerEvents: onMap ? "auto" : "none",
            }}
        >
            <ButtonBase
                id="location-button"
                className={buttonStyle.root}
                data-latitude={location.latitude}
                data-longitude={location.longitude}
                onClick={() => {
                    dispatch(setLocation(carLocation))
                    setOnMap(!onMap)
                }}
            >
                현재위치로 지정
            </ButtonBase>
        </div>
    );
};

export default KakaoMap;
