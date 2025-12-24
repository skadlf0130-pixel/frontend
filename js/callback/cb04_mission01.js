/*cb04_mission01.js

arr배열에서 짝수만 +2 새로운 배열
*/

const arr =[3, 88, 76, 9, 34, 65];

const arr2 = arr.map(item=>{
    if (item % 2 === 1) {
        return item;
    }
    return item +2
})

const arr3 = arr.map(item => item % 2 ? item : item +2);

console.log(arr2);
console.log(arr3);