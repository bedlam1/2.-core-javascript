/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */


const portableFan = {
    maker: 'fromB',
    brand: 'FD221',
    type: 'neckband',
    photo: {
      static: 'https://bit.ly/3OS50UD',
      animate: 'https://bit.ly/3P8646q'
    },
    getFullName() {
      return `${this.brand}, ${this.maker}`;
    },
  };
  
  // 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.


//   console.log(portableFan.photos.animate);
  



  // 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
  // if ('photos' in portableFan) {
  //   if ('animate' in portableFan.photos) {
  //     console.log(portableFan.photos.animate);
  //   }
  // }
  
  
  // 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.
  

  portableFan && portableFan.photo && portableFan.photo.animate


  
  // 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.


  portableFan.photo?.animate
  
  
  // 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.
  
// portableFan이 없으면 뒤에걸 실행시키지 않겠다
//   const fullName = portableFan?.getFullName();

  // getFulName이 없으면 뒤에걸 실행시키지 않겠다
  const fullName = portableFan.getFullName?.();


  console.log(fullName);
  
  // 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.
  

console.clear();


  // web API(Application Programming Interface)


  // debounce throttle >> 알아보자

  //sync(동기) & async(비동기)

// 3초뒤에 2출력(비동기적)
//   const timer = setTimeout(()=>{
//     console.log('끝났습니다.');
//   },3000);

//   // timer unset
//   clearTimeout(timer);

//   // 동기적으로 실행
//   console.log(1);

//   console.log(3);


// let count = 0;

// // 1초에 한번씩 실행
// setInterval(()=>{
//     console.log(++count);
// },1000);


// const first = document.querySelector('.first');

// let count = 0;

// const timer = setInterval(()=>{
//     first.style.transform = `translateY(-${++count}px) rotate(${++count}deg)`

//     if(count === 300){
//         clearInterval(timer);
//     }
// },1000);


const button = document.querySelector('.click');


setTimeout(() => {
  
  const template = /* html */ `
    <button type="button" class="click">click</button>
  `

  document.body.insertAdjacentHTML('beforeend',template)

}, 3000);


button?.addEventListener('click',()=>{})

  