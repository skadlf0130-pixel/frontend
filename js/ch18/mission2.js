/* 문제 : 4~12 랜던값 나올 수 있는 범위 만들어 주세요.

*수빈풀이*
let rVal = Math.random() *9+4 ; 
console.log('rVal:', rVal);

*/

//정답
const val = parseInt((Math.random() *9.0)) + 4
console.log('val:', val);