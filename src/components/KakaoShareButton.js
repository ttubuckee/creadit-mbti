import React, { useEffect } from 'react';
import kakaoImg from '../icons/kakaolink_btn_medium.png';

const KakaoShareButton = () => {
  useEffect(() => {
    createKakaoButton()
  }, [])
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근 가능
    if (window.Kakao) {
      const kakao = window.Kakao
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAO_JS_KEY)
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '크리에이딧',
          description: '내가 만약 유튜버라면?!',
          imageUrl: 'https://p.kakaocdn.net/th/talkp/wlDcAmvvzq/Gt8sSy2eWH1llONgHRrdtK/iy7x4f_640x640_s.jpg',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      })
    }
  }
  return (
    <div className="kakao-share-button">
      {/* Kakao share button */}
      <div id="kakao-link-btn">
        <img src={kakaoImg} alt="kakao-share-icon" />
      </div>
    </div>
  )
}
export default KakaoShareButton