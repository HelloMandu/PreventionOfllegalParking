import root, { console } from "window-or-global";
import CarIcon from "../../assets/images/car_icon.png";

import { getCCTV, getParkingLot, getChildren } from "../../api/busan";

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
    parkLocation.parkingLot.forEach((location) => {
        var circle = new kakao.maps.Circle({
            center: new kakao.maps.LatLng(location.Latitude, location.Longitude), // 원의 중심좌표 입니다
            radius: 50, // 미터 단위의 원의 반지름입니다
            strokeWeight: 5, // 선의 두께입니다
            strokeColor: "red", // 선의 색깔입니다
            strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: "dashed", // 선의 스타일 입니다
            fillColor: "#CFE7FF", // 채우기 색깔입니다
            fillOpacity: 0.7, // 채우기 불투명도 입니다
        });
    
        // 지도에 원을 표시합니다
        circle.setMap(map);
    })

};

export const drawBusan = async (location) => {
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

    const mapTypeControl = new kakao.maps.MapTypeControl();
    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.RIGHT);
    // 지도가 확대 또는 축소되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    kakao.maps.event.addListener(map, "zoom_changed", () => {});


    const cctv = await getCCTV();

    const parkingLot = await getParkingLot();

    const children = await getChildren();


    let imageBusan = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    for (let i = 0; i < cctv.data.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        const imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        const markerImage = new kakao.maps.MarkerImage(imageBusan, imageSize);

        const markerPosition = new kakao.maps.LatLng(
            cctv.data[i].LATITUDE,
            cctv.data[i].LONGITUDE
        ); // 마커가 표시될 위치입니다
        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: markerPosition, // 마커를 표시할 위치
            title: "cctv", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
        });
    }

    // for (let i = 0; i < children.data.length; i++) {
    //     // 마커 이미지의 이미지 크기 입니다
    //     const imageSize = new kakao.maps.Size(24, 35);

    //     // 마커 이미지를 생성합니다
    //     const markerImage = new kakao.maps.MarkerImage(imageBusan, imageSize);

    //     const markerPosition = new kakao.maps.LatLng(
    //         children.data[i].LATITUDE,
    //         children.data[i].LONGITUDE
    //     ); // 마커가 표시될 위치입니다
    //     // 마커를 생성합니다
    //     const marker = new kakao.maps.Marker({
    //         map: map, // 마커를 표시할 지도
    //         position: markerPosition, // 마커를 표시할 위치
    //         title: "children", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    //         image: markerImage, // 마커 이미지
    //     });
    // }
    // for (let i = 0; i < parkingLot.data.length; i++) {
    //     // 마커 이미지의 이미지 크기 입니다
    //     const imageSize = new kakao.maps.Size(24, 35);

    //     // 마커 이미지를 생성합니다
    //     const markerImage = new kakao.maps.MarkerImage(imageBusan, imageSize);

    //     const markerPosition = new kakao.maps.LatLng(
    //         parkingLot.data[i].LATITUDE,
    //         parkingLot.data[i].LONGITUDE
    //     ); // 마커가 표시될 위치입니다
    //     // 마커를 생성합니다
    //     const marker = new kakao.maps.Marker({
    //         map: map, // 마커를 표시할 지도
    //         position: markerPosition, // 마커를 표시할 위치
    //         title: "parkingLot", // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    //         image: markerImage, // 마커 이미지
    //     });
    // }
};


