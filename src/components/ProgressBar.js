import React, { Component, createRef } from 'react';
import classNames from 'classnames';

const ProgressBar = (props) =>{
    const { progress, questions_len } = props;
    const progress_percent = (progress / questions_len) * 100;

    const totalbarStyle = {
        "backgroundColor": "#EAEAEA",
        "width": 100-progress_percent+"%",
        "heigth": "100%",
    }
    const progressbarStyle = {
        "backgroundColor": "red",
        "width": progress_percent+"%",
        "height": "100%",
    }
    const wrapperStyle = {
        "display": "flex",
        "flexDirection": "row",
        "width": "100%",
        "height": "20px",
        "margin": "10px auto",
        "padding": "0px",
        "backgroundColor": "#EAEAEA"
    }
    return(
        <div className={"progressbar-wrapper"} style={wrapperStyle}>
            <div className={"progressbar"} style={progressbarStyle}></div>
            <div className={"totalbar"} style={totalbarStyle}></div>
        </div>
    );
}
export default ProgressBar;