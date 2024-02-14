/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;


// 특정 인덱스의 글자 추출
let extractCharacter = message[3];


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출 >> slice만 쓴다고 보면된다.
// Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
let slice = message.slice(1);               // ess is more.
slice = message.slice(4,-1);                // is more
console.log(slice);

// slice가 좋아서 많이 쓰진않는다.(음수값을 못쓴다.)
let subString = message.substring(2,5);     // ss 
console.log(subString);

// 이제 안쓴다.
// let subStr;


console.clear();

// 문자열 포함 여부 확인
// 문자열이 포함되어있지않으면 -1반환, 포함되어있으면 인덱스값 반환
let indexOf = message.indexOf('is');
console.log(indexOf);

// 브라우저 체크
function checkBrowser(){

    const agent = window.navigator.userAgent.toLowerCase();
    let browserName;
  
    switch (true) {
      case agent.indexOf('edge') > -1 : browserName = 'MS Edge'; break;
      case agent.indexOf('chrome') > -1 : browserName = 'chrome'; break;
      case agent.indexOf('safari') > -1 : browserName = 'Apple Safari'; break;
      case agent.indexOf('firefox') > -1 : browserName = 'FireFox'; break;
      case agent.indexOf('trident') > -1 : browserName = 'IE'; break;
    
    }
    return browserName;
  }

// indexOf랑 같은데 뒤에서부터 찾는거다
let lastIndexOf;

// 단어가 포함되어있으면 true, 포함되어있지않으면 false
let includes = message.includes('Less');

// 시작단어를 물어봄. true or false
let startsWith = message.startsWith('Less');
// 마지막 단어를 물어봄.
let endsWith;


let str = '         a       b            c       d    '

// 공백 잘라내기
let trimLeft;
let trimRight;
let trim;

// 모든 공백 제거
let reg = str.replace(/\s*/g, '');

function normalText(string){
    return string.replace(/\s*/g, '');
}


// 텍스트 반복
let repeat = message.repeat(3);


// 대소문자 변환
let toLowerCase = message.toLowerCase();
let toUpperCase = message.toUpperCase();


// 텍스트 이름 변환 유틸리티 함수 >> 정규식
let toCamelCase;
let toPascalCase;


// 앞에 '0'이 붙음, 길이가 4가 될때까지
'1'.padStart(4, '0');               // 0100