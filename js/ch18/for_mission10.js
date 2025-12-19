/* for_mission10.js
//예) 5
//____*
//___**
//__***
//_****
//*****

//예) 3
//__*
//_**
//***
*/

const star = parseInt(Math.random()*5.0)+3;
console.log('star:', star);

//1.풀이
for(let i=star; i>0; i--) {
    let str = '';
    for(let k=1; k<=star; k++) {
        str += k<i ? '_' : '*';        
    }
    console.log(str);
}

console.log('----------');
//2.풀이
for(let i=1; i<=star; i++) {
    let str = '';
    for(let k=star; k>0; k--) {
        if(k>i) {
            str += '_';
        } else {
            str += '*';
        }
    }
    console.log(str);
}
console.log('----------');

//3. 우정님 풀이
let aster_risk = '';
for(let i=1; i<=star; i++) {
    aster_risk += '*';
    
    let space = '';
    for(let k=star; k>i; k--) {
        space += '_';
    }
    console.log(space+aster_risk);
}






