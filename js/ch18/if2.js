/* if.2js
조건이 여러개인 경우
if-elseif-else 는 결국 그룹이기 때문에 하나만 실행된다.
if-elseif는 else가 없다면 하나도 실행이 안 될수도 있다. 만약 실행된다면 하나만 실행된다.

if(식1){
    식 1이 true였다면 {} 부분이 모두 실행되고 if-elseif-else 그룹을 빠져나간다. 즉, 처음만 실행되고 다음 식은 실행이 되지 않는다.
    식 1이 false였다면 {} 부분이 실행되지 않고 다음 식으로 넘어간다.
} else if(식2){
    식 2이 true였다면 {} 부분이 모두 실행되고 if-elseif-else 그룹을 빠져나간다. 즉, 처음에 f여서 다음식에서 실행되고 식2에서 t가 나오면 다음 식은 실행이 되지 않는다.
    식 2이 false였다면 {} 부분이 실행되지 않고 다음 식으로 넘어간다.
} else if(식3){

} else{
    위에 있는 조건식들이 모두 false였다면 else {}부분이 모두 실행된다.(옵션 넣을수도 안 넣을수도 있다.)
}

*/


//1~10까지 랜덤값
const value = parseInt(Math.random() *10.0) + 1;
console.log('value:' + value);
console.log(`value:, ${value}`);
console.log('value: ${value}');

//value값이 8이상이라면
if(value >= 8 ) {
    console.log(`${value}값은 8이상이다.`);
} else if(value % 2 == 1) { //value값이 홀수라면
    console.log(`${value}값은 홀수 이다.`);
} else {// 8미만의 짝수들
    console.log(`${value}값은 8미만이면서 짝수이다.`)
}

//