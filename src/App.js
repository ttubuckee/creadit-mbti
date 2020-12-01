import './App.css';
import React from 'react'
import Button from './components/Button';
import Title from './components/Title';
import Question from './components/Question';
import axios from 'axios';
import classNames from 'classnames';
import PageController from './components/PageController';
import Start from './components/Start';
const App = () => {
  const mbti = {
    'E' : 0, 'I' : 0,
    'N' : 0, 'S' : 0,
    'T' : 0, 'F' : 0,
    'P' : 0, 'J' : 0
  }
  const getBiggerType = (type1, type2) => mbti[type1] > mbti[type2] ? type1 : type2; // 더 많이 선택된 type을 return
  const getMbtiType = () => `${getBiggerType('E', 'I')}${getBiggerType('N', 'S')}${getBiggerType('T', 'F')}${getBiggerType('P', 'J')}` // mbti data를 확인하여 mbti 유형을 완성시켜줌
  console.log(getMbtiType()); // 현재 ISFJ 출력
  const [pageIdx, setPageIdx] = React.useState(0); // hooks - 상태 관리를 위한 function 집합
  const increasePageIdx = () => {setPageIdx((pageIdx+1)%15); console.log(pageIdx)};
  React.useEffect(()=>{
  }, [pageIdx])
  const getData = () => // 통신 예시 
    axios.get('https://3.34.213.122/')
      .then(res => console.log(res)) // success
      .catch(res => console.log(res)) // err
  /**/
  return (
    <div className="App">
      <div className={classNames('contents-wrapper')}>
        {pageIdx > 0 && pageIdx < 14 && <Title text={`Q${pageIdx}`} style={{margin:'70px 0 35px 0'}}/>}
        {pageIdx > 0 && pageIdx < 14 && <Question questionIdx={pageIdx-1}/>}
        {/* {titles.map((text, idx) => <Title text={text} key={idx} style={{margin:'15px 15px'}}/>)} */}
      </div>
      <PageController pageIdx={pageIdx} className={classNames('page-controller-wrapper')} onPress={increasePageIdx}/>
    </div>
  );
}

export default App;