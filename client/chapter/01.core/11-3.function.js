/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */





const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
    return moneyA + moneyB + moneyC + moneyD;
  }
  
  let resultX = calculateTotal(10000, 8900, 1360, 2100);
  let resultY = calculateTotal(21500, 3200, 9800, 4700);
  let resultZ = calculateTotal(9000, -2500, 5000, 11900);
  
//   console.log(resultX);
//   console.log(resultY);
//   console.log(resultZ);
  

  // arguments 잘안씀
  
  // 함수 선언 → 화살표 함수 (표현)식

                    // rest parameter
  let calcAllMoney = (... args) => {

    let sum = 0;

    // args 배열을 순환하여 모든 수의 합을 구하자

    // for
    // for(let i = 0; i< args.length; i++){
    //     sum += args[i];
    // }

    // for...of
    // for(let value of args){
    //     sum+=value;
    // }

    // forEach
    // args.forEach((item)=>{
    //     sum += item;
    // })

    // 인수가 하나일때 
    // args.forEach(item => sum += item)

    // reduce => 값을 반환
    // args.reduce((acc,cur)=>{
    //     acc+cur
    // },0)

    return sum;
  };

                      // rest parameter
//   let calcAllMoney = (...args) => args.reduce((acc,cur)=> acc+cur,0);
  
  console.log(calcAllMoney(10,20,30,40));


// ({}) 쓰면 return 생략
const createUser = (name,age)=>({name: name, age:age})

createUser('이경민', 41);
createUser('김보미', 43);



  
  // 화살표 함수와 this




// 자바스크립트 함수는 양면의 얼굴 (일반함수 / 생성자 함수)
const c = () => {

}

class C {

}


// arrow 함수를 쓰게되면 생성자 함수를 쓸수없다
// 생성자함수를 만들때는 class를 만들어쓰자. 

const button = () => {

}

function button2(){

}

const a= button()               // undefined >> 일반함수

// 앞에 new를 붙이면 다 객체가 생성
// const b = new button()          // button {} >> 객체 >> 생성자 함수


/**
 * 정리하면 
 * 화살표 함수 = 일반함수에 사용(함수 중심 설계)
 * 클래스 = 생성자 함수에 사용(객체 중심 설계)
 */




// 화살표 함수
// this : 가지고 있지 않음. 내 상위 영역에서 찾음

/**
 * 객체의 메서드를 정의할때 concise method 사용
 * 메서드 안에서 함수를 정의할떄 arrowFunction 효율적임 this를 잘 찾아주니까
 */

const user = {
    total:0,
    name:'박가희',
    age:9,
    address:'서울시 중랑구 면목동',
    grades: [80,40,15],
    totalGrades(){
  
      this.grades.forEach((item)=>{
        
        this.total += item
      })
  
      return this.total
      // console.log(this); // user
      
      // const sayHi = () => {
      //   console.log(this);
      // }
      
      // sayHi()
      
    }
  }










  
  
  /* 다음 함수를 작성해봅니다. -------------------------------------------------- */
  
  // pow(numeric: number, powerCount: number): number;
  let pow = (num, count) => {
    let answer=1;
    for(let i=1; i<count+1; i++){
      answer *= num;
    }
    return answer;
  }; 

  console.log(pow(2,10));




  let powExpression = (numeric, powCount) => {
    Array(powCount).fill(null).reduce((acc) =>{
      return acc*numeric;
    },1)
  };



  
  // repeat(text: string, repeatCount: number): string;
  let repeat = (text, count) => {
    for(let i=0; i<count; i++){
      console.log(text);
    }
  }; 

  repeat('안녕', 3);