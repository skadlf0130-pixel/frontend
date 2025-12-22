/*fn_mission04.js

*/
function random(n1, n2){
    return parseInt(Math.random()*(n2-n1))+n1;
}

const returnValue= random(3,9); //3~8 랜덤값을 리턴하는 함수
console.log('returnValue:', returnValue);

const returnValue2= random(10,15); //10~14 랜덤값을 리턴하는 함수

console.log('returnValue2:',returnValue2);