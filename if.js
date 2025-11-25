// 조건문
// if문 기본 구문 if () {}
const score = 50;

// 함수정의
const pass = () => {
  console.log("합격 😊"); //좌측하단 window + . 이모티콘
};

if (score >= 60) {
  // 조건식이 true인 경우 실행할 구문
  // 합격 코드
  pass();
}
console.log("if문 종료");
