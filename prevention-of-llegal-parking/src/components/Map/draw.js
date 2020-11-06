import root from "window-or-global";

import CarIcon from "../../assets/images/car_icon.png";

import parkingMarker from "../../assets/images/parking-marker.svg";
import cctvMarker from "../../assets/images/cctv-marker.svg";
import childrenMarker from "../../assets/images/child-marker.svg";

const { kakao } = root;

export const drawMap = (
    location,
    setLocation,
    type,
    { cctv, children, parkinglot }
) => {
    const container = document.getElementById("kakaomap");
    const markerImage = new kakao.maps.MarkerImage(
        CarIcon,
        new kakao.maps.Size(35, 35), // 마커이미지의 크기입니다
        { offset: new kakao.maps.Point(24, 24) } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    ); // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다

    const options = {
        center: new kakao.maps.LatLng(location.latitude, location.longitude),
        level: 1,
    };

    const map = new kakao.maps.Map(container, options); // 지도생성

    const markerPosition = new kakao.maps.LatLng(
        location.latitude,
        location.longitude
    ); // 마커가 표시될 위치입니다
    const marker = new kakao.maps.Marker({
        position: markerPosition, // 지도 중심좌표에 마커를 생성합니다
        image: markerImage,
    });
    marker.setMap(map); // 마커생성

    kakao.maps.event.addListener(map, "click", (mouseEvent) => {
        const latlng = mouseEvent.latLng;
        marker.setPosition(latlng);
        setLocation({ latitude: latlng.Ja, longitude: latlng.Ia });
    });

    // 지도가 확대 또는 축소되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);
    kakao.maps.event.addListener(map, "zoom_changed", () => {});
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.BOTTOMLEFT);

    if (type === 1) {
        drawMarker(map, children, childrenMarker, 1);
        drawMarker(map, cctv, cctvMarker, 2);
        drawMarker(map, parkinglot, parkingMarker, 3);
    } else if (type === 2) {
        drawMarker(map, cctv, cctvMarker, 2);
    } else if (type === 3) {
        drawMarker(map, children, childrenMarker, 3);
    } else {
        drawMarker(map, parkinglot, parkingMarker, 4);
    }
};

const drawMarker = (map, locations, image) => {
    locations.forEach((location) => {
        const imageSize = new kakao.maps.Size(28, 38);
        // 마커 이미지를 생성합니다
        const markerImage = new kakao.maps.MarkerImage(image, imageSize);
        const markerPosition = new kakao.maps.LatLng(
            location.LATITUDE,
            location.LONGITUDE
        ); // 마커가 표시될 위치입니다
        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: markerPosition, // 마커를 표시할 위치
            image: markerImage, // 마커 이미지
            clickable: true,
        });
    });
};
