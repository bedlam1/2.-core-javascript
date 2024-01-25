/* ---------------- */
/* For In Loop      */
/* ---------------- */



const js = {
    creator: 'Brendan Eich',
    createAt: '1995.05',
    standardName: 'ECMAScript',
    currentVersion: 2023,
    hasOwnProperty(){
        return '내가 누굴까~?'
    }
  };
  
  Object.prototype.nickName = 'tiger';
  
  // 객체의 속성(property) 포함 여부 확인 방법
  // - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

//   const key = 'valueOf';
// 밑에 방법은 js객체의 조상의 모든것도 불러온다
//   console.log( key in js ); 

// js는 hasOwnProperty를 보호해주지 않습니다.
// 생성된 객체의 method는 불안함, => 진짜 객체의 능력을 빌려씀
// console.log(js.hasOwnProperty(key));

// 조상의 객체를 오염시키지 않고 call로 조상의 객체를 빌려서 js가 씀
// console.log( ({}).hasOwnProperty.call(js,key) );와 같음
// console.log( Object.prototype.hasOwnProperty.call(js,key) );


// const list = document.querySelectorAll('span');

  // key in js



  
  
  
  // 객체 자신의 속성인지 확인하는 방법
  // - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
  
  
  // for ~ in 문
  // - 객체 자신의 속성만 순환하려면?
  // - 배열 객체 순환에 사용할 경우?


  console.clear();

  for(let key in js){
    // 훼손된 nickName을 출력하지 않게 해준다.
    if(Object.prototype.hasOwnProperty.call(js,key)){
        console.log(key);
    }
  }