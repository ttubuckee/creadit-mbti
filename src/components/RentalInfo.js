/* 실시간 따릉이 대여정보 component */
import React from 'react';
import classNames from 'classnames';
const RentalInfo = (props) => {
    const { text } = props;
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    return(
    <div className={classNames('rental-info-wrapper')} onClick={props.onPress} style={props.style}>
        <div>{`${text} rental info`}</div>
    </div>)
}

export default RentalInfo;