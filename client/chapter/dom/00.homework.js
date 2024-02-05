// querySelector

const idField = document.querySelector('#idField');
const submit = document.querySelector('.btn');

// eventListener

function handleCheckId(){
    console.log(this.value);                // input id value 수집

    if(this.value === 'hello'){             // 이메일 정규표현식을 넣고
        console.log('success');
        idField.classList.remove('is-active');      // is-active클래스 삭제
    }
    else {
        console.log('error!');
        idField.classList.add('is-active');         // is-active클래스 추가
    }
}

function handleSubmit(e){
    // 제출하면 새로고침하는걸 막아줌
    // preventDefault : 태그의 기본 이벤트를 막아줌
    e.preventDefault();                 
    
    console.log('제출!!');
}

idField.addEventListener('input', handleCheckId);

submit.addEventListener('click',handleSubmit);

// classList

// preventDefault