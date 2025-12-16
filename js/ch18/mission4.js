
/*let val1 = -10;
const result = val1 > 0 ? val1 : val1*-1;
console.log('result:', result);
*/
정답

let val = -10;

const result = val < 0 ? -val : val;
console.log('result:', result);

/* ?는 삼항 연산자(조건 연산자) 를 만들기 위해 꼭 필요한 기호.
조건이 맞으면 왼쪽 값을, 아니면 오른쪽 값을 선택하라는 신호*/