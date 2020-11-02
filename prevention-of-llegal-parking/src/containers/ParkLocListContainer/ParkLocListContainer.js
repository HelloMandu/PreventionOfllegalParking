import React from "react";
import { useSelector } from "react-redux";
import Swiper from "swiper";

import ParkLocList from "../../components/ParkLocList/ParkLocList";

const ParkLocListContainer = () => {
    const parkLocation = useSelector((state) => state.parkLocation);
    return (
        <div>
            <Swiper></Swiper>
            <Swiper></Swiper>
        </div>
    );
};
