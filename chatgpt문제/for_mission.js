/* for of문 +break */
//'stop'을 만나면 반복 즉시 종료 하고, 그전 값은 출력

const words = ['go','run', 'jump', 'stop', 'walk'] ;
for(const item of words){
    if (item == 'stop') {break}
    console.log(item)
}
