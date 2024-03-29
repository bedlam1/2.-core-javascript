/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

let empty = null;
console.log(typeof(empty));

// 2. 값이 할당되지 않은 상태

let undef;
console.log(typeof(undef));

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const duble = "hello";
const single = "hello";
const backtick = `hello ${10+30}`;

console.log(typeof(duble));
console.log(typeof(single));
console.log(typeof(backtick));
console.log(backtick);

// 4. 정수, 부동 소수점 숫자(길이 제약)

const integer = 150;
const floatinPointNumber = 10.331;

console.log(typeof(floatinPointNumber));

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigNumber = 123n;
console.log(typeof bigNumber);

// 6. 참(true, yes) 또는 거짓(false, no)

const isClicked = false;
console.log(typeof(isClicked));

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const obj = { name:'tiger'};
console.log(typeof(obj));

// 8. 고유한 식별자(unique identifier)



/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object

const user = {
    name: 'tiger',
    age: 27,
    sayHi: function(){              // normal function method
        console.log('hello~~');
    },
    sayHi2:()=>{                    // arrow function method
        console.log('hello2~~');
    },
    sayHi3(){                       // concise method << 얘를 더 많이씀(this가 있기 때문에)
        console.log('hello3~~');
    }
}

// Array

const arr = [1, 'a', {name:'tiger'}, 4, ()=>{}];

// function

function sum(){
    console.log(1+2);
}

sum();

// this


const str = 'hello'
console.log(str[0]);