import { useEffect } from "react";
import { useSelector } from "react-redux";
import root, { console } from "window-or-global";
import CarIcon from "../../images/car_icon.png";

const { kakao } = root;

export const drawMap = (location) => {
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

    const markerPosition = new kakao.maps.LatLng(
        location.latitude,
        location.longitude
    ); // 마커가 표시될 위치입니다
    const options = {
        center: new kakao.maps.LatLng(
            locationButton.dataset.latitude,
            locationButton.dataset.longitude
        ),
        level: 2,
    };
    const map = new kakao.maps.Map(container, options); // 지도생성
    var marker = new kakao.maps.Marker({
        position: markerPosition, // 지도 중심좌표에 마커를 생성합니다
        image: markerImage,
    });
    marker.setMap(map); // 마커생성+
    kakao.maps.event.addListener(map, "center_changed", () => {
        let latlng = map.getCenter(); // 지도의 중심좌표를 얻어옵니다
        marker.setPosition(latlng); // 마커 위치를 중심 위치로 옮깁니다
        locationButton.dataset.latitude = latlng.getLat();
        locationButton.dataset.longitude = latlng.getLng();
    });

    // 지도가 확대 또는 축소되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);
    kakao.maps.event.addListener(map, "zoom_changed", () => {});
};

export const drawLocation = (location, parkLocation) => {

    const container = document.getElementById("kakaomap");
    const options = {
        center: new kakao.maps.LatLng(location.latitude, location.longitude),
        level: 2,
    };
    const map = new kakao.maps.Map(container, options); // 지도생성
    var circle = new kakao.maps.Circle({
        center: new kakao.maps.LatLng(location.latitude, location.longitude), // 원의 중심좌표 입니다
        radius: 50, // 미터 단위의 원의 반지름입니다
        strokeWeight: 5, // 선의 두께입니다
        strokeColor: "#75B8FA", // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "dashed", // 선의 스타일 입니다
        fillColor: "#CFE7FF", // 채우기 색깔입니다
        fillOpacity: 0.7, // 채우기 불투명도 입니다
    });

    // 지도에 원을 표시합니다
    circle.setMap(map);
};

