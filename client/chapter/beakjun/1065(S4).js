let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let num = Number(input[0]); 

function solution(num){
    let stNum;
    let count=99;
    let diff1;
    let diff2;

    if(num<100){
        return num;
    }
    else{
        for(let i = 100; i<num+1; i++){
            stNum = String(i);
            diff1 = stNum[2] - stNum[1];
            diff2 = stNum[1] - stNum[0];
            if(diff1 === diff2){
                count++;
            }
        }
    }

    return count;
}

console.log(solution(num));