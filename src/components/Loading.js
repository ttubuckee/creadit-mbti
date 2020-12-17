import React from 'react';
import { CircularProgress } from '@material-ui/core/';
import ProgressBar from './ProgressBar';
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

    const wrapperStyle = {
        "width": "100%",
        "height": "8px",
        "margin": "10px auto",
        "padding": "0px",
        "backgroundColor": "#EAEAEA",
    }

    return(
        <div id={"div-spinner-wrapper"}>
            {loadingIndicator ? <CircularProgress id={"spinner"} size={60} thickness={2.5} style={{color:"#1339FF"}}/> : null}
            <div className={"div-text-wrapper"}><span style={{color:"#1339FF"}}>결과 분석 중</span></div>
            <ProgressBar className={'progressbar'} wrapperStyle={wrapperStyle} progress={0} questions_len={100} animation={true}></ProgressBar>
        </div>
    )
}

export default Loading;