/*equals.js 

*/

const val1 = '10', val2 = 10;

console.log('val1 == val2:',(val1 == val2));
console.log('val1 === val2:',(val1 === val2));
console.log("val1 === '10':",(val1 === "10"));
console.log('10 === val2:',(10 === val2));


// val1 과 val2를 비교하였을 때 같은 값이면 true가 나오게끔 
// 하고 싶다면 강제 형 변환을 해야된다.
console.log('parseInt(val1) === val2:', parseInt(val1) === val2);
console.log('Number(val1) === val2:', Number(val1) === val2);
