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

/**
 *  1.map    - 배열
 *  2.filter - 배열
 *  3.find   - 요소 or undefined(값이 비어있다)
 *  4.some   - boolean 배열의 요소 중 하나라도 조건을만족하면 true, 그렇지 않으면 false
 *    every  - boolean 배열의 모든 요소가 조건을 만족해야만 true, 그렇지 않으면 false
 */

const names = ["alice", "bob", "kelly", "david"];

// 각각의 요소들을 name, 많이 사용되는 메소드, 중괄호 생략 {}, 축약해서 작성
const upperNames = names.map((name) => name.toUpperCase());
console.log("🚀 ~ upperNames:", upperNames);

const filterNames = names.filter((name) => name.length >= 4);
console.log("🚀 ~ filterNames:", filterNames);

// find 단1개값 반환(조건에 맞는 값 여러개 있으면 맨처음 찾은값 반환0), 없으면 unfefined 반환
// const findName = names.find((name) => name.length >= 4);
const findName = names.find((name) => name[0] === "k");
console.log("🚀 ~ findName:", findName);

// some   - boolean 배열의 요소 중 하나라도 조건을만족하면 true, 그렇지 않으면 false
const someName = names.some((name) => name.length >= 4);
console.log("🚀 ~ someName:", someName); //true

// every  - boolean 배열의 모든 요소가 조건을 만족해야만 true, 그렇지 않으면 false
const everyName = names.every((name) => name.length >= 4);
console.log("🚀 ~ everyName:", everyName); //false

// 문제1
// function add(a, b) {
// 	return a + b;
// }

// 문제1 여기에 화살표 함수로 다시 작성하세요.
const add = (num1, num2) => num1 + num2;
console.log(add(5, 3)); // 예상 결과: 8

// 문제7 Q7. 다음 코드에서 짝수만 필터링된 새로운 배열을 만들어 주세요 (`filter`)

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => number % 2 === 0); // 여기에 코드를 작성하세요.
console.log(evenNumbers); // 예상 결과: [2, 4, 6]
