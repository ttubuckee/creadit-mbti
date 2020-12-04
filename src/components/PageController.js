import React, { useContext } from 'react';
import classNames from 'classnames';
import Button from './Button';
import Loading from './Loading';
import Result from './Result';
import Start from './Start';
import QuestionBody from './QuestionBody';
import { getMBTIQuestions, getStartImageSource } from '../modules/GeneralFunction';
const PageController = (props) => {
    const startImgSrc = getStartImageSource();
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    const questions = getMBTIQuestions();
    switch(props.pageIdx){
        case 0: return <Start imgSrc={startImgSrc} onPress={props.onPress}/>/* start 화면 */
        default: 
            return <QuestionBody questions={questions[props.pageIdx-1]} style={{marginTop:'107px', width:'88%'}} onPress={props.onPress}/>/* 1~13번 질문 */
        case 14: return <Loading onPress={props.onPress} text={'버튼'}/> /* 로딩 화면 */
        case 15: return <Result onPress={props.onPress} text={'버튼'} result={props.result} mbti={props.mbti}/> /* 결과 화면 */
    }
}

export default PageController;