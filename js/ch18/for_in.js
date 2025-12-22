/*for_in.js
객체가 가지고 있는 key(속성명)를 순차적으로 준다.
*/

const person1={
    name: '김철수',
    age: 25,
    married: false
};

for(const key in person1) {
    console.log('key:', key);
}

//person1객체가 가지고 있는 value를 출력

for(const key in person1) {
    console.log(person1[key]);
}
//key값이 변경되어도 for_in문으로 해결이 가능하다.
