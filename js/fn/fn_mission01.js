/*fn_mission01.js 함수(function)*/
//함수 정의
function abs(n1){
    console.log(n1 < 0 ? - n1 : n1);
}

//함수 호출
abs(10);// 콘솔 10
abs(-20)// 콘솔 20

/*
function abs2(num) {
    let val = num;
    if(val < 0 ) {val= -val;}
    console.log(val);
}
//여기서 사용시 원본은 건들지 않는다.(원본보존)
파라미터(매개변수) 값을 변경하고 싶다면 복사해서 사용
{ }안에 새로운 변수를 선언

*/
