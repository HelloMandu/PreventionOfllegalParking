import root from "window-or-global";

import CarIcon from "../../assets/images/car_icon.png";
import CCTV from "../../assets/images/cctv-save.png";
import Children from "../../assets/images/children-save.png";
import ParkingLot from "../../assets/images/parking-save.png";

const { kakao } = root;

export const drawMap = (
    location,
    setLocation,
    { cctv, children, parkinglot }
) => {
    const container = document.getElementById("kakaomap");
    const markerImage = new kakao.maps.MarkerImage(
        CarIcon,
        new kakao.maps.Size(48, 48), // 마커이미지의 크기입니다
        { offset: new kakao.maps.Point(24, 24) } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    ); // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다

    const options = {
        center: new kakao.maps.LatLng(location.latitude, location.longitude),
        level: 3,
    };

    const markerPosition = new kakao.maps.LatLng(
        location.latitude,
        location.longitude
    ); // 마커가 표시될 위치입니다

    const map = new kakao.maps.Map(container, options); // 지도생성
    const marker = new kakao.maps.Marker({
        position: markerPosition, // 지도 중심좌표에 마커를 생성합니다
        image: markerImage,
    });
    marker.setMap(map); // 마커생성+
    kakao.maps.event.addListener(map, "click", (mouseEvent) => {
        const latlng = mouseEvent.latLng;
        marker.setPosition(latlng);
        setLocation({ latitude: latlng.Ha, longitude: latlng.Ga });
    });

    // 지도가 확대 또는 축소되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);
    kakao.maps.event.addListener(map, "zoom_changed", () =>{});

    const cctvImage = CCTV;
    // const cctvImage = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    cctv.forEach((location) => {
        const imageSize = new kakao.maps.Size(24, 35);
        // 마커 이미지를 생성합니다
        const markerImage = new kakao.maps.MarkerImage(cctvImage, imageSize);

        const markerPosition = new kakao.maps.LatLng(
            location.LATITUDE,
            location.LONGITUDE
        ); // 마커가 표시될 위치입니다
        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: markerPosition, // 마커를 표시할 위치
            title: "cctv", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
        });
    });

    const childrenImage = Children;
    children.forEach((location) => {
        const imageSize = new kakao.maps.Size(24, 35);
        // 마커 이미지를 생성합니다
        const markerImage = new kakao.maps.MarkerImage(
            childrenImage,
            imageSize
        );

        const markerPosition = new kakao.maps.LatLng(
            location.LATITUDE,
            location.LONGITUDE
        ); // 마커가 표시될 위치입니다
        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: markerPosition, // 마커를 표시할 위치
            title: "children", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
        });
    });

    const parkingImage = ParkingLot;
    parkinglot.forEach((location) => {
        const imageSize = new kakao.maps.Size(24, 35);
        // 마커 이미지를 생성합니다
        const markerImage = new kakao.maps.MarkerImage(parkingImage, imageSize);

        const markerPosition = new kakao.maps.LatLng(
            location.LATITUDE,
            location.LONGITUDE
        ); // 마커가 표시될 위치입니다
        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: markerPosition, // 마커를 표시할 위치
            title: "parkingLot", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
        });
    });
};
