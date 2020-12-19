import React from 'react';
import classNames from 'classnames';
import { getMBTIQuestions } from '../modules/GeneralFunction';
const Question = (props) => {
    const { questionIdx } = props; // props(read-only)
    const questions = getMBTIQuestions();
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    return(
    <div className={classNames('question-wrapper')} style={props.style}>
        <div className={classNames('question-text')}>{questions[questionIdx]}</div>
    </div>) 
}

export default Question;