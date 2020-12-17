import React from 'react';
import classNames from 'classnames';
import Button from './Button';
import { startImgSrc } from '../modules/GeneralFunction';
const Start = (props) => {
    const { text } = props; // props(read-only)
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    return(
    <>
        <div className={classNames('start-wrapper')} style={props.style}>
            <img src={'../start-logo2.png'} className={classNames('start-img')}/>
            <div className={classNames('start-project-explain')}>
                {`너튜브를 시작한다면..`}<br/>{`어떤 너튜버를 할까?`}
            </div>
        </div>
        <Button text={'시작하기'} style={{backgroundColor:'#1339FF', color:'white'}} onPress={props.onPress}/>
    </>)
}

export default Start;