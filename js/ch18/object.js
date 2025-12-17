/* object.js 
자바스크립트에서 객체를 만드는 방법

객체는 (속성),(메소드) 로 이루어 질 수 있다.
키:값
key:value(속성값 or 함수(function))

person1에 저장되는 값은 객체의 주소값 하나. 

객체의 주소값을 알면 속성값 읽기/쓰기, 메소드 호출할 수 있다.
주소값. 

person1은 상수. 안에 내용은 변수라 변경가능
쉽게 생각하면 주인(상수) 가방(객체)이있는데 가방은 변할수없지안 안에 내용(변수)은 위치를 변경할수 있는것 처럼 생각하면 될듯? 
*/

const person1 = {
    name : '김철수',   //속성:속성값
    age : 25,         //속성:속성값
    married : false,   //속성:속성값
    run : function() {console.log('나는 뛴다.!!!');} //전체가 메소드 (객체안에 들어가 있으면 메소드)
};

person1.run();

const person2 = person1;
// shallow copy(얕은 복사, 주소값 복사)
//객체 자체를 복사하는 것은 deep copy(깊은 복사, 객체 복사)
// 한가방에 2명의 주인이 있는것

console.log('person1.name:', person1.name);
console.log('person2.name:', person2.name);
person1.name ='홍길동';
person2.age = 30;
console.log('person1.name:', person1.name);
console.log('person2.name:', person2.name);
console.log('person1.age:', person1.age);
console.log('person2.age:', person2.age);
