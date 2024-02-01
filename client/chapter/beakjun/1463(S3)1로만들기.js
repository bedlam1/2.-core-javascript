let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let num = Number(input[0]);

const stk = [];
stk.fill(null,0,10000);
let top = -1;

function Push(data){
    top++;
    stk[top] = data;
}

function pup(){
    stk[top] = null;
    top--;
}



