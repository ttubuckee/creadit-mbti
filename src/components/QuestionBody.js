import React from 'react';
import classNames from 'classnames';
import Button from './Button';
const QuestionBody = (props) => {
    const { text, questions, types } = props; // props(read-only)
    React.useEffect(()=>{
        //setTest(true);
    }, [])

    return(
    <div className={classNames('button-wrapper')} onClick={props.onPress} style={props.style}>
        <div>{text}</div>
        <Button type={'E'} onPress={props.onPress}/>
    </div>)
}

export default QuestionBody;