import React, { useState, useCallback, useEffect } from "react";
import cn from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { Backdrop, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// import { getLocation } from '../../api/location';

import CarBody from "../../assets/images/bugatti_body.png";
import CarTire from "../../assets/images/bugatti_tire.png";
import "./SportsCar.scss";
import { finishCheck } from "../../modules/isCheck";
import Success from "../../assets/images/Success";
import Failure from "../../assets/images/Failure";
import ResultContainer from "../../containers/ResultContainer/ResultContainer";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
}));

const SportsCar = () => {
    const [loading, setLoading] = useState(false);
    const [posible, setPosible] = useState(0);
    const [click, setClick] = useState(false);

    const canParking = useCallback(() => {
        const getParkInfo = async () => {
            setLoading(true);
            // const result = await getLocation();
            setTimeout(() => {
                setLoading(false);
                setPosible(2);
            }, 1000);
            // console.log(result);
        }
        getParkInfo();
    }, []);

    const classes = useStyles();
    const isCheck = useSelector((state) => state.isCheck.check);
    const reduxDispatch = useDispatch();
    const onClick = () => {
        reduxDispatch(finishCheck());
        setClick(false);
    }

    useEffect(() => {
        if (isCheck) {
            canParking();
        }
    }, [isCheck, canParking])

    return (
        <>
            {isCheck &&
                <>
                    <div className="sportscar">
                        <div className="bugatti">
                            <img className="bugatti_body" src={CarBody} alt="" />
                            <img className={cn("bugatti_tire", { loading })} src={CarTire} alt="" />
                            <img className={cn("bugatti_tire2", { loading })} src={CarTire} alt="" />
                        </div>
                        {posible === 1 ?
                            <div className={cn("status", 'opacity')}><Success /></div>
                            : posible === 2 ? <div className={cn("status", 'opacity')}><Failure /><Button className="show-result" onClick={() => setClick(true)}>결 과</Button></div>
                                : <div className={cn("status")}></div>}
                    </div>
                </>
            }
            <ResultContainer click={click} setClick={setClick} />
            <Backdrop className={classes.backdrop} open={isCheck} onClick={onClick} />
        </>
    );
};

export default SportsCar;
