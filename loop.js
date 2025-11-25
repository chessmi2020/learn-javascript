// 배열
// 재료 목록 데이터 ,  . <-= 객채(배열에 내장되어있는속성 사용)
const ingredients = ["김치", "버섯", "계란", "양배추"];

// 반복문 초기값,반복조건식,증감식

// forEach, 배열에 내장되어 있는 함수
// value - 각각의 요소(해당 배열의 요소)
ingredients.forEach((value, index) => {
  // 로직 작성
  // n번 실행
  console.log(`${index}번째데이터: ${value}`);
});

// 객체로 이루어진 배열
const messages = [
  {
    username: "맛있는 수ㅖ프",
    message: "대화를 시작해볼까요?",
  },
  {
    username: "후츠릿",
    message: "그래 너는 이름이모지?",
  },
];

messages.forEach((item) => {
  // 반복 실행 구문
  // item: <= 객체를 의미
  console.log(item.message);
});
