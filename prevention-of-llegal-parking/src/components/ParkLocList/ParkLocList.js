import React, { useRef } from "react";

import "./ParkLocList.scss";

const ParkLocItem = React.memo(({ title, address, feature, distance }) => {
    return (
        <div className="parkloc-item">
            <div className="parkloc-title">{title}</div>
            <div className="parkloc-content">
                <div className="parkloc-address">{address}</div>
                <div className="parkloc-detail">
                    <div className="parkloc-feature">{feature}</div>
                    <div className="parkloc-distance">{distance}</div>
                </div>
            </div>
        </div>
    );
});

const ParkLocList = ({ parkLocation, type }) => {
    const id = useRef(0);
    if(parkLocation === undefined){
        return<></>
    }
    if (type === "cctv") {
        return (
            <ul className="parkloc-list">
                {parkLocation.map(({ GUBUN, ADDR_ROAD, PIXEL, DISTANCE }) => {
                    id.current += 1;
                    return (
                        <li key={id.current}>
                            <ParkLocItem
                                title={GUBUN}
                                address={ADDR_ROAD}
                                feature={`${PIXEL}pixel`}
                                distance={DISTANCE}
                            ></ParkLocItem>
                        </li>
                    );
                })}
            </ul>
        );
    } else if (type === "children") {
        return (
            <ul className="parkloc-list">
                {parkLocation.map(({ TYPE_NAME, ADDR_ROAD, TYPE, DISTANCE }) => {
                    id.current += 1;
                    return (
                        <li key={id.current}>
                            <ParkLocItem
                                title={TYPE_NAME}
                                address={ADDR_ROAD}
                                feature={TYPE}
                                distance={DISTANCE}
                            ></ParkLocItem>
                        </li>
                    );
                })}
            </ul>
        );
    } else if(type === "parkinglot"){
        return (
            <ul className="parkloc-list">
                {parkLocation.map(({ NAME, ADDR_JIBUN, TYPE, DISTANCE }) => {
                    id.current += 1;
                    return (
                        <li key={id.current}>
                            <ParkLocItem
                                title={NAME}
                                address={ADDR_JIBUN}
                                feature={`${TYPE}주차장`}
                                distance={DISTANCE}
                            ></ParkLocItem>
                        </li>
                    );
                })}
            </ul>
        );
    }
};

export default React.memo(ParkLocList);
