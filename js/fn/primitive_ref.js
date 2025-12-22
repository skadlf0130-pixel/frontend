/*primitive_ref.js

프라머티브타입(일반타입). vs 레퍼런스타입(참조타입/ 주소값타입)

*/

const changeNum=(n) => {
    n = 20;
}

let num = 10;
// changeNum 함수 호출하면서 num이 가지고 있는 값 전달
changeNum(num);

console.log('num:',num);

console.log('------------------')
const changeBoxNum = (box) =>{
    box = {
        num : 30
    }
    box.num = 20;
}

let box = {
    num : 10
};
console.log('box.num:',box.num);
changeBoxNum(box);
console.log('box.num:',box.num);


