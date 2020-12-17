import React from 'react';
import classNames from 'classnames';
import KakaoShareButton from './KakaoShareButton';
import Button from './Button';
import '../css/result.css';
import { getMBTIResult } from '../modules/GeneralFunction';

const Result = (props) => {
    const { text , result } = props; // props(read-only)
    const result_obj = getMBTIResult();
    const getResultObj = (mbti_type) => { // 최종타입정보 객체 반환
        for(let type in result_obj){
            if(mbti_type === type) return result_obj[type]; 
        }
    }
    const parseNewLine = (data)=>{
        return data.split('\n').map( line => {
            return (<span>{line}<br/></span>);
        })
    }
    const my_mbti_obj = getResultObj(result);

    React.useEffect(()=>{
        const app = document.getElementsByClassName('App')[0];
        app.style.padding = '0px';
    },[]);

    console.log(`type : ${props.result}`)
    console.log(`mbti : `, props.mbti)

    return(
        <div>
            <img className={"img-logo"} src={'/images/creadit.png'} alt={"creadit-logo"}></img>
            <div className={"div-project-title"}><span>나의 부캐찾기 프로젝트</span></div>
            <img className={"img-result-type"} src={`/images/mbti_result/${result}.png`}></img>

            <div className={"div-result-text-wrapper"}>
                <div className={"div-result-type"}>{my_mbti_obj.type_des}</div>
                <div className={"div-view-count"}><span style={{color:"#7A7A7A"}}>{Math.floor(Math.random()*20)+50}만 회</span></div>
                <div className={"div-result-des-wrapper"}>
                    <p className={"p-result-des"}>{my_mbti_obj.desc}</p>
                </div>
            </div>
            <hr style={{backgroundColor: "#1339FF",height: 1}}/>
            <div className={"div-comment-wrapper"}>
                <span>댓글 {Math.floor(Math.random()*500)+500}</span>
                <div className={"div-comment"}>
                    <img src={'/images/profile.png'}/>
                    <div><span>{my_mbti_obj["best-comment"]}</span></div>
                </div>
            </div>
            <hr style={{backgroundColor: "#1339FF",height: 1}}/>
            <div className={"div-combination-title"}>
                <div style={{marginRight:"2.5%"}}>
                    <span style={{fontWeight:"bold",whiteSpace:'nowrap',marginRight:"2.5%"}}>최고조합</span>
                </div>
                <div>{my_mbti_obj["best-combi"]}</div>
            </div>
            <img className={"img-combi"} src={`/images/mbti_result/${my_mbti_obj['best-combi-type']}.png`}></img>
            <div className={"div-combination-title"}>
                <div style={{marginRight:"2.5%"}}>
                    <span style={{fontWeight:"bold",whiteSpace:'nowrap'}}>최악조합</span>
                </div>
                <div>{my_mbti_obj["worst-combi"]}</div>
            </div>
            <img className={"img-combi"} src={`/images/mbti_result/${my_mbti_obj['worst-combi-type']}.png`}></img>
            <div className={"div-share"}>
                <KakaoShareButton/>
                <a href={"https://twitter.com/intent/tweet?text=hello&url=www.naver.com"}>
                    트위터
                </a>
                <div onClick={()=>{
                    const dummy = document.createElement("textarea");
                    document.body.appendChild(dummy);
                    dummy.value = window.location.href;
                    dummy.select();
                    document.execCommand("copy");
                    document.body.removeChild(dummy);
                }}>링크복사<br/>이미지</div>
            </div>
            <Button text={'다시하기'} style={{backgroundColor:'#1339FF', color:'white', margin: "0 auto"}} onPress={props.onPress}/>
            <a href="http://creadit.godomall.com/main/index.php">
                <img className={"img-banner"} src={'/images/small_banner.png'}></img>
            </a>
            <p style={{fontWeight:"bold", textAlign:"left", margin:"0 auto",width:"90%",marginTop:"37px"}}>크리에이터로 성장할 수 있는 곳,<br/>크리에이딧이 궁금하다면?👀</p>
            <Button text={'📌notion에서 자세히 보기'} style={{backgroundColor:'#010101', color:'white', margin: "0 auto", marginTop:"15px"}} onPress={props.onPress}/>
            <div className={"div-notion-link"}></div>
        </div>
    )
}

export default Result;