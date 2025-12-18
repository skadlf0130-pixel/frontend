/* for_mission5.js
안녕이 7번되도록 
let i=9 , i-- 는 건들지 않고
*/
//2~9랜던값
const dan = parseInt(Math.random()*8.0)+2;
    console.log('dan:', dan);


for(let i=1; i<10; i++) {
    console.log(`${dan}x${i}=${dan*i}`);
}


for (let i = 1; i < 10; i++) {
    console.log(dan + ' x ' + i + ' = ' + (dan * i));
}