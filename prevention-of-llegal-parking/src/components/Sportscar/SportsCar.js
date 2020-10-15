import React, { useState, useCallback } from "react";
import cn from "classnames";

import {getLocation} from '../../api/location';

import CarBody from "../../images/bugatti_body.png";
import CarTire from "../../images/bugatti_tire.png";
import "./SportsCar.scss";

const SportsCar = () => {
    const [loading, setLoading] = useState(false);
    const canParking = useCallback(() =>{
        const getParkInfo = async () =>{
            setLoading(true);
            const result = await getLocation();
            console.log(result);
            setLoading(false);
        }
        getParkInfo();
    }, []);
    return (
        <div className="sportscar">
            <div className="bugatti" onClick={canParking}>
                <img className="bugatti_body" src={CarBody} alt="" />
                <img className={cn("bugatti_tire", {loading})} src={CarTire} alt="" />
                <img className={cn("bugatti_tire2", {loading})} src={CarTire} alt="" />
            </div>
        </div>
    );
};

export default SportsCar;
