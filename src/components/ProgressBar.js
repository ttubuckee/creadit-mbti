import React, { Component, createRef } from 'react';
import classNames from 'classnames';

const ProgressBar = (props) =>{
    const { progress, questions_len, wrapperStyle } = props;
    const progress_percent = (progress / questions_len) * 100;

    const progressbarStyle = {
        "backgroundColor": "#1339FF",
        "width": `${progress_percent}%`,
        "height": "100%",
    }

    return(
        <div className={"progressbar-wrapper"} style={props.wrapperStyle}>
            <div className={"progressbar"} style={progressbarStyle}></div>
        </div>
    );
}
export default ProgressBar;