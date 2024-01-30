/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let dialog = {
    position: 'fixed',
    zIndex: 10000,
    top: '50%',
    left: '50%',
    width: '60vw',
    ["max-width"]:800,
    height: '40vh',
    ["min-height"]:280,
    trasnform:'translate(-50%,-50%)',
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
    uuid: crypto.randimUUID(),
    name:'tiger',
    email:'lhj03265@naver.com',
    isSignIn:false,
    permission:'paid',
};


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// getter
console.log(authUser.uuid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);

// setter
console.log(authUser.permission = 'free');


// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// getter
console.log(authUser['uuid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']);

// setter
console.log(authUser['isSignIn'] = true);


// 해당 객체에 키값의 여부를 확인하는 방법 => in

console.log('name' in authUser);        // true


Object.prototype.nickName = 'tiger';

for(let key in authUser){
    if(Object.prototype.hasOwnProperty.call(authUser, key)){
        console.log(key);
    }
}


console.clear();


// 객체의 key만을 모아놓은 배열

const keyList = Object.keys(authUser);
console.log(keyList);


// 객체의 value만을 모아놓은 배열

const valueList = Object.values(authUser);
console.log(valueList);


// 객체의 key와 value의 쌍을 배열로

const keyValue = Object.entries(authUser);
console.log(keyValue);


// 프로퍼티 제거(remove 비워두기) or 삭제(delete 없애버리기)










// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel


// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}




/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */






/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */




