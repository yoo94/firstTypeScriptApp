// function logText <T>(text:T):T{
//     console.log(text);
//     return text;
// }
// logText<string>('fihihihi');


// 유니온 타입만 쓰는건 좋지않음 string과 number에서 사용할수있는 api 만 사용가능하기 때문
// function logText(text: string | number){
//     console.log(text);
//     return text;
// }
// const text = logText('fihihihi');
// logText(10);
// text.split 안됨

function logText<T>(text: T):T {
    console.log(text);
    return text;
}
logText<string>('fihihihi');
logText(10);
