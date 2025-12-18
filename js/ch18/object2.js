/* object2.js
{}는 익명객체(이름이 없는). 객체를 열고 닫고 하는 문법(문서)이다라는 의미
같은이름을 전체 한번에 바꾸고 싶으면 바꾸고 싶은 문자클릭-> 우측키-> symbol or ctrl+f 누르고 변경
*/
const person1 = {
    name : '김철수',
    age : 25,
    married: false
};

console.log(typeof person1);
// typeof는 저장되어 있는 값의 타입을 알려준다
console.log(person1);

//person1이 가리키고 있는 객체의 married속성값을 true로 수정하시오

console.log(person1); 

person1.married = true;
//만약 !를 붙이게 된다면 임시로 변경된거라 name이름은 변경이 되진 않는다.
console.log(person1);

person1['age'] = 30;
const key = 'name';
person1[key] = '권수영';
//person1['name'] = '권수영'; // 이렇게 작성한 것과 같다.
console.log(person1);

//자바스크립트는 객체 생성이후에 속성추가가 가능하다.(동적할당). 
// 자바는 불가.
person1.address = '대구';
person1['height'] = 174.3;
console.log(person1);