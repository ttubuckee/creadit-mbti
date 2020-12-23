import React, { useEffect } from 'react';

const KakaoShareButton = (props) => {
  const { imgUrl, type } = props;
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
          title: '나의 부캐 찾기 프로젝트',
          description: `당신은 \"${type}\" 타입 입니다.`,
          imageUrl: imgUrl,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '검사하러 가기',
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
        <img src={'/images/kakaolink_btn_medium.png'} alt="kakao-share-icon" className={"share-btn"}/>
      </div>
    </div>
  )
}
export default KakaoShareButton