import React, { useEffect } from 'react';

const {kakao} = window;

const drawMap = () =>{
        let container = document.getElementById("MyMap");
        let options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };
        const map = new kakao.maps.Map(container, options);
    
        const center = new kakao.maps.Marker({
            position : map.getCenter()
        });
        center.setMap(map);
}

const KakaoMap = () =>{
    useEffect(()=>{
        drawMap();
    })
    return(
        <div id='MyMap' style={{
            width: '100vw', 
            height: '100vh'
        }}></div>
    )
}

export default KakaoMap;