/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우


// 동물 -> 호랑이 -> 어떤 호랑이

// getter, setter
const animal = {
    legs: 4,
    tail:true,
    stomach:[],
    get eat(){                                     // animal.eat;
        return this.stomach;
    },
    set eat(food){                                 // animal.eat = 'food';
        this.prey = food;
        this.stomach.push(food);
    },
}

const tiger = {
    pattern: '호랑이무늬',
    hunt(target){
        this.prey = target;
        return `${target}에게 조용히 접근합니다.`
    },
    __proto__: animal,
}


const 백두산호랑이 = {
    color: 'white',
    name: '백랑이',
    __proto__:tiger,
}

const 용마산호랑이 = {
    color: 'greenyellow',
    name: '선돌이',
    __proto__: tiger,
}



/**
 * tiger.__proto__.legs = 33; >> animal의 legs값이 바뀜
 * tiger.legs = 2 >> tiger객체에서 animal legs를 가져와서 legs프로퍼티 추가후
 * 값을 적용, animal legs의 값은 바뀌지 않는다.
 */

// tiger.__proto__ = animal;


// animal.setEat('과일');





// 생성자 함수 

function Animal(){
    this.legs = 4;
    this.tail = true;
    this.stomach = [];
    
    this.getEat = function(){
        return this.stomach;
    }
    this.setEat = function(food){
        this.prey = food;
        this.stomach.push(food);
    }

    // return {name:'tiger'} >> 객체는 리턴함, 말고는 리턴안함
}

const a = new Animal();


function Tiger(name){

    // Animal.call(this);              // 상속이 아닌 Animal의 능력을 모두 줘버림

    this.name=name;
    this.pattern='호랑이무늬';
    // 인스턴스 메서드 : 생성자안에서 추가하는 메서드, 생성자들은 이걸쓸수있음.
    this.hunt = function(target){
        this.prey=target;
        return `${target}에게 천천히 접근합니다.`;
    }
    // this.prototype = Animal;
}


// static 메서드 : 밖에서 선언한 메서드, 생성자들은 이걸 쓸수 없음
Tiger.bark = function(){
    return '어흥';
}


// Tiger.prototype = a;

const 한라산호랑이 = new Tiger('한돌이');





// call, apply. bind 함수의 메서드

// this를 전달해 줄수 있음

function sum(a,b){
    console.log(this);
    console.log(a+b);
}

// call이 this를 대신 전달, '안녕'이 this가 된다.
sum.call('a', 10,20);



sum.apply('a',[10,20]);


// aa에 this가 'a'인 함수를 반환, 실행을 할려면 aa()하면 this가 튀어나옴.
const aa = sum.bind('a',10,30);




// debounce, throttle

