import React, { useEffect, useState } from "react";
import cn from "classnames";
// import "../SCSS/SportsCar.scss";
import CarBody from "../images/bugatti_body.png";
import CarTire from "../images/bugatti_tire.png";

const SportsCar = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            console.log("god");
        }, 2000);
    }, []);
    return (
        <div className="sportscar">
            <div className="bugatti">
                <img className="bugatti_body" src={CarBody} alt="" />
                <img className={cn("bugatti_tire", {loading})} src={CarTire} alt="" />
                <img className={cn("bugatti_tire2", {loading})} src={CarTire} alt="" />
            </div>
        </div>
    );
};

export default SportsCar;
