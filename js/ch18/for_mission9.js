/* for_mission9.js

*/

const star = parseInt(Math.random()*5.0)+3;
console.log('star:', star);

let j = '';
for(let i=0; i<star; i++) {
        j += '*';
    console.log(j);
}

