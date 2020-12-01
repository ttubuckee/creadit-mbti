import './App.css';
import React from 'react'
import Button from './components/Button';
import axios from 'axios';
import classNames from 'classnames';
import PageController from './components/PageController';
const App = () => {
  const buttonTexts = [ // state(writable)
    'hi',
    '내일의 라이딩',
    '계층별 이용 통계',
    '대여소별 이용 통계'
  ];
  /*
  const [pageIdx, setPageIdx] = React.useState(0); // hooks - 상태 관리를 위한 function 집합
  let pageIdxTmp = 1;
  React.useEffect(()=>{
  }, [pageIdx])
  const getData = () => // 통신 예시 
    axios.get('https://3.34.213.122/')
      .then(res => console.log(res)) // success
      .catch(res => console.log(res)) // err
  /**/
  return (
    <div className="App">
      <div className={classNames('button-set-wrapper')}>
        tempo text bye
        {/* {buttonTexts.map((text, idx) => <Button text={text} key={idx} onPress={()=>pageIdxTmp=idx} style={{margin:'15px 15px'}}/>)} */}
      </div>
      {/* <PageController pageIdx={pageIdxTmp} className={classNames('page-controller-wrapper')}/> */}
    </div>
  );
}

export default App;