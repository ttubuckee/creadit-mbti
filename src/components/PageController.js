import React from 'react';
import Loading from './Loading';
import Result from './Result';
import Start from './Start';
import QuestionBody from './QuestionBody';
const PageController = (props) => {
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    switch(props.pageIdx){
        case 0: return <Start onPress={props.onPress}/>/* start 화면 */
        default: 
            return <QuestionBody style={{marginTop:'107px', width:'88%'}} onPress={props.onPress} pageIdx={props.pageIdx} lastPageIdx={props.lastPageIdx}/>/* 1~13번 질문 */
        case 14: return <Loading onPress={props.onPress} time={2000}/> /* 로딩 화면 */
        case 15: return <Result onPress={props.onPress} text={'버튼'} result={props.result} mbti={props.mbti}/> /* 결과 화면 */
    }
}

export default PageController;