/*fn_mission02.js

abs를 러턴함수로 만들고 
콘솔에는 '절대값:리턴한값' 출력해주세요

리턴값이 10이였다
'절대값: 10' 이렇게 콘솔 출력

*/
function returnabs(n1){
    let abs = n1;
    if(abs <0) {abs = -abs;}
    return abs;
}
const abs = returnabs(10);

console.log('절대값:', abs);