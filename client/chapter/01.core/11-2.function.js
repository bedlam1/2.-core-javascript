/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "동의하셨습니다." );
  }
  
  function showCancel() {
    alert( "취소 버튼을 누르셨습니다." );
  }
  
  // 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
  // showOK, showCancel를 콜백함수라고 부른다. 
//   ask("동의하십니까?", showOk, showCancel);







function calcTotal(moneyA, moneyB, moneyC, moneyD) {
    return moneyA + moneyB + moneyC + moneyD;
  }
  
  const resultX = calcTotal(10000, 8900, 1360, 2100);
  const resultY = calcTotal(21500, 3200, 9800, 4700);
  const resultZ = calcTotal(9000, -2500, 5000, 11900);
  
//   console.log(resultX);
//   console.log(resultY);
//   console.log(resultZ);
  
  
  // 함수 선언 → 일반 함수 (표현)식
  let calculateTotal = function(a,b,c){

    // 함수 안에서만 접근 가능한 인수들으 ㅣ집합 객체로서 배열과 유사하여 유사 배열 이라 부른다.

    console.log(arguments);
    let sum=0;


    // // for문
    // for(let i = 0; i<arguments.length; i++){
    //     sum += arguments[i];
    // }


    // // for ... of문
    // for(let value of arguments){
    //     sum += value;
    // }


    // // 빌려쓰기 : 배열의 능력을 1회성으로 빌려쓰기 때문에 별로다
    // Array.prototype.forEach.call(arguments, function(item){
    //     sum += item;
    // })


    // // arguments의 부모를 배열로 바꿔치기 한다면? >> 부모를 객체에서 배열로 
    // arguments.__proto__ = Array.prototype;

    // arguments.forEach(function(item){
    //     sum += item;
    // })


    // arguments 객체(유사배열) => 진짜 배열(array)

    // const arr = Array.prototype.slice.call(arguments);
    // const arr = Array.from(arguments);
    
    
    const arr = [ ...arguments];

    // console.log(arr);

    // arr.forEach(function(item){
    //   sum += item;
    // })

    //arr.forEach(item => sum+=item);


    // 배열의 매서드 Array method


    // forEach => 값을 반환하지 않음. 반복의 로직만 처리
    // reduce => 값을 반환함. 모든걸 다 

    // map => 배열을 반환함.
    // rilter => 배열을 반환함.

    const map = arr.map(a=>a*2)
    console.log(map);

    const filter = arr.filter(a=>a>50)
    console.log(filter);


                    // 누적값, 현재값
    sum = arr.reduce(function(acc,cur){
      return acc+cur;
    },0)
    // 초기값
    // return arr.reduce((acc,cur)=> acc+cur)


    return sum;
  };





  //    const data = [
    //   {
    //     name:'tiger',
    //     age:30,
    //   },
    //   {
    //     name:'kindtiger',
    //     age:20,
    //   },
    //   {
    //     name:'seonbeom',
    //     age:41,
    //   }
    // ]
    
    
    
    // const tag = data.map((d)=>{
    //   return `<li> 이름 : ${d.name}</li>`
    // })
    
    
    // tag.forEach((i)=>{
    //   document.body.insertAdjacentHTML('beforeend',i)
    // })









  
  const result = calculateTotal(10, 20, 30);
  console.log(result);
  

  // 익명(이름이 없는) 함수 (표현)식
  let anonymousFunctionExpression = function(){

  };
  

  // 유명(이름을 가진) 함수 (표현)식
  // hello()로 실행X, namedFunctionExpression()로 실행가능
  let namedFunctionExpression = function hello(){

  };
  

  // 콜백 함수 (표현)식
  // let cb = function(state, success, fail){

  //   if(state){
  //     console.log(success());
  //   }
  //   else{
  //     console.log(fail());
  //   }
  // };

  // cb(true,
  //   function(){return '성공'},
  //   function(){return '실패'},
  // )

  // cb(
  //   false,
  //   ()=>'성공',
  //   ()=>'실패',
  // )



function movePage(url,success,fail){

  // if(url.includes('www')){
  //   success(url)
  // }else{
  //   fail()
  // }
  
  url.includes('www') ? success(url) : fail()
}


// movePage(
//   'https://www.naver.com',
//   url => console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`),
//   ()=> console.error('잘못된 url 정보를 입력하셨습니다.')
// )


movePage(
  'https://www.naver.com',
  function (url){
    console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`);
    
    setTimeout(() => {
      // window.location.href = url
    }, 3000);
  },
  function (){
    console.error('잘못된 url 정보를 입력하셨습니다.');
  }
)
  
  console.clear();

  // 함수 선언문 vs. 함수 (표현)식
  
  
  // 즉시 실행 함수 (표현)식
  // Immediately Invoked Function Expression : 즉시 실행 함수
  // 함수 선언 됨과 동시에 실행되는 것을 말합니다.
  // rename 가능 => closure에서도 쓰인다.






  
  // IIFE

// 캡슐화 (incapsulation)

// 함수가 선언 됨과 동시에 실행되는 것을 말합니다.

// rename 가능  => closure


// import export  => module 프로그래밍 (use strict)

const MASTER = (function(tiger){

  let uuid = 'asdas!asfaj9ASFad';


  // console.log( tiger.name, tiger.alert(),tiger.prompt() );
  

  return {
    getKey(){
      return uuid;
    },
    setKey(value){
      uuid = value
    }
  }
  
})(window);



console.log( MASTER.getKey() );



// import { css } from "../../utils/css.js";

// css()



// const css = (function(){
  
//   function getStyle(node,prop){

//     if(typeof node === 'string'){
//       node = document.querySelector(node)
//     }
//     if(typeof prop !== 'string'){
//       throw new Error('getStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
//     }
//     return getComputedStyle(node)[prop]
//   }
 
//   function setStyle(node,prop,value){
  
//     if(typeof node === 'string') node = document.querySelector(node);
  
//     if(typeof prop !== 'string'){
//       throw new Error('setStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
//     }
  
//     if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수 입력값 입니다.');
  
//     node.style[prop] = value
//   }
  
//   function css(node,prop,value){

//     return (!value) ? getStyle(node,prop) : setStyle(node,prop,value)
    
    
//   }
  

//   return css;

// })()



// 개발 팀장 : 박가희 getStyle, setStyle, css 이거 만들었으니까 가져다 쓰세용 근데,,get,set 함수는 쓰지 말고 css 함수만 사용하셔도 됩니다.


// 개발 인턴 : 박지성  getStyle() 작동은 잘됨. 컨벤션 깨짐 