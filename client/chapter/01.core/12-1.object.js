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
    uuid: crypto.randomUUID(),
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


function keys(obj){
  let result = [];
  for(let key in obj){
    if(Object.prototype.hasOwnProperty.call(obj,key)){
      result.push(key);
    }
  }
  return result;
}

keys(authUser);

// 객체의 value만을 모아놓은 배열

const valueList = Object.values(authUser);
console.log(valueList);


function values(obj){
  let result = [];
  for(let key in obj){
    if(Object.prototype.hasOwnProperty.call(obj,key)){
      result.push(obj[key]);
    }
  }
  return result;
}

values(authUser);


// 객체의 key와 value의 쌍을 배열로

const keyValue = Object.entries(authUser);
console.log(keyValue);

function entries(obj){
  let result = [];
  for(let key in obj){
    if(Object.prototype.hasOwnProperty.call(obj,key)){
      result.push(key, obj[key]);
    }
  }
  return result;
}

entries(authUser);


/**
 * 제거(remove 비워두기) : 프로퍼티 키의 값에 null 삽입
 * authUser.uuid = null;
 * 삭제(delete 없애버리기) : 프로퍼티 키 자체를 없애버리기
 * delete authUser.uuid;
 */

function isObject(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'object';
}


let removeProperty = (object, key) => {
  // if(typeof object === 'object'){       // 배열도 null도 object가 나와서 안전하지 못하다.
  //   object[key] = null;
  // }

  if(isObject(object)){
    object[key] = null;
  }

};

let deleteProperty = (object, key) => {
  // if(typeof object === 'object'){       // 배열도 null도 object가 나와서 안전하지 못하다.
  //   delete object[key];
  // }

  if(isObject(object)){
    delete object[key];
  }
};

removeProperty(authUser,'uuid');

deleteProperty(authUser,'uuid');



// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel


function createUser(name,age,phone){
  return{
    name:name,
    age:age,
    [calculateProperty]:phone,
  }
}

// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


const student = {
  name,
  email,
  authorization,
  isLogin,
}




// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}



/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

//  순서는 바꿀 수 없음. 변수 이름은 바꿀 수 있다.
const [a1,_,...rest] = [10,100,1000,10000]

// console.log( rest );

  // [[key,value],[key,value]]

// for(let [key,value] of Object.entries(authUser)){
//   console.log(key,value);
// }

// let a1 = arr[0];
// let a2 = arr[1];
// let a3 = arr[2];
// let a4 = arr[3];


const first = document.querySelector('.first');
const second = document.querySelector('.second');

const [firstElem,secondElem] = document.querySelectorAll('span');


// let [varibleA,varialbeB] = array;




/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */


// 순서 상관 x  변수 이름을 바꿀 수 있습니다.
// 기본값을 지정할 수 있습니다.

// 일급x 월급o 
const salaries = {
  박지성: 800,
  김보미: 150,
  이경민: 250,
  전희선: 50,
}


const {김보미:_김 = 100,전희선:전,박지성:박,이경민:이,도가현:도 = 20} = salaries;

const 김 = 'ㅁㅁ';

console.log( 도 );



// 1. 함수의 인수가(arguments) 엄청 많아질 경우 객체를 받아 처리할 수 있다.
// e.g) createUserList('seonbeom',30,'서울시 중랑구','010-2222-222')

createUserList(
  {
    name:'tiger',
    age:35,
    address:'서울시 중랑구 면목동',
    phone:'010-2222-2222'
  }
)


const defaultOptions = {
  name:'',
  age: 0,
  address:'',
  phone:''
}


function createUserList(options){

  // mixin 
  // const mix = {...defaultOptions,...options};

  // 2. 함수 안에서 객체를 구조 분해할 수 있다.     // default parameter
  const {name:n,age,address,phone,nickName = 'tiger'} = options;

  // 3. 스코프 안에 동일한 변수가 사용될 경우 alias를 지정할 수 있다.
  const name = '선범'

  // 4. shorthand property
  return {
    name:n,
    age,
    address,
    phone,
    nickName
  }
}









// 5. 어차피 들어오는게 객체라면 바로 구조 분해 할당 할 수 있지 않을까?
function createUserList2({name:n,age,address,phone,nickName = 'tiger'}){


  const name = '선범'

  return {
    name:n,
    age,
    address,
    phone,
    nickName
  }
}
