/*continue_break_mission02.js

*/
// 1~10까지 세로로 오름차순으로 출력하는 반복문을 만들어 주세요.
//문제 - 3의 배수는 건너 뛰고 8이되면 종료

for(let i=1; i<11; i++) {
    if( i % 3 === 0 ) {continue;}
    if( i === 8 ){break;}
    console.log(i);
}