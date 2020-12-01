import React from 'react';
import classNames from 'classnames';
const Question = (props) => {
    const { questionIdx } = props; // props(read-only)
    const questions = [
        '간만에 휴일을 갖게된 당신, 무엇을 할것인가요?', // Q1
        '당신의 친구가 최애 너튜버에 대해 물어보았습니다.', // Q2
        '우연히 너튜버에서 여러명이 함께하는 콘텐츠를 본 당신,', // Q3
        '나는 평소 조회수를 빠짝 뽑을 것 같은 콘텐츠를 상상한다/ 기가 막힌 콘텐츠를 상상한다.', // Q4
        '자기 직전 까지 너튜브를 보고 있던 당신, -> 잠들기 직전 20분짜리 재밌는 영상을 발견했다. ', // Q5
        '엉성한 콘텐츠로  인기를 얻은 영상을 봤을 때,  저새기도 하는데 나도 할수있지 않을까?/쟤는 얼마 벌까?', // Q6
        '너튜브를 시작하게된 당신 먼저 하는 행동은?', // Q7
        '합방 혹은 스트리밍 vs 내가 편집한 영상 올리기', // Q8
        '합방 혹은 스트리밍 vs 내가 편집한 영상 올리기', // Q9
        '너튜브가 된 당신, 모르는 너튜버에게 합방 제의가 들어왔을 때? (걱정/잼겠따)', // Q10
        '스트리머를 시작한 당신!', // Q11
        '구독자 1,000명을 달성한 당신(100만 껌이네~/와 1000명이면 수익창출도 되겠다)', // Q12
        '악플이 달렸을 때(상처/가볍게)', // Q13
    ]
    React.useEffect(()=>{
        //setTest(true);
    }, [])
    return(
    <div className={classNames('question-wrapper')} style={props.style}>
        <div className={classNames('question-text')}>{questions[questionIdx]}</div>
    </div>) 
}

export default Question;