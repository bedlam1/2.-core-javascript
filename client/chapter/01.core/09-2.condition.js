/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);     // false

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);


// a ||= b;        // a = a||b;

// 부정 연산자
let reverseValue = !value;

console.log(reverseValue);


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};
console.log(whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};
console.log(whichTruthy);



function login(){

    let userName = prompt('아이디를 입력해 주세요');
  
    if(!userName) return; // 함수는 return 문을 만나면 해당 코드의 실행을 종료
  
  
    if(userName.toLowerCase() === 'admin'){
      let password = prompt('비밀번호를 입력해 주세요.');
  
      if(password.toLowerCase() === 'themaster'){
        console.log('로그인 성공! 환영합니다~!');
  
      }else{
        console.log('비밀번호를 잘못 입력하셨습니다.');
      }
  
    }else if(userName === null || userName.replace(/\s*/g,'') === '' ){
      console.log('취소했습니다.');
    
  
    }else{
      console.log('올바른 사용자가 아닙니다!');
    }
  
  
  }

  login();