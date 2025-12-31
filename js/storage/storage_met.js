const arr =[];
/* 미니 미션,
arr 배열에 객체 100개를 담는다.
객체는 
{
    id: 1,
    name: '홍길동1'
},
{
    id: 2,
    name: '홍길동2'
}
즉, id는 순차적 증가 이름은 홍길동{id} 저장
*/

for(let i=1; i<=100; i++){
    const obj = {
        id : i,
        name :`홍길동${i}`
    }
    arr.push(obj);
}
console.log(arr);

//find 이용하지 않고 id값이 20인 객체의 주소값을 찾아주세요.
let result = arr;
for(let i=0; i<arr.length; i++){
    if(arr[i].id===20) {
        result = arr[i];
    }
}

console.log(result);