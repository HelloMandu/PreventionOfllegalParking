import React, { useState, useCallback } from "react";
import cn from "classnames";
// import "../SCSS/SportsCar.scss";
import CarBody from "../images/bugatti_body.png";
import CarTire from "../images/bugatti_tire.png";
import {getLocation} from '../api/location';
const SportsCar = () => {
    const [loading, setLoading] = useState(false);
    const canParking = useCallback(async () =>{
        setLoading(true);
        const result = await getLocation();
        console.log(result);
        setLoading(false);
    }, []);
    return (
        <div className="sportscar" onClick={canParking}>
            <div className="bugatti">
                <img className="bugatti_body" src={CarBody} alt="" />
                <img className={cn("bugatti_tire", {loading})} src={CarTire} alt="" />
                <img className={cn("bugatti_tire2", {loading})} src={CarTire} alt="" />
            </div>
        </div>
    );
};

export default SportsCar;
