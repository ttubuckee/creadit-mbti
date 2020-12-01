import React from 'react';
import classNames from 'classnames';
const Title = (props) => {
    const { text } = props; // props(read-only)
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    return(
    <div className={classNames('title-wrapper')} style={props.style}>
        <div className={classNames('title-text')}>{text}</div>
    </div>)
}

export default Title;