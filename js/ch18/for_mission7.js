/* for_mission6.js
구구단 2단~9단까지 출력
*/

const star = parseInt(Math.random()*5.0)+3;
console.log('star:', star);

for(let i=0; i<star; i++) {
    console.log(`*`);
}

console.log('--------')

let j ='';
for(let i=0; i<star; i++) {
    j += '*';
}
    console.log(j);