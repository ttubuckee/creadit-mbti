import React from 'react';
import classNames from 'classnames';
const Result = (props) => {
    const { text } = props; // props(read-only)
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    console.log(`type : ${props.result}`)
    console.log(`mbti : `, props.mbti)
    return(
    <div className={classNames('button-wrapper')} onClick={props.onPress} style={props.style}>
        <div>{text}</div>
    </div>)
}

export default Result;