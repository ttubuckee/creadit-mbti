import './App.css';
import React, { createContext } from 'react'
import Button from './components/Button';
import Title from './components/Title';
import Question from './components/Question';
import axios from 'axios';
import classNames from 'classnames';
import PageController from './components/PageController';
import Start from './components/Start';
const LAST_PAGE_IDX = 15;
const App = () => {
  window.addEventListener("resize", ()=>setWindowSize(window.innerWidth)) /* screen width 변경 observer */
  const [windowSize, setWindowSize] = React.useState(window.innerWidth); /* screen width를 state에 할당 */
  const [mbti, setMBTI] = React.useState({
    'E' : 0, 'I' : 0,
    'N' : 0, 'S' : 0,
    'T' : 0, 'F' : 0,
    'P' : 0, 'J' : 0
  });
  const getBiggerType = (type1, type2) => mbti[type1] > mbti[type2] ? type1 : type2; /* 더 많이 선택된 type을 return */
  const getMbtiType = () => `${getBiggerType('E', 'I')}${getBiggerType('N', 'S')}${getBiggerType('T', 'F')}${getBiggerType('P', 'J')}` /* mbti data를 확인하여 mbti 유형을 완성시켜줌 */
  const [pageIdx, setPageIdx] = React.useState(0); /* page의 인덱스. button click시마다 1씩 증가함 */
  const onPressPageController = type => {
    if(mbti.hasOwnProperty(type)) mbtiController(type)
    else console.log(`page ${pageIdx} is unknown property`)
    increasePageIdx();
  }
  const increasePageIdx = () => setPageIdx((pageIdx+1) % (LAST_PAGE_IDX+1));
  const mbtiController = type => {
    mbti[type]++;
    setMBTI({...mbti}); 
  } // 'E'
  React.useEffect(()=>{
    if(pageIdx===0)
        setMBTI({
            'E' : 0, 'I' : 0,
            'N' : 0, 'S' : 0,
            'T' : 0, 'F' : 0,
            'P' : 0, 'J' : 0
        });
  }, [pageIdx]);

  React.useEffect(()=>{
    console.log(mbti);
    let i = 0 ;
    for(let key in mbti)
      i += mbti[key];
    console.log(`mbti sum : ${i}`)
  }, [mbti]);
  
  return (
      windowSize < 769 ? 
      <div className="App">
        <div className={classNames('contents-wrapper')}>
          {pageIdx > 0 && pageIdx < LAST_PAGE_IDX-1 && <Title text={`Q${pageIdx}`} style={{margin:'70px 0 35px 0'}}/>}
          {pageIdx > 0 && pageIdx < LAST_PAGE_IDX-1 && <Question questionIdx={pageIdx-1}/>}
          {/* {titles.map((text, idx) => <Title text={text} key={idx} style={{margin:'15px 15px'}}/>)} */}
        </div>
        <PageController 
          pageIdx={pageIdx} 
          className={classNames('page-controller-wrapper')} 
          onPress={onPressPageController}
          result={pageIdx === LAST_PAGE_IDX && getMbtiType()}
          mbti={mbti}/>
      </div> : 
      <div className={classNames('not-ready-screen')}>
        {/* <div>화면이 준비중입니다.</div> */}
      </div>
  );
}

export default App;