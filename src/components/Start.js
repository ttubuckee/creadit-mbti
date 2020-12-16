import React from 'react';
import classNames from 'classnames';
import Button from './Button';
const Start = (props) => {
    const { text } = props; // props(read-only)
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    return(
    <>
        <div className={classNames('start-wrapper')} style={props.style}>
            <img src={props.imgSrc} className={classNames('start-img')}/>
            <div className={classNames('start-project-explain')}>
                {`프로젝트 설명글`}
            </div>
        </div>
        <Button text={'시작하기'} style={{backgroundColor:'#1339FF', color:'white'}} onPress={props.onPress}/>
    </>)
}

export default Start;