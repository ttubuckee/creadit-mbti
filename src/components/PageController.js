import React from 'react';
import classNames from 'classnames';
import Button from './Button';
import TodayRiding from './TodayRiding';
import RentalInfo from './RentalInfo';
import ClassStatistics from './ClassStatistics';
import RentalStatistics from './RentalStatistics';
const PageController = (props) => {
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    switch(props.pageIdx){
        case 0:
            return <RentalInfo text="대여정보 component"/>
            break;
        case 1:
            return <TodayRiding text="라이딩 component"/>
            break;
        case 2:
            return <ClassStatistics text="계층별 component"/>
            break;
        case 3:
            return <RentalStatistics text="대여소별 component"/>
            break;
        default:
            return <Button text="default"/>
            break;
    }
}

export default PageController;