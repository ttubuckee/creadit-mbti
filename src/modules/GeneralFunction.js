import axios from 'axios'
export const getMBTIQuestions = () => {
    const questions = [
        [{'text' : '친구를 만난다', 'type' : ''}, {'text' : '여행을 간다', 'type' : ''}, 
        {'text' : '요리/베이킹을 한다', 'type' : ''}, {'text' : '게임을 한다', 'type' : ''}, ], /*  questions 1 */

        [{'text' : '지금이 기회다 최애 너튜버를 영업한다.', 'type' : 'F'}, 
        {'text' : '최애 너튜버가 누구인지 알려준다.', 'type' : 'T'}], /*  questions 2 */

        [{'text' : '나도 해보고싶다. 친구들에게 같이 해보자고 공유한다', 'type' : 'E'}, 
        {'text' : '재미있었다! 다음 영상 봐야지', 'type' : 'I'}], /*  questions 3 */

        [{'text' : '최신 유행으로 조회수를 많이 받을 수 있는 콘텐츠', 'type' : 'S'}, 
        {'text' : '너튜브에서 한번도 본적없는 신박한 콘텐츠', 'type' : 'N'}], /*  questions 4 */

        [{'text' : '내일 일어나서 봐야지 -> 내일을 위해 일단 잠을 청하고 다음날 일어나서 본다? 아무튼 수정필요', 'type' : 'J'}, 
        {'text' : '고민은 시청을 늦출뿐, 바로 재생한다', 'type' : 'P'}], /*  questions 5 */

        [{'text' : '이정도면 나도 할 수 있지 않을까? 상상해본다', 'type' : 'N'}, 
        {'text' : '저사람은 이걸로 얼마 벌었을지 생각한다', 'type' : 'S'}], /*  questions 6 */

        [{'text' : '장비를 구매하고 영상 시나리오를 작성해본다', 'type' : 'J'}, 
        {'text' : '일단 한번 찍어본다', 'type' : 'P'}], /*  questions 7 */

        [{'text' : '다른 너튜버와 합방 혹은 시청자와 실시간 소통하는 스트리밍', 'type' : 'E'}, 
        {'text' : '직접 콘텐츠를 촬영하고 편집해서 올리는 영상', 'type' : 'I'}], /*  questions 8 */

        [{'text' : '편집도 깔끔하고 발음도 좋으세요! 완전 천상 너튜버 아니냐며', 'type' : 'T'}, 
        {'text' : '영상만 봐도 인성이 너무 좋으실거 같아요!', 'type' : 'F'}], /*  questions 9 */

        [{'text' : '합방 해본적이 없는데..내가 잘 할 수 있을까?', 'type' : 'I'}, 
        {'text' : '합방이라니! 너무 재미있겠다!', 'type' : 'E'}], /*  questions 10 */

        [{'text' : '스트리밍 일정표를 만들어 시청자 커뮤니티에 올린다.', 'type' : 'J'}, 
        {'text' : '마음 내킬때마다 스트리밍을 켜서 진행한다.', 'type' : 'P'}], /*  questions 11 */

        [{'text' : '1000명 드디어 달성! 수익창출 방법을 알아본다', 'type' : 'S'}, 
        {'text' : '역시 나다. 100만까지 달리자!', 'type' : 'N'}], /*  questions 12 */

        [{'text' : '악플도 피드백이지~ 가볍게 생각하고 넘긴다', 'type' : 'T'}, 
        {'text' : '이런 말을 하다니 너무 상처받는다.. 내가 잘못하고있는건가? 고민한다', 'type' : 'F'}], /*  questions 13 */
    ];
    return questions;
}
export const getStartImageSource = () => 'https://post-phinf.pstatic.net/MjAxODA4MDlfMjk2/MDAxNTMzNzkyMjAzMzA2.eN6ftc0F8v7_-RafQW35jposp2qa1JBnaW-QScAu3GIg.JQDWvH38-z54nTEWjL2krDWtHq3giqo4stIz5Pw-V3cg.PNG/1.png?type=w1200'
export const getData = () => // 통신 예시 
    axios.get('https://3.34.213.122/')
      .then(res => console.log(res)) // success
      .catch(res => console.log(res)) // err