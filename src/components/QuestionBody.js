import React from 'react';
import classNames from 'classnames';
import Button from './Button';
import ProgressBar from './ProgressBar';

const QuestionBody = (props) => {
    const { questions, types } = props; // props(read-only)
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
        <div className={classNames('question-body-wrapper')} onClick={props.onPress} style={props.style}>
        {questions.map((question, idx) => 
            <Button key={idx} type={question.type} text={question.text} onPress={props.onPress} style={{marginTop:15, marginBottom:15}}/>)}
        </div>
        <span style={{fontSize:"18px",fontWeight:"bold", textAlign:"right", display:"block", marginTop:"56px", marginRight:"10px"}}>{props.pageIdx}/{14}</span>
        <ProgressBar wrapperStyle={wrapperStyle} progress={props.pageIdx} questions_len={14}/>
    </div>
    )
}

export default QuestionBody;