import React, { useContext } from 'react';
import classNames from 'classnames';
import Button from './Button';
import Loading from './Loading';
import Result from './Result';
import Start from './Start';
import QuestionBody from './QuestionBody';
const PageController = (props) => {
    const startImgSrc = 'https://post-phinf.pstatic.net/MjAxODA4MDlfMjk2/MDAxNTMzNzkyMjAzMzA2.eN6ftc0F8v7_-RafQW35jposp2qa1JBnaW-QScAu3GIg.JQDWvH38-z54nTEWjL2krDWtHq3giqo4stIz5Pw-V3cg.PNG/1.png?type=w1200'
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    const questions = [
        ['친구를 만난다', '여행을 간다', '요리/베이킹을 한다', '게임을 한다'] /*  questions 1 */,
        []
    ]
    const types = [
        ['E', 'I', '']
    ]
    console.log(props);
    switch(props.pageIdx){
        case 0: // start 화면
            return <Start imgSrc={startImgSrc} onPress={props.onPress}/>
            break;
        case 1: // 1번 질문
            return <QuestionBody questions={questions[props.pageIdx-1]}/* numOfQuestions={4} */ style={{marginTop:'107px', width:'88%'}} onPress={props.onPress} text={'버튼'}/>
            break;
        default: // case 1~13
            return <QuestionBody numOfQuestions={2} onPress={props.onPress} style={{marginTop:'107px', width:'88%'}} text={'버튼'}/>
            break;
        case 14: // 로딩 화면
            return <Loading onPress={props.onPress} text={'버튼'}/>
            break;
        case 15: // 결과 화면
            return <Result onPress={props.onPress} text={'버튼'}/>
            break;
    }
}

export default PageController;