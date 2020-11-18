import React from 'react';
import cn from "classnames";
import './ResultContainer.scss';
import Icons from '../../assets/images/Icons';

const ResultContainer = ({ click, setClick }) => {


    return (
        <div className={cn("result-container", { click })}>
            <div className="header">
                <h1>결과보기</h1>
                <div className="button" onClick={() => setClick(false)}><Icons>{"arrow-down"}</Icons></div>
            </div>

        </div>
    );
};

export default ResultContainer;