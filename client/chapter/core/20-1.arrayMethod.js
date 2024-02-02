/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const isArray = data => Array.isArray(data);


function isArray2 (data){
    return Array.isArray(data);
}


const people = [
    {
        id:0,
        name:'박가희',
        age:25,
        job:'명탐정코난 범인',
        imageSrc:'FAKq31',
    },
    {
        id:1,
        name:'김보미',
        age:64,
        job:'짜요짜요 마케터',
        imageSrc:'Gakz34',
    },
    {
        id:2,
        name:'한태희',
        age:13,
        job:'삐돌이',
        imageSrc:'Fkzoq81',
    },
    {
        id:3,
        name:'이원명',
        age:81,
        job:'이도령',
        imageSrc:'Tq9zli',
    },
]







/* 요소 순환 ---------------------------- */

// 함수를 매개변수로 받는 함수 => 콜백함수
// forEach => 배열의 메서드
let nameArray=[];

people.forEach((item, index, array)=>{
    nameArray.push(item.name);
});

// console.log(nameArray);

// 이벤트가 많을때 이런방식을 쓰면 되나요? x =>  이벤트 위임(event delegation)

const list = document.querySelectorAll('span');            // 유사배열

list.forEach((item, index)=>{
    item.addEventListener('click',()=>{
        console.log(index);
    })
})


/* 원형 파괴 ----------------------------- */

const arr = [10,100,1000,10_100];

// push
// pop
// unshift
// shift
// reverse : 기존의 배열순서를 반전, arr도 훼손
// const reverse = arr.reverse();      
// 해결법
const reverse = [...arr].reverse();

// splice : 1번째부터 두개의 아이템을 뽑아내준다. 그리고 원래배열도 훼손시키고 데이터를 넣을수도있따.
// const splice = arr.splice(1,2, 'java', 'css');


// sort
arr.sort((a,b)=>{
    return b-a;                 // 내림차순
    // return a-b;                 // 오름차순
})


// 원형 파괴 x
/* 새로운 배열 반환 ------------------------ */ 

// concat
// slice
// toSorted
// toReversed
// toSpliced

// map
// forEach랑 비슷, map은 새로운 배열을 반환한다.
const job = people.map((item,index)=>{
    // console.log(item);
    return item.job;
});




/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join