/* array.js
변수, 상수 값은 1개만 저장할수 있다.

근데 숫자 5개를 저장하여 사용해야되는 상황이 발생했을때!

여러값을 한 곳에 담기 위해 배열을 사용.
구분을 index(숫자)로 한다.
index(방 번호)는 0번 부터 시작.
//1~5까지 넣고 싶다 할때 방번호는 0~4번까지 된다

*/

let num1 = 5 ,num2 = 10, num3 = 15, num4 = 20, num5 = 25

const arr= [ 5, 10, 15, 20, 25];
//arr은 배열의 주소값이 저장
//[]대괄호는 배열 생성.배열 만들면서 공간할당&초기화까지 된 상태
const arr2= new Array(2000); 
//배열 공간만 할당. 값은 넣지 않는 상태
//Array생성자 함수
//자주쓰지는 않는다.

const arr3= []; // 비워두면 무한대?

arr3.push(1);
arr3.push(2);
arr3.push(3);
arr3.push(30);
console.log('arr3.length:', arr3.length);
//length는 자동으로 관리되는 개수 정보

console.log('arr.length:', arr.length);
console.log('arr2.length:', arr2.length);
arr[1] = 11;
console.log(arr[0], arr[1], '...', arr[4])
