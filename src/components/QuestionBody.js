import React from 'react';
import classNames from 'classnames';
import ProgressBar from './ProgressBar';

const QuestionBody = (props) => {
    const { text, numOfQuestions } = props; // props(read-only)
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    const bottom_wrapper_style = {
        width:"100%",
        margin: "0 auto"
    }
    const wrapperStyle = {
        "width": "100%",
        "height": "8px",
        "margin": "10px auto",
        "padding": "0px",
        "backgroundColor": "#EAEAEA"
    }
    return(
    <div className={"bottom-wrapper"} style={bottom_wrapper_style}>
        <div className={classNames('button-wrapper')} onClick={props.onPress} style={props.style}>
            <div>{text}</div>
        </div>   
        <span style={{fontSize:"18px",fontWeight:"bold", textAlign:"right", display:"block", marginTop:"56px", marginRight:"10px"}}>{props.pageIdx}/{14}</span>
        <ProgressBar wrapperStyle={wrapperStyle} progress={props.pageIdx} questions_len={14}/>
    </div>
    )
}

export default QuestionBody;