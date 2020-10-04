import React from 'react';
import NavItem from './NavItem';
import {Link} from 'react-router-dom';

const MapNav = () =>{
    const mapNavList = [
        {
            id: 1,
            url: "all",
            explain: "전체",
        },
        {
            id: 2,
            url: "fire",
            explain: "소화전",
        },
        {
            id: 3,
            url: "busstation",
            explain: "버스정류장",
        },
        {
            id: 4,
            url: "children",
            explain: "어린이보호구역",
        },
        {
            id: 5,
            url: "crosswalk",
            explain: "횡단보도",
        },
    ]
    return(
        <div className="map-nav">
            <div className="map-nav_title">
                <Link to='/'><h2>Safe<br/>Parking</h2></Link>
            </div>
            <ul className="map-nav__list">
            {mapNavList.map(({ id, url, explain }) => (
                    <li key={id}>
                        <NavItem url={`location/${url}`} explain={explain}></NavItem>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MapNav;