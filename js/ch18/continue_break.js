/*continue_break.js
continue키워드와 break 키워드 사용법 학습

break : 나를 감싸고 있는 반복문 바로 빠져 나오기
continue : for문인 경우 증감식 순서로 바로 가고, while문이었으면 조건식 순서로 바로 간다.

*/
// 1~10까지 세로로 오름차순으로 출력하는 반복문을 만들어 주세요.
for(let i= 1; i<11; i++){
    if(i==5){
        break; // 해당 조건에 루프 종료
    }
    console.log(i)
}
console.log('--------끝')

for(let i= 1; i<11; i++){
    if(i==5){
        continue;//해당 조건의 루프를 건너뜀
    }
    console.log(i)
}
console.log('--------끝')

for(let i=0; i<10; i++){
    for(let k=0; k<10; k++){
        if(k==5) {break;}
        console.log(`i:${i}, k:${k}`);
    }
}

console.log('--------끝')
//반복문에 레이블 지정, 별명 지정

outerloop:
for(let i=0; i<10; i++){
    for(let k=0; k<10; k++){
        if(k==5) {break outerloop;}
        console.log(`i:${i}, k:${k}`);
    }
}
// break에 이름을 지정하게 되면 첫번째 for문에 적용된다.
//이름 없이 적으면 가까운 break가 적용. 

console.log('--------끝')
//반복문에 레이블 지정, 별명 지정

outerloop:
for(let i=0; i<10; i++){
    for(let k=0; k<10; k++){
        if(k==5) {continue outerloop;}//break랑 같다.
      // 안쪽 for문에 내용이 없다면 같지만 있다면 다를 수 있다. (밑에 문장처럼)
        console.log(`i:${i}, k:${k}`);
    }
  //  console.log('ggg') 여기문장!
}