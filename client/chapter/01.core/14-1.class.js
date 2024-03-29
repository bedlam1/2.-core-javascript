/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 13-1 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

function Ani(name){
    // this.name = name
  }
  
  const _a = new Ani('호돌이')
  
  
  
  /* -------------------------------------------- */
  /*                      ---                     */
  /* -------------------------------------------- */
  
  // constructor method는 최초 1회만 실행됨. (n회? x)
  
  class Animal {
  
    constructor(name){
      this.name = name;
      this.stomach = [];
      this.legs = 4;
      this.tail = true;
    }
  
    get eat(){
      return this.stomach
    }
  
    set eat(food){
      this.prey = food;
      this.stomach.push(food);
    }
  
  }
  
  
  // const a = new Animal('호돌이')
  
  
  
  class Tiger extends Animal{
    
    constructor(name){
      super(name)
      this.pattern = '호랑이무늬'
    }
    // 스태틱 메서드
    static bark(){
        return '어흥';
    }

    hunt(target){
      return `${target}에게 조심히 접근한다.`
    }
  }





    // 스태틱 메서드
    Array.from();
    Array.isArray();


    const arr = new Array();

    // 인스턴스 메서드
    arr.forEach();
    arr.reduce();




    class Array{
      static from(){

      }

      static isArray(){

      }

      forEach(){

      }

      reduce(){
        
      }
    }




