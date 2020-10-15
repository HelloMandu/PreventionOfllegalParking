import React from 'react';
import MapNav from '../components/MapNav';
import KakaoMap from '../components/Map/Map';
import '../SCSS/MapPage.scss'

const MapPage = () =>{
    return(
        <div className="map-page">
            <MapNav></MapNav>
            <KakaoMap></KakaoMap>
        </div>
    )
}

export default MapPage;