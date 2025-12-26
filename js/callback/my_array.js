/* my_array.js 배열을 직접 만들어 보자. */

const arr =[3, 88, 76, 9, 34, 65];
const myArr = {
    '0' : 3,
    '1' : 88,
    '2' : 76,
    '3' : 9,
    '4' : 34,
    '5' : 65,
    'length' : 6,
    'forEach': function(){
        for( let i=0; i<this.length; i++){
            console.log(this[i]);
        }//this.length 쓰면 객체안에 정보들을 가져올수 있다
    }
};

console.log(arr[0], myArr[0]);
console.log(arr[5], myArr[5]);
console.log('arr.forEach:',arr.forEach);
console.log('myArr.forEach:', myArr.forEach);

myArr.forEach();