import React from 'react';
import classNames from 'classnames';
const Button = (props) => {
    const { text, type } = props; // props(read-only)
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    return(
    <div className={classNames('button-wrapper')} onClick={() => props.onPress(type)} style={props.style}>
        <div>{text}</div>
    </div>)
}

export default Button;