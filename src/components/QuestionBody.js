import React from 'react';
import classNames from 'classnames';
import Button from './Button';
const QuestionBody = (props) => {
    const { questions, types } = props; // props(read-only)
    React.useEffect(()=>{
        //setTest(true);
    }, [])

    return(
    <div className={classNames('question-body-wrapper')} onClick={props.onPress} style={props.style}>
        {questions.map((question, idx) => 
            <Button key={idx} type={question.type} text={question.text} onPress={props.onPress} style={{marginTop:15, marginBottom:15}}/>)}
    </div>)
}

export default QuestionBody;