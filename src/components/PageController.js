import React from 'react';
import classNames from 'classnames';
import Button from './Button';
const PageController = (props) => {
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    switch(props.pageIdx){
        case 0:
            return <Button text="대여정보 component"/>
            break;
        case 1:
            return <Button text="라이딩 component"/>
            break;
        case 2:
            return <Button text="계층별 component"/>
            break;
        case 3:
            return <Button text="대여소별 component"/>
            break;
        default:
            return <Button text="default"/>
            break;
    }
}

export default PageController;