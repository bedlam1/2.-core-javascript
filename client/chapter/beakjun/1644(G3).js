// let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
// let num = Number(input[0]);

let arr=[];

console.log(arr[0]);
function primeNum(a){
    let count=0;


    for(let i = 2; i<a; i++){
        if(a%i === 0){
            return false;
        }
    }
    return true;
}

function solution(num){
    let sum=0;
    let cnt = 0;
    let i=0, j=0;
    for(i = 1; i<=num; i++){
        if(primeNum(i)){
            arr.push(i);
        }
    }
    console.log(arr);
    console.log(arr.length);
    for(i=1; i<arr.length; i++){
        console.log(i,j);
        for(j=i; sum>num; j++){
            console.log(i,j);
            sum+=arr[j];
            if(sum===num){
                cnt++;
                break;
            }
        }

        console.log(i,j);
        sum=0;
    }
    arr=[];
    return cnt;
    
}


// console.log(solution(num));


