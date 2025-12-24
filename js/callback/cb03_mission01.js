/*cb03_mission01.js
배열에서 70이하 값들만 있는 새로운 배열을 만들어 주세요 
*/

const arr =[3, 88, 76, 9, 34, 65];


const arr2 = arr.filter(item => item <= 70);

console.log(arr2);

//arr배열에서 앞의 4자리만 (3, 88,76,9)만 살린 새로운 배열을 만들어 주세요.

const arr3= arr.filter((item, i) => i < 4 ); 
console.log(arr3);