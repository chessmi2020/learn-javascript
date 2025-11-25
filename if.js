// 조건문
// if문 기본 구문 if () {}
const score = 80;

// 함수정의
const pass = () => {
  console.log("합격 👌"); //좌측하단 window + . 이모티콘
};

//
const fail = () => {
  console.log("불합격 😫"); //좌측하단 window + . 이모티콘
};

// if (score >= 60) {
//   // 조건식이 true인 경우 실행할 구문
//   // 합격 코드
//   pass();
// } else {
//   fail();
// }

// 삼항 연산자
// 기본구문 조건식 ? "" : ""

score > 60 ? "pass()" : "fail()";
score > 60 ? pass() : fail();

console.log("if문 종료");

const isCheck = "abc" === "abc"; //문자형까지비교, 개발자 선호
console.log("🚀 ~ isCheck:", isCheck);

const userInput = ""; //빈스트링은 거짓으로 인식,false

if (!userInput) {
  //거짓인경우 실행
  // userInput의 값이 비어있는 경우
  console.log("값을 입력해주세요");
}

if (score >= 90) {
  console.log("A등급");
} else if (score >= 80) {
  console.log("B등급");
} else if (score >= 70) {
  console.log("C등급");
} else {
  console.log("😁 빵등급");
}

// 배열
// 재료 목록 데이터 ,  . <-= 객채(배열에 내장되어있는속성 사용)
const ingredients = ["김치", "버섯", "계란", "양배추"];
console.log("2번째 데이터==>", ingredients[1]);
console.log("3번째 데이터==>", ingredients[2]);
console.log("ingredients 갯수 :", ingredients.length);

//객체 key와 value로 구성된 속성들의 묶음. 이름표 - key값, 303호 - value
//하나의 존재를 가지고 세분화할 때 사용, 마이크에 건전지들어가고 주머니, 버튼들어가고 이름표 있음

const person = {
  name: "홍길동",
  nbti: "INTP",
  company: "한국도로공사",
  city: "김천",
  age: 18,
  isMale: true, //boolean 타입으로 작성시 is붙이고, 아래 name의 객체는 문자열
};
console.log("0번째 데이터 ==>", person["age"]);

console.log("company", person["company"]);
console.log("company", person.company); //닷 표기법 권장
