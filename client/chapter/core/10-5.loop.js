/* --------------- */
/* For Of Loop     */
/* --------------- */


/**
 * enumerable   : 열거 가능한
 * immutable    : 변하지 않은
 * iterable     : 반복가능한 >> symbol.iterator 객체가 있으면 ㅇㅇ >> 강사님 문서에 iterable 객체 단원이 있음 참고 ㅇㅇ 
 */

/**
 * for..of 진짜 진짜 진짜 좋아요 편해요 많이 써요
 * 반복 가능한 요소들에게만 사용할 수 있다.
 * 유사배열 => 배열처럼 생겼지만 실제 배열이 아닌 것
 */

const arrayLike = {
    0: 'body',
    1: 'head',
    2: 'div',
    length: 3
}

const str = `안녕하세요`;

for(let key of str){
    // console.log(key);
}







const languages = [
    {
      id: 'ecma-262',
      name: 'JavaScript',
      creator: 'Brendan Eich',
      createAt: 1995,
      standardName: 'ECMA-262',
      currentVersion: 2022,
    },
    {
      id: 'java',
      name: 'Java',
      creator: 'James Gosling',
      createAt: 1995,
      standardName: null,
      currentVersion: 18,
    },
    {
      id: 'ecma-334',
      name: 'C#',
      creator: 'Anders Hejlsberg',
      createAt: 2000,
      standardName: 'ECMA-334',
      currentVersion: 8,
    },
  ];
  
  
  // for ~ of 문
  // - 특정 조건에서 건너띄기 (continue)
  // - 특정 조건에서 중단하기 (break)
  
  for(let value of languages){

    // console.log(value);
    // console.log(value.name);
    // console.table(value);

    if(value.name.includes('Java') && value.name.length < 5) continue;
    // console.log(value.name);
  }




  
  
  const randomUser = {
    gender: 'female',
    name: { title: 'Ms', first: 'Carol', last: 'May' },
    location: {
      street: { number: 9162, name: 'Church Road' },
      city: 'Birmingham',
      state: 'Cumbria',
      country: 'United Kingdom',
      postcode: 'FO5E 4TN',
      coordinates: { latitude: '-4.3301', longitude: '155.0223' },
      timezone: { offset: '-4:00', description: 'Atlantic Time (Canada), Caracas, La Paz' },
    },
    email: 'carol.may@example.com',
    login: {
      uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
      username: 'redduck745',
      password: 'picks',
      salt: '8xzqOzAn',
      md5: '7250e4042c2367cc82487f798c7c5253',
      sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
      sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
    },
    dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
    registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
    phone: '022 1280 9236',
    cell: '07653 428700',
    id: { name: 'NINO', value: 'SH 44 98 72 L' },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/21.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
    },
    nat: 'GB',
  };



//   for(let key in randomUser){
//     if(Object.prototype.hasOwnProperty.call(randomUser,key)){
//       const L1 = randomUser[key];
//       console.log('\tL1 : ', L1);
//       if(typeof L1 === 'object'){
//         for(let key in L1){
//           if(Object.prototype.hasOwnProperty.call(L1,key)){
//             const L2 = L1[key];
//             console.log('\t\tL3 : ', L2);
//             if(typeof L2 === 'object'){
//               for(let key in L2){
//                 if(Object.prototype.hasOwnProperty.call(L2,key)){
//                   const L3 = L2[key];
//                   console.log('\t\t\tL3 : ', L3);
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }

  
  // 객체의 키, 값 순환
  // - for ~ in 문
  // - for ~ of 문
  // - 성능 비교 진단



/**
 * 객체는 for..of를 사용할 수 없다.
 * 하지만 객체도 for.of로 순환합니다.
 * 객체를 배열로만들어버림.
 */

// Object.keys()    : key만 모으는거
// Object.values()  : values만 모으는거
// Object.entries() : 





// for(let keyValues of Object.entries(randomUser)){
//     const key = keyValues[0];
//     const value = keyValues[1];

//     console.log(key ,value);
// }

// 위에거랑 같음
// for(let [key, value] of Object.entries(randomUser)){
//     console.log(key,value);
// }


for(let keyValue of Object.entries(randomUser)){
    const key = keyValue[0];
    const value = keyValue[1];
  
    console.log('L1 :',value);
  
    if(typeof value === 'object'){
  
      for(let keyValue of Object.entries(value)){
        const key = keyValue[0];
        const value = keyValue[1];
        
        console.log('\tL2 :',value);
  
        if(typeof value === 'object'){
          for(let keyValue of Object.entries(value)){
            const key = keyValue[0];
            const value = keyValue[1];
            
            console.log('\t\tL3 :',value);
          }
        }
      }
    }
  }

  /**
   * forEach, map, filter, reduce 참고
   */


