import React, { Component, createRef } from 'react';
import classNames from 'classnames';

const ProgressBar = (props) =>{
    const { progress, questions_len, wrapperStyle, animation} = props;
    const progress_percent = (progress / questions_len) * 100;

    const progressbarStyle = {
        "backgroundColor": "#1339FF",
        "width": `${progress_percent}%`,
        "height": "100%",
    }
    React.useEffect(()=>{
        if(animation) document.getElementsByClassName('progress')[0].classList = 'load-start';
    },[animation])

    return(
        <div className={"progressbar-wrapper"} style={props.wrapperStyle}>
            <div className={"progress"} style={progressbarStyle}></div>
        </div>
    );
}
export default ProgressBar;