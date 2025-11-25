console.log("Hello World");

// ctrl+ /   자바스크립트 주석 단축키

// 변수 milk caramel (뛰어쓰기허용안함) -> milkCaramel(대문자 C가 뛰어쓰기) (카멜케이스)

// const 변수 할당값 변경 불가-->안정성 확보(값변경없음)
// let   변수 할당값 변경 가능,재할당

const milkCaramel = "빨간펜"; //문자열
let youtube = "후츠릿";

// 변수에 드래그(또는 더블클릭) 후 crtl+shift+p 입력후 turbo
// 변수 콘솔에 찍을 때 단축 명령어 ctrl+alt+c
// 단축키 설정 => 좌측 톱니바퀴 모양 , keyboard shortcut-turbo insert legacy 입력

youtube = "십오야";
console.log("🚀 ~ youtube:", youtube);

console.log("milkCaramel", milkCaramel);

// 미션1: 여러분의 나이ㅏ를 age라는 변수에 담고 해당 변수를 console랩에 출력하는 코드 작성

const age = 18; //숫자
console.log("🚀 ~ age:", age);

/**
 * 데이터타입
 * 1. 문자열 (string)
 * 2. 숫자 (number)
 * 3. boolean  //참과거짓을 판별하는 데이터 타입
 * 4. null(개발자 의도로 값 비어있는 상태)/undefined(개발자 의도 상관없이 값이 비어 있는 상태 - 주로 오류)
 */

// 멀티캠퍼스 출입 여부 판별  is(개발자들 사용으로 참거짓을 판단하는 걸 직관적 인식함)
const isComming = true;
console.log("🚀 ~ isComming:", isComming, typeof isComming);

console.log("age type:", typeof age);

/**
 * 함수(재사용성) - 코드를 묶는 방법을 알려줄거야
 */
// 함수정의/선언
function sayHello() {
  // 살행할 로직들 작성
  console.log("Hello World");
}

// 함수 실행/호츨
sayHello();
sayHello();
sayHello();
