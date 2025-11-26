// const user라는 객체 생성
const user = {
  isLoggedIn: false,
  role: "user", // 'guest', 'admin' 값이 있을수 있음
};

// 관리자 페이지 첩근 로직
if (user.isLoggedIn && user.role === "admin") {
  console.log("🚩접근 가능");
} else {
  console.log("🤣접근 불가");
}

if (user.isLoggedIn || user.role === "admin") {
  console.log("🚩일반 페이지 접근 가능");
} else {
  console.log("🤣일반 페이지 접근 불가");
}

if (!user.isLoggedIn) {
  // 로그인되지 않은 사용자인 경우
  console.log("🤣로그인 해주세요");
}

// default parameter < = 코드를 좀더 안전하게 만들어주는 목적 있음
const sayHello = (username = "사용자", usermbti = "aaa") => {
  console.log(`반갑습니다.  ${username}님! 
  MBTI는 ${usermbti}이시군요!`);
};
sayHello("후츠릿");
sayHello("똘똘이", "INTP");

// 문제2. 함수 (parameter 정의)
// 문제: 두 개의 숫자를 입력받아 그 차이를 계산하는 함수를 화살표 함수로 작성하세요.
// 여기에 두 개의 parameter를 가진 화살표 함수를 작성하세요.
// console.log(minus(60, 20));// 예상 결과: 40
const minus = (num1, num2) => num1 - num2;
console.log(minus(60, 20)); // 예상 결과: 8

// 문제3. Q3. 함수 (argument를 사용한 함수 호출)
// 문제: 다음 함수가 주어졌을 때, 이 함수를 호출하여 "안녕하세요, [이름]님.
// 당신의 나이는 [나이]세입니다."라는 메시지를 출력하는 코드를 작성하세요.
// const introduce = (name, age) => {
//   return "안녕하세요, " + name + "님. 당신의 나이는 " + age + "세입니다.";
// };
// sayHello("똘똘이", "18");

// 재료 목록 데이터 ,  . <-= 객채(배열에 내장되어있는속성 사용)
const ingredients = ["김치", "버섯", "계란", "양배추"];
// const first = ingredients[0]
// const second = ingredients[1]
// const third = ingredients[2]

// 구조분해할당 , 위 세줄은 갯수가 많아지면 비효율적, 배열은 순서가 중요
const [first, second, third] = ingredients;
// console.log("🚀 ~ first:", first);
// console.log("🚀 ~ second:", second);
// console.log("🚀 ~ third:", third);

// todoItem 이라는 객체 생성, 객체는 key값이 중요, key값으로 데이터 받아옴,순서가 미중요
const todoItem = {
  todo: "React 학습하기",
  isComplete: false,
};
const { isComplete, todo } = todoItem;
// console.log("🚀 ~ todo:", todo);
// console.log("🚀 ~ isComplete:", isComplete);

// ... spread 펼치다, 대괄호를 없애고 요소들을 가져와서 펼친다
const copyIngredients = ["방울토마토", ...ingredients];
// console.log("🚀 ~ copyIngredients:", copyIngredients);

const copyTodoItem = {
  ...todoItem,
  description: "React 공부 할 거예요", //추가
  isComplete: true, //수정
};
console.log("🚀 ~ copyTodoItem:", copyTodoItem);
