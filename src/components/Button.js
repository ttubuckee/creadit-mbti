import React from 'react';
import classNames from 'classnames';
const Button = (props) => {
    const { text, type } = props; // props(read-only)
    const mbtiController = props.onPress;
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    return(
    <div className={classNames('button-wrapper')} onClick={() => mbtiController(type)} style={props.style}>
        <div className={classNames('button-text')}>{text}</div>
    </div>)
}

export default Button;