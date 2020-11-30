import './App.css';
import React from 'react'
import Button from './components/Button';
import axios from 'axios';
import classNames from 'classnames';
import PageController from './components/PageController';
const App = () => {
  const buttonTexts = [
    '따릉이 실시간 대여정보',
    '오늘의 라이딩',
    '계층별 이용 통계',
    '대여소별 이용 통계'
  ];
  const [pageIdx, setPageIdx] = React.useState(0);
  React.useEffect(()=>{
  }, [pageIdx])
  const getData = () =>
    axios.get('https://bj45fhhm8d.execute-api.ap-northeast-2.amazonaws.com/2020-11-30-test/public-data')
      .then(res => console.log(res)) // success
      .catch(res => console.log(res)) // err
  return (
    <div className="App">
      <div class={classNames('button-set-wrapper')}>
        {buttonTexts.map((text, idx) => <Button text={text} key={idx} onPress={()=>setPageIdx(idx)} style={{margin:'15px 15px'}}/>)}
      </div>
      <PageController pageIdx={pageIdx} class={classNames('page-controller-wrapper')}/>
    </div>
  );
}

export default App;
