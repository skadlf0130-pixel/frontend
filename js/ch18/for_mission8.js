/* for_mission8.js

*/

const star = parseInt(Math.random()*5.0)+3;
console.log('star:', star);
//1번 답
let j = '';
for(let i=0; i<star; i++) {
        j += '*';
}
for(let k=0; k<star; k++){
    console.log(j);
}

console.log('-----------')
//2번 답
for(let i=0; i<star; i++) {
    let str = '';
    for(let k=0; k<star; k++) {
        str += '*'
    }
    console.log(str);
}
console.log('-----------')
//3번 
let str2 = '';
for(let i=1; i<=star*star; i++) {
    str2 += '*';
    if(i % star === 0) {
        str2 += '\n';
    }
}
console.log(str2);
