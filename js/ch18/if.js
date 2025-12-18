/* .p.613 if.js
조건문(분기문, if문)

if(식 - 결과타입은 boolean)
    { 만약 시깅 true라면 {} 중괄호 사이에 있는 모든 코드가 실행이 된다.
    false라면 실행이 되지 않는다.
    }

if(식) {// 식이 true인 경우 식이 되는 {}
} else {// 식이 false인 경우 {}
   }

식은 if뒤에만 적을수 있다 else뒤에는 쓰지 않는다.
식을 쓰고 싶다면 else if(식)를 사용
*/

const rVal = parseInt(Math.random() *25.0) + 1;
console.log('rVal:', rVal);
//짝수 였을때 만 "짝수입니다." 출력(if문 이용)

if(rVal % 2 == 0 ) {
console.log('짝수입니다.');}


// rVal값이 15미만이면 "15보다 작습니다."가 출력되고 아니면 "15이상입니다." (else문 이용)
if(rVal < 15) {
    console.log('15보다 작습니다.');
}
else {
    console.log('15이상입니다.');
}
