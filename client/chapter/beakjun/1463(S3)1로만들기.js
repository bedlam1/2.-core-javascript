let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let num = Number(input[0]);

function solution(num){
    let cnt=0;

    while(num !== 1){
        console.log(num);
        if(num%3 === 0){
            num /= 3;
            cnt++;
            continue;
        }
        else if(num%3 === 1){
            num -= 1;
            num /= 3;
            cnt += 2;
            continue;
        }
        else if(num%2 === 0){
            num /= 2;
            cnt++;
            continue;
        }
        else{
            num -= 1;
            cnt++;
        }
    }

    return cnt;
}


console.log(solution(num));