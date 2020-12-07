import React from 'react';
import classNames from 'classnames';
import KakaoShareButton from './KakaoShareButton';
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
      
    const my_mbti_obj = getResultObj(result);

    console.log(`type : ${props.result}`)
    console.log(`mbti : `, props.mbti)

    return(
    <div className={"div-result-wrapper"}>
        <div className={"div-project-title"}><span>부캐찾기 프로젝트</span></div>
        <div className={"div-result-type"}>{my_mbti_obj.type_des}</div>
        <img className={"img-result-type"}></img>
        <div className={"div-result-des-wrapper"}>
        <p className={"p-result-des"}>{my_mbti_obj.desc}</p>
        </div>
        <div className={"div-combinations-wrapper"}>
            <div className={"div-best-combi-wrapper"}>
                <span>최고조합</span>
                <img className={"img-best-combi"}></img>
                <span>{my_mbti_obj["best-combi"]}</span>
            </div>
            <div className={"div-worst-combi-wrapper"}>
                <span>최악조합</span>
                <img className={"img-worst-combi"}/>
                <span>{my_mbti_obj["worst-combi"]}</span>
            </div>
        </div>
        <div className={"div-share"}>
            <KakaoShareButton/>
            <div onClick={()=>{
                const dummy = document.createElement("textarea");
                document.body.appendChild(dummy);
                dummy.value = window.location.href;
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
            }}>링크복사<br/>이미지</div>
        </div>
        <div className={"div-retry"} onClick={props.onPress}>다시하기</div>
        <img className={"img-banner"}></img>
        <div className={"div-notion-link"}></div>
    </div>
    )
}

export default Result;