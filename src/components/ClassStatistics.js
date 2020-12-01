import React from 'react';
import classNames from 'classnames';
const ClassStatistics = (props) => {
    const { text } = props;
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    return(
    <div className={classNames('class-statistics-wrapper')} onClick={props.onPress} style={props.style}>
        <div>{`${text} class statistics`}</div>
    </div>)
}

export default ClassStatistics;