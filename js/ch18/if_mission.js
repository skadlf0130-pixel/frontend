/* if_mission.js

*/
//20~100까지 랜덤값
const score = parseInt(Math.random() *81.0) + 20;
console.log(`score:`, score);
if(score >= 90){
    console.log('A');
} else if(score >= 80){
    console.log('B');
} else if(score >= 70){
    console.log('C');
} else if(score >= 60){
    console.log('D');
} else {
    console.log('F');
}

