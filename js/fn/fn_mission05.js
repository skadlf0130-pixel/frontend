/*fn_mission05.js*/

//함수 정의
function printStarLine(n1){
    let i= '';
    for(let k=0; k<n1; k++){
        i+='*'
    }
    console.log('i:',i);
}


///함수 호출
printStarLine(5);
//*****

printStarLine(3);
//***

console.log('--------Square')

function printStarSquare(n1){
    for(let k=0; k<n1; k++) {
    printStarLine(n1);
    }
}


printStarSquare(5);
printStarSquare(3);


console.log('--------triangle')
function printStartriangle(n1){
    for(let j=1; j<=n1; j++){
    printStarLine(j);
    }
}


printStartriangle(5);
printStartriangle(3);