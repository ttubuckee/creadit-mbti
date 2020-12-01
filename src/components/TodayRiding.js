import React from 'react';
import classNames from 'classnames';
const TodayRiding = (props) => {
    const { text } = props;
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    return(
    <div className={classNames('today-riding-wrapper')} onClick={props.onPress} style={props.style}>
        <div>{`${text} today riding`}</div>
    </div>)
}

export default TodayRiding;