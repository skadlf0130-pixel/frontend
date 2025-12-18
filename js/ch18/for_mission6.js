/* for_mission6.js
구구단 2단~9단까지 출력
*/

for(let i=2; i<10; i++){
    for(let m=1; m<10; m++){
        console.log(`${i} x ${m} = ${ i * m }`);        
    } if (i < 9){
        console.log('---------');
    }
}
