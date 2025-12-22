/*fn_mission03.js

*/

function random(n1){
    let i = parseInt(Math.random()*n1);
    return i;
}

const returnValue= random(9); //0~8 랜덤값을 리턴하는 함수
const returnValue2= random(15); //0~14 랜덤값을 리턴하는 함수

console.log('returnValue:', returnValue);
console.log('returnValue2:',returnValue2);