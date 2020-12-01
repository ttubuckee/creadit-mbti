import React from 'react';
import classNames from 'classnames';
const RentalStatistics = (props) => {
    const { text } = props;
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    return(
    <div className={classNames('rental-statistics-wrapper')} onClick={props.onPress} style={props.style}>
        <div>{`${text} rental statistics`}</div>
    </div>)
}

export default RentalStatistics;