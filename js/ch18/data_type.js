/*
자료형(데이터 유형)
-비교연사자의 결과 타입 boolean : 참(true), 거짓(false)
대부분의 비교문의 결과가 boolean타입이라 많이 사용한다.

*/
let bool1 = true;
let bool2 = false;

console.log('bool1:', bool1);
console.log('bool2:', bool2);

console.log('typeof bool1:', typeof bool1);
console.log('typeof bool1:', typeof (bool1));

/*
    불린타입은 비교 연산자의 결과로 많이 사용된다.
*/
let n1 = 10, n2 = 20;
bool1 = n1 > n2;
// >는 비교연산자
console.log('bool1:', bool1);
console.log('n1 > 10:', n1 > 10);
console.log('n1 >=10:', n1 >= 10);
console.log('-------------------');
console.log('n2 > 20:', n2 > 20);
console.log('n2 <= 20:', n2 <= 20);
console.log('-------------------');
console.log('n1 == n2:', n1 == n2);
 // == 값이 같으면 t, 다르면 f
console.log('n1 != n2:', n1 != n2);
// != 값이 같으면 f, 다르면 t
console.log('----------------논리연사자');
console.log('!(n1 == n2):', !(n1 == n2));
console.log('!(n1 != n2:)', !(n1 != n2));
//!가 들어가면 반대로 생각(not)

console.log('---------------- 논리연사자 && (AND)');
console.log('true && true:',true && true);
console.log('true && true && false:',true && true &&false);
//false가 하나라도 들어있으면 false
/* &&을 계산한때 ((true && true) &&false)으로 계산. false가 나올 만한 식을 먼저 배치하는게 성능상 유리*/
console.log('---------------- 논리연사자 || (OR)');
console.log('false || false:',false || false);
console.log('true || true  ||  false:',true  ||  true  || false);
//true가 하나라도 들어있으면 true
// &&의 계산법과 