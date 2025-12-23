/*fn_mission06.js*/

const sumArr = (arr) =>{
    let sum = arr[0];
    for(let i=1; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}



const arr=[10, 8, 4, 88, 65, 3, 99];
const sum=sumArr(arr);

console.log('sum:', sum);

