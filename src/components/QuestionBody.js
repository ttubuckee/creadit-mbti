import React from 'react';
import classNames from 'classnames';
const QuestionBody = (props) => {
    const { text, numOfQuestions } = props; // props(read-only)
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    return(
    <div className={classNames('button-wrapper')} onClick={props.onPress} style={props.style}>
        <div>{text}</div>
    </div>)
}

export default QuestionBody;