import axios from 'axios'
export const replaceNewLine = str => {
    str.split('\n')
}
export const getMBTIQuestions = () => {
    const questions = [
        '간만에 휴일을 갖게된 당신, \n무엇을 할것인가요?', // Q1
        '당신의 친구가 최애 너튜버에 대해 \n물어보았습니다.', // Q2
        '우연히 너튜버에서 여러명이 \n함께하는 콘텐츠를 본 당신은', // Q3
        '만약 너튜브 콘텐츠를 \n찍어야 한다면, 당신은', // Q4
        '잠들기 직전 20분짜리 \n재밌는 영상을 발견했다.', // Q5
        '엉성한 퀄리티로 \n인기를 얻은 영상을 봤을 때, 당신은', // Q6
        '너튜브를 시작하기로 마음먹은 당신이\n 가장 먼저 하는 행동은', // Q7
        '너튜브를 시작하게 된 \n당신의 메인 콘텐츠는', // Q8
        '너튜버가 된 당신이 \n가장 받고 싶은 댓글은', // Q9
        '너튜브가 된 당신, 모르는 너튜버에게 \n합방 제의가 들어왔다.', // Q10
        '구독자와의 소통을 위해 실시간 스트리밍을 시작해보려고 한다, 당신은', // Q11
        '생각보다 빨리 구독자 1,000명을 \n얻게 되었습니다. 이때 당신의 기분은', // Q12
        '당신의 너튜브 채널에 장문의 악플이 \n달렸습니다. 당신의 반응은', // Q13
    ];
    return questions;
}
export const getMBTIOptions = () => {
    const questions = [
        [{'text' : '친구를 만난다', 'type' : ''}, {'text' : '여행을 떠난다', 'type' : ''}, 
        {'text' : '요리를 한다', 'type' : ''}, {'text' : '게임을 한다', 'type' : ''}, ], /*  questions 1 */

        [{'text' : '지금이 기회다, 최애 너튜버를 영업한다.', 'type' : 'F'}, 
        {'text' : '최애 너튜버가 누구인지 알려준다.', 'type' : 'T'}], /*  questions 2 */

        [{'text' : '친구들에게 같이 해보자고 공유한다', 'type' : 'E'}, 
        {'text' : '재미있었다! 다음 영상 봐야지', 'type' : 'I'}], /*  questions 3 */

        [{'text' : '조회 수를 많이 받을 수 있는 콘텐츠', 'type' : 'S'}, 
        {'text' : '한 번도 본 적 없는 신기한 콘텐츠', 'type' : 'N'}], /*  questions 4 */

        [{'text' : '오늘은 그만, 다음에 본다', 'type' : 'J'}, 
        {'text' : '고민은 시청을 늦출 뿐, 바로 재생한다', 'type' : 'P'}], /*  questions 5 */

        [{'text' : '이 정도면 나도 할 수 있지 않을까?', 'type' : 'N'}, 
        {'text' : '저 사람은 이걸로 얼마 벌었을까?', 'type' : 'S'}], /*  questions 6 */

        [{'text' : '촬영 장비를 맞추고 영상 찍는 법을 공부한다', 'type' : 'J'}, 
        {'text' : '일단 한번 찍어본다', 'type' : 'P'}], /*  questions 7 */

        [{'text' : '다른 너튜버와 합방 혹은 소통형 스트리밍', 'type' : 'E'}, 
        {'text' : '직접 콘텐츠를 촬영하고 편집해서 올리는 영상', 'type' : 'I'}], /*  questions 8 */

        [{'text' : '편집도 깔끔하고 내용도 재밌어요! 천상 너튜버!', 'type' : 'T'}, 
        {'text' : '영상만 봐도 멋진 사람 같아요! 닮고 싶어요!', 'type' : 'F'}], /*  questions 9 */

        [{'text' : '합방 해본적이 없는데.... 잘 할 수 있을까?', 'type' : 'I'}, 
        {'text' : '합방이라니! 너무 재미있겠다!', 'type' : 'E'}], /*  questions 10 */

        [{'text' : '스트리밍 일정표를 만들어 시청자 커뮤니티에 올린다', 'type' : 'J'}, 
        {'text' : '마음 내킬 때마다 스트리밍을 켜서 진행한다', 'type' : 'P'}], /*  questions 11 */

        [{'text' : '드디어! 수익 창출 방법을 알아본다', 'type' : 'S'}, 
        {'text' : '역시 나는 대단해, 100만까지 달리자!', 'type' : 'N'}], /*  questions 12 */

        [{'text' : '악플도 피드백이지, 가볍게 무시한다', 'type' : 'T'}, 
        {'text' : '악플이라니, 상처받는다', 'type' : 'F'}], /*  questions 13 */
    ];
    return questions;
}
export const getMBTIResult = () => {
    const result_data = {
        "ENFP":{
            "type_des":"띵겜부터 똥겜까지, 종합 게임 스트리머",
            "desc":"새로운 사람을 만나는 것을 좋아하고 새로운 시도를 좋아하는 당신, 시청자들과 소통하는 종합 스트리머에 도전해 보세요!\n\n시청자들과 함께 다양한 게임을 즐기거나 팬카페를 통해 소통하며 시청자들의 단합을 이끌어냅니다\n\n예고 없는 새벽방송으로 팬들을 깜짝 놀라게 하는 등 사람을 기쁘게 해주는 능력이 있는 당신은 노가리 방송을 통해 시청자들과 시간을 보내기도 하죠.\n\n하지만 자신만의 시간을 위해 갑작스러운 휴방을 하기도 하며 시청자들의 '당신이 행복하면 나도 좋아'를 유발합니다.",
            "best-combi":"너튜브는 나의 일기장! 챌린지형 너튜버",
            "worst-combi":"이건 못참지, 백과사전형 너튜버",
            "best-comment":"당신이 행복하면 나도 좋아",
            "best-combi-type":"INFJ",
            "worst-combi-type":"ISTP",
            "img-url":"https://i.esdrop.com/d/c41KVnbvSc.png"
        },
        "ENFJ":{
            "type_des":"제가 보기에는, 정보전달형 스트리머",
            "desc":"사람들에게 퍼주는 걸 좋아하는 당신, 정보 전달 형 너튜버 기질이 보입니다.\n\n자신이 알고 있는 정보들을 알려주고 시청자들이 성장하는 것에 보람을 느끼는 당신은 스트리밍을 통해 실시간 소통으로 시청자들을 혼내기도 합니다.\n\n가끔은 악플로 상처를 받기도 하지만 시청자들의 응원으로 마음을 다잡을, 사랑받는 너튜버가 될지도 모르겠어요.",
            "best-combi":"나만 알고싶어..유명해지지마, 소유하고 싶은 너튜버",
            "worst-combi":"집이 최고야 짜릿해, 금손 vlog 너튜버",
            "best-comment":"니가.. 00님보다 정리 잘해? 소통 잘하냐구.. 00님 팬이라면 꼭 퍼가",
            "best-combi-type":"INFP",
            "worst-combi-type":"ISFP",
            "img-url":"https://i.esdrop.com/d/1ag7i18XfH.png"
        },
        "ENTP":{
            "type_des":"탑 아이돌 급 멘탈, 소통형 스트리머",
            "desc":"항상 새로운 콘텐츠를 추구하는 당신, 악플에도 흔들리지 않는 멘탈 갑 소통형 스트리머에 기질이 보입니다.\n\n시청자와 소통하고 끊임없이 밈을 소비, 재창조하는 당신은 특정 커뮤니티에서 인기를 끌어 시청자가 대량 유입될 가능성이 높습니다.\n\n굳센 멘탈과 타고난 유잼 입담으로 재미부터 편집까지 완벽한 천상계 스트리머를 도전해 보는 것도 좋겠네요.",
            "best-combi":"그저 GOD, 유니버스 창시형 너튜버",
            "worst-combi":"목소리 맛집, 힐링형 ASMR",
            "best-comment":"아니 이 사람 왜 이렇게 웃겨요?",
            "best-combi-type":"INTJ",
            "worst-combi-type":"ISFJ",
            "img-url":"https://i.esdrop.com/d/wCIPxUHP2z.png"
        },
        "ENTJ":{
            "type_des":"걸어다니는 대기업, 천상계 너튜버",
            "desc":"완벽한 편집과 튼튼한 내용구성으로 \"이분 곧 뜨겠다.\" 성지순례의 명소가 되는 걸어 다니는 대기업 너튜버 기질이 보입니다.\n\n특유의 입담과 전문성 있는 자신만의 콘텐츠를 바탕으로 천상계 너튜버를 꿈꾸며 너튜브 알고리즘에 대해 끊임없이 연구합니다. 타고난 마당발인 당신은 주변에서 편집자를 찾을 수 있겠네요.\n\n어쩌면 당신, 너튜브를 이미 시작했을지도?",
            "best-combi":"이건 의도한 거에요, 분석형 너튜버",
            "worst-combi":"집이 최고야 짜릿해, 금손 vlog 너튜버",
            "best-comment":"성지순례 왔습니다.대박나게 해주세요",
            "best-combi-type":"INTP",
            "worst-combi-type":"ISFP",
            "img-url":"https://i.esdrop.com/d/ZXohNrBJ1s.png"
        },
        "ESFP":{
            "type_des":"아니 오늘 내가, 노가리 스트리머",
            "desc":"썰만 삼백만 개, 시청자들과 온종일 소통할 수 있는 노가리 형 스트리머의 기질이 보입니다.\n\n하루종일 수다 떨 수 있는 당신은 주변인들에게 스트리머 데뷔를 추천받기도 하며, 어쩌면 평소 호시탐탐 스트리머를 노리고 있을지도 모릅니다.\n\n타고난 소통 능력으로 노가리 스트리머가 너무 잘 어울리는 당신! 지금 이 결과를 보면서도 스트리머를 시작할 생각에 혹하고 계시진 않은가요?",
            "best-combi":"너 밴, 매니저형",
            "worst-combi":"그저 GOD, 유니버스 창시형 너튜버",
            "best-comment":"00님 일상 썰 풀어주세요!",
            "best-combi-type":"ISTJ",
            "worst-combi-type":"INTJ",
            "img-url":"https://i.esdrop.com/d/fMhd23Er9u.png"
        },
        "ESFJ":{
            "type_des":"내돈내산, 현실적 리뷰 너튜버",
            "desc":"새로 나온 제품, 논란이 된 제품을 직접 구매하여 내 돈 내산 콘텐츠를 찍는 얼리어답터 스트리머의 기질이 보입니다.\n\n남들보다 핵심을 자세히 설명하는 것에 재능이 있는 당신은 시청자와 열렬히 소통하며 제품을 추천하는 소통 왕 스트리머를 도전해 보는 것도 좋을 듯합니다.\n\n당신의 재치 있는 입담과 냉정한 신제품 리뷰를 믿는 시청자들이 점차 늘어가면 광고 제의는 많이 받지만, 광고를 잘 찍지 않는 신뢰성 5,000%의 리뷰 너튜버가 될지도 모르겠네요.",
            "best-combi":"이건 못참지, 백과사전형 너튜버",
            "worst-combi":"이건 의도한 거에요, 분석형 너튜버",
            "best-comment":"공짜로 보기 죄송해서 데이터 키고 봤습니다.",
            "best-combi-type":"ISTP",
            "worst-combi-type":"INTP",
            "img-url":"https://i.esdrop.com/d/d9Ev1A6Tve.png"
        },
        "ESTP":{
            "type_des":"여러분 여기 찐입니다, 맛집 발굴형 너튜버",
            "desc":"가격부터 서비스까지 완벽한 맛집을 찾아 떠나는 발굴형 모험가 너튜버의 기질이 보입니다.\n\n뛰어난 관찰력과 타고난 정보통으로 항상 새로운 맛집을 찾아 리뷰를 하는 당신, 맛 설명을 한 번에 쏙쏙 들어오게 해내는 재능을 가지고 있네요.\n\n맛없는 음식을 먹을 때와 맛있는 음식을 먹을 때 표정 갭 차이에 치여 유입되는 시청자가 많을지도 모르겠어요.",
            "best-combi":"목소리 맛집, 힐링형 ASMR",
            "worst-combi":"나만 알고싶어..유명해지지마, 소유하고 싶은 너튜버",
            "best-comment":"가서 돈쭐내주자. 이런 맛집은 돈으로 혼내줘야지 ㅋㅋ",
            "best-combi-type":"ISFJ",
            "worst-combi-type":"INFP",
            "img-url":"https://i.esdrop.com/d/tPYByZpQ2n.png"
        },
        "ESTJ":{
            "type_des":"신입받아라, 경력직 신입 너튜버",
            "desc":"자신이 가진 본업 전문지식을 콘텐츠로 풀어내는 전문가형 너튜버의 기질이 보입니다.\n\n너튜버 데뷔와 동시에 시청자들에게 깔끔한 편집, 튼튼한 내용 구성으로 현실적 정보를 전달해 경력직 신입이라는 타이틀을 얻을지도 모르겠어요.\n\n매달 새로운 정보를 정산하며 여러 가지 콘텐츠를 동시에 운영하는 당신, 재생목록을 완벽하게 정리해 시청자들의 마음을 편-안 하게 만들어 주네요.",
            "best-combi":"집이 최고야 짜릿해, 금손 vlog 너튜버",
            "worst-combi":"나만 알고싶어..유명해지지마, 소유하고 싶은 너튜버",
            "best-comment":"신-입 x 5",
            "best-combi-type":"ISFP",
            "worst-combi-type":"INFP",
            "img-url":"https://i.esdrop.com/d/VqAoOwuK1X.png"
        },
        "INFP":{
            "type_des":"나만 알고싶어..유명해지지마, 소유하고 싶은 너튜버",
            "desc":"나만의 감성으로 재미있는 콘텐츠를 만들어가는 내적관종 너튜버입니다.\n\n평소에도 너튜브를 보면서 너튜버를 하고 싶다고 생각하시지 않으셨나요? 문득 충동적으로 너튜브를 시작할지도 모르겠어요.\n\n독특한 입담과 웃음 코드로 내적 관종력을 뽐내, 팬들 사이에서 '유명해지지 마, 아니 유명해져….' 하는 내적 갈등을 유발합니다.",
            "best-combi":"제가 보기에는, 정보전달형 스트리머",
            "worst-combi":"경력직 신입 너튜버",
            "best-comment":"당신.. 유명해지지마, 아니 유명해져.. 유명해지지마..",
            "best-combi-type":"ENFJ",
            "worst-combi-type":"ESTJ",
            "img-url":"https://i.esdrop.com/d/M97S9LElcp.png"
        },
        "INFJ":{
            "type_des":"너튜브는 나의 일기장! 챌린지형 너튜버",
            "desc":"감성적이면서도 깔끔하게 자신의 일상을 기록으로 남기며 영상미를 뽐내는 너튜버입니다.\n\n공부 vlog 나 헬스 챌린지처럼 자신만의 목표를 이뤄내는 일상을 너튜브에 올려 시청자의 의욕을 끌어올립니다.\n\n자기 계발도 하고 너튜브까지 하는 열정에 감화된 시청자들이 댓글에서 함께 챌린지를 도전하며 인기를 끌지도 모르겠어요.",
            "best-combi":"띵겜부터 똥겜까지, 종합 게임 스트리머",
            "worst-combi":"여러분 여기 찐입니다, 맛집 발굴형 너튜버",
            "best-comment":"출석 체크 합니다!\n\n대댓으로 출석 쭉 올릴게요 함께 달려요!",
            "best-combi-type":"ENFP",
            "worst-combi-type":"ESTP",
            "img-url":"https://i.esdrop.com/d/GnyjudeopE.png"
        },
        "INTP":{
            "type_des":"이건 의도한 거에요, 분석형 너튜버",
            "desc":"관심이 있으면 파헤치는 당신, 분석형 너튜버의 기질이 보입니다.\n\n영화나 뮤비를 보고 어떤 의미를 담고 있는지를 파헤치고 설명하는 당신은 사람들이 영화를 보고 찾아오는 리뷰 맛집이기도 합니다.\n\n사람들이 리뷰 요청을 해도 자신이 관심 있는 것에 집중하는 당신은 그 분야 분석에 TOP이 될 수도 있겠네요!",
            "best-combi":"걸어다니는 대기업, 천상계 너튜버",
            "worst-combi":"내돈내산, 현실적 리뷰 너튜버",
            "best-comment":"00님 이정도면 기획자 본인 아니신지?\n\n해석 너무 잘하시는거 아니에요?",
            "best-combi-type":"ENTJ",
            "worst-combi-type":"ESFJ",
            "img-url":"https://i.esdrop.com/d/glRpIsncmQ.png"
        },
        "INTJ":{
            "type_des":"그저 GOD, 유니버스 창시형 너튜버",
            "desc":"자신만의 유니버스를 설계하며 세계관 펼치기에 진심인 완벽 주의형 너튜버 기질이 보입니다.\n\n얼굴을 공개하지 않고 시청자들의 궁금증을 자아내는 내적관종형 너튜버를 한다면\n당신의 매력에 스며든 구독자층이 점차 쌓여 본인이 유행의 중심이 될지도 모르겠네요.",
            "best-combi":"탑 아이돌 급, 소통형 스트리머",
            "worst-combi":"아니 오늘 내가, 노가리 스트리머",
            "best-comment":"치밀함에 소름 돋는다..\n\n이정도면 인류도 이분이 만든거 아니냐",
            "best-combi-type":"ENTP",
            "worst-combi-type":"ESFP",
            "img-url":"https://i.esdrop.com/d/6MnxaFK0K5.png"
        },
        "ISFP":{
            "type_des":"집이 최고야 짜릿해, 금손 vlog 너튜버",
            "desc":"집에서 꾸려나가는 소소한 일상을 vlog로 담아 영상미를 뽐낼 유튜버입니다.\n\n차분한 색감, 섬세한 영상미와 예술적인 재능을 뽐내는 금손 콘텐츠로, 외국어 자막을 단다면 외국 시청자의 유입이 폭발적으로 증가합니다.\n\n하지만 착한 감성에 그렇지 못한 태도로 엉뚱미를 뽐내는 당신은 한국어 모르면 감성적인 영상으로 SNS에서 인기를 끌겠네요.\n\n당신의 댓글 창에 한국인을 찾는 시청자들이 점차 늘어갈지도?",
            "best-combi":"신입받아라, 경력직 신입 너튜버",
            "worst-combi":"탑 아이돌 급, 소통형 스트리머",
            "best-comment":"저 외국인들은 모르겠지..\n\n이 영상이 이렇게 웃기다는걸...\n\n지옥의 금손",
            "best-combi-type":"ESTJ",
            "worst-combi-type":"ENTP",
            "img-url":"https://i.esdrop.com/d/2lLHqgKFb1.png"
        },
        "ISFJ":{
            "type_des":"목소리 맛집, 힐링형 ASMR",
            "desc":"차분하며 친근한 목소리로 사람들에게 마음의 안정을 주는 당신은 힐링 형 ASMR의 기질이 보입니다.\n\n공감 능력이 뛰어나며 남들의 이야기를 잘 들어주기도 하는 당신의 유튜브 댓글은\n\"오늘 회사에서 힘들었는데 이 영상으로 하루 마무리합니다.\" ,\n\"OO님 덕분에 치유 받고 갑니다\"로 도배되는 힐링 명소네요.",
            "best-combi":"여러분 여기 찐입니다, 맛집 발굴형 너튜버",
            "worst-combi":"탑 아이돌 급, 소통형 스트리머",
            "best-comment":"잘자요.. 드르륵 탁....잘자요.. 드르륵 탁....잘자요.. 드르륵 탁....잘자요.. 드르륵 탁....",
            "best-combi-type":"ESTP",
            "worst-combi-type":"ENTP",
            "img-url":"https://i.esdrop.com/d/36vDkViZZg.png"
        },
        "ISTP":{
            "type_des":"이건 못참지, 백과사전형 너튜버",
            "desc":"세상에 모든 궁금증을 해결하고, 궁금하지 않았던 정보까지 궁금하게 만드는 궁금증 해결사, 백과사전 형 너튜버의 기질이 보입니다.\n\n전문성과 호기심으로 무장한 콘텐츠를 만들며 자기만족을 느끼는 타입입니다. 썸네일과 제목 어그로가 당신의 무기일지도?\n\n어느 날 갑자기 알고리즘에 선택을 받아 유입되는 시청자가 댓글을 도배할 수도 있겠네요.",
            "best-combi":"내돈내산, 현실적 리뷰 너튜버",
            "worst-combi":"이건 의도한 거에요, 분석형 너튜버",
            "best-comment":"나 : 아 이제 자야지\n\n유튜브 : 야 ㅋㅋ 이거 궁금하지 않냐",
            "best-combi-type":"ESFJ",
            "worst-combi-type":"INTP",
            "img-url":"https://i.esdrop.com/d/pd1yzkNRwt.png"
        },
        "ISTJ":{
            "type_des":"너 밴, 매니저형",
            "desc":"너튜버에 관심은 있지만 시작하기는 망설여지지 않나요? 규칙적인 일을 좋아하는 당신은 오히려 관리자, 편집자에 관심이 있을 수도 있겠네요.\n\n계획을 잘짜고 정리 정돈을 잘하는 당신은 너튜버나 스트리머에게 가장 필요한 존재로 댓글 창에서 스트리머를 혼내는 포지션일지도 모르겠어요.\n\n문득 관리에 익숙해지면 너튜브를 시작하게 될지도?",
            "best-combi":"아니 오늘 내가, 노가리 스트리머",
            "worst-combi":"너튜브는 나의 일기장! 챌린지형 너튜버",
            "best-comment":"(당근 흔들기)",
            "best-combi-type":"ESFP",
            "worst-combi-type":"INFJ",
            "img-url":"https://i.esdrop.com/d/SihUPySA0d.png"
        }
    };
    return result_data;
}

export const startImgSrc = '../../public/start-logo.png'
export const getStartImgSrc = () => '../../public/start-logo.png'
export const getData = () => // 통신 예시 
    axios.get('https://3.34.213.122/')
      .then(res => console.log(res)) // success
      .catch(res => console.log(res)) // err