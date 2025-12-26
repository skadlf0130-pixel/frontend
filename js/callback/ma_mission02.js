/* my_array.js 배열을 직접 만들어 보자. */


const myArr = {
    '0' : 3,
    '1' : 88,
    '2' : 76,
    '3' : 9,
    '4' : 34,
    '5' : 65,
    'length' : 6,
    'forEach': function(fn){
        for(let i=0; i<this.length; i++){
            fn(this[i],i);
        }
    },
    'filter': function(aaa) {
        const temp =[];
        for(let i=0; i<this.length;i++){
        if(aaa(this[i],i)){
            temp.push(this[i]);
        }
    }
        return temp;
    }
};
const arr2= myArr.filter((item, i) => item <= 70 ); 
console.log(arr2);//[3,9,34,65]

//함수의 주소값을 알면 함수를 호출할 수 있다.!!!!