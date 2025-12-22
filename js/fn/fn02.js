    /*fn02.js
    
    리턴(return) 함수 : 함수 호출하고 리턴할 때 값과 함께 리턴하는 함수
    보이드 함수 : 함수 호추하고 리턴만 하는 함수

    */
function voidAdd(n1,n2){
    let sum = n1+n2;
    return; //생략가능
}

function returnAdd(n1,n2){
    let sum = n1+n2;
    return sum; // 값과 함꼐 돌아가겠다. 명시를 해야되기 때문에 생략 불가능
}

const voidVal = voidAdd(10, 20); 
voidAdd(10,20);//void함수는 외롭게 있어야 한다.

const returnVal = returnAdd(10, 20);//리턴함수는 리턴값을 보통 저장한다.

console.log('voidVal:', voidVal);
console.log('returnVal:', returnVal);
