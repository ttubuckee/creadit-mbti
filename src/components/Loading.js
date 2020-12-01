import React from 'react';
import classNames from 'classnames';
const Loading = (props) => {
    const { text } = props; // props(read-only)
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    return(
    <div className={classNames('button-wrapper')} onClick={props.onPress} style={props.style}>
        <div>{text}</div>
    </div>)
}

export default Loading;