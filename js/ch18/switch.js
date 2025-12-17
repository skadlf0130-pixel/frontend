/* swtich.js

switch(숫자값) {
    case 1:
        :(클론)과 break; 키워드 사이의 코드가 실행이 된다.

        break;
    case 2:
        숫자값이 2였을 때 실행하고 싶은 코드 작성
        break;
    case 3:
        숫자값이 3였을 때 실행하고 싶은 코드 작성
        break;
    default:
        if문의 else과 같다.
        break;

    사이에 break가 없다면 만날때 까지 내려간다.
}

*/

/* 12, 1, 2 값이면 '겨울'
3,4,5 값이면 "봄"
6,7,8 값이면 "여름"
9,10,11 값이면 "가을"

*/
const mon = parseInt(Math.random() *12.0) +1;
console.log('mon:', mon);

switch(mon){
    case 1:
        console.log('겨울');
        break;
    case 2:
        console.log('겨울');
        break;       
    case 12:
        console.log('겨울');
        break;      
//-----위아래 둘중(1,2,12 or 3,4,5)에 어떤걸 써도 값은 같다.
    case 3:
    case 4:
    case 5:
        console.log('봄');
        break;   
    case 6:
        console.log('와 덥다');
    case 7:
    case 8:
        console.log('여름');
        break;   
    case 9:
        console.log('가을');
        break;   
    case 10:
        console.log('가을');
        break;   
    case 11:
        console.log('가을');
        break;
    default:
        console.log('다시 입력해 주세요.');
        break;
}
