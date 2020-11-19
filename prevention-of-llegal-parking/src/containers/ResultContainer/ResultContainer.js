import React, { useEffect, useState, useRef } from 'react';
import cn from "classnames";
import './ResultContainer.scss';
import Icons from '../../assets/images/Icons';
import { Backdrop, makeStyles } from '@material-ui/core';

const ResultItem = React.memo(({ title, address }) => {
    return (
        <div className="result-item">
            <div className="result-title">{title}</div>
            <div className="result-address">{address}</div>
        </div>
    );
});

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
        height: "100vh",
    },
}));

const ResultContainer = ({ click, setClick, result }) => {

    const id = useRef(0);
    const [total, setTotal] = useState(0);
    const classes = useStyles();

    useEffect(() => {
        if (click) {
            setTotal(result.cctv.length + result.children.length);
        }
    }, [click, total, result])

    return (
        <>
            {/* <Backdrop
                className={classes.backdrop}
                open={click}
                onClick={() => setClick(false)}
            > */}
            <div className={cn("result-container", { click })}>
                <div className="header">
                    <h1>결과보기</h1>
                    <div className="button" onClick={() => setClick(false)}><Icons>{"arrow-down"}</Icons></div>
                </div>
                <div className="text-area">
                    총 <span>{total}</span>건의 불법주정차가 감지되었습니다.<p />불법 주정차의 위험이 높으니 차량을 이동해주시길 바랍니다.
                <div className="bar"><div className="gubun">종류</div><div className="location">위치</div></div>
                    {click &&
                        result.cctv.length !== 0 &&
                        <ul className="show-item">
                            {result.cctv.map(({ GUBUN, ADDR_ROAD }) => {
                                id.current += 1;
                                return (
                                    <li key={id.current}>
                                        <ResultItem
                                            title={GUBUN}
                                            address={ADDR_ROAD}
                                        ></ResultItem>
                                    </li>
                                );
                            })}
                        </ul>
                    }
                    {click && result.children.length !== 0 &&
                        <ul className="show-item">
                            {result.children.map(({ TYPE, ADDR_ROAD }) => {
                                id.current += 1;
                                return (
                                    <li key={id.current}>
                                        <ResultItem
                                            title={TYPE}
                                            address={ADDR_ROAD}
                                        ></ResultItem>
                                    </li>
                                );
                            })}
                        </ul>
                    }
                </div>
            </div>
            {/* </Backdrop> */}
        </>
    );
};

export default ResultContainer;