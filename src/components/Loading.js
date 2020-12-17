import React from 'react';
import { CircularProgress, LinearProgress } from '@material-ui/core/';
import '../css/loading.css';

const Loading = (props) => {
    const { time } = props; // props(read-only)
    const [loadingIndicator,setLoadingStatus] = React.useState(true);

    React.useEffect(()=>{
        const spinner_h = document.getElementById("spinner").style.height.split('px')[0];
        document.getElementById("div-spinner-wrapper").style.marginTop = `${window.innerHeight/2 - spinner_h}px`;
        setTimeout(()=>setLoadingStatus(false),+time);
    }, []);

    React.useEffect(()=>{
        if(!loadingIndicator) props.onPress();
    }, [loadingIndicator]);

    return(
        <div id={"div-spinner-wrapper"}>
            {loadingIndicator ? <CircularProgress id={"spinner"} size={60} thickness={2.5} style={{color:"#1339FF"}}/> : null}
            <div className={"div-text-wrapper"}><span style={{color:"#1339FF"}}>결과 분석 중</span></div>
            {/* <ProgressBar wrapperStyle={wrapperStyle} progress={progress} questions_len={100}></ProgressBar> */}
            {/* {loadingIndicator ? <LinearProgress style={{color:"#1339FF"}} className={"linear-progress"}/> : null} */}
        </div>
    )
}

export default Loading;