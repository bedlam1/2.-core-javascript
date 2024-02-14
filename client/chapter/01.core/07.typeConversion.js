/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const year = 2024;

console.log(String(year));               // 명시적 형 변환
console.log((year + '    ').trim());     // 암시적 형 변환, trim : 공백제거

// undefined, null

let days = null;
let weekend;

console.log(days + '');
console.log(undefined + '');

// boolean

let isClicked = false;

console.log(isClicked + '');


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;

console.log(Number(friend));

// null

let money = null;
console.log(Number(money));

// boolean

let cutie = true;
console.log(Number(cutie));

// string

let num = '250';
console.log(Number(num));           // 명시적 형 변환
console.log(num * 1);               // 암시적 형 변환
console.log(num / 1);
console.log(+num);

// numeric string

let width = '105.3px';
// width = width.replace('px', '');
console.log(Number(width));
console.log(parseFloat(width));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, '' >> false로 간주


// 위에 나열한 것 이외의 것들 
//console.clear();                    // 콘솔창 클리어
const value = prompt('값을 입력해주세요');

console.log(+value + 50);



