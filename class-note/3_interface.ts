interface User {
    age:number;
    name:string;
}

//변수에 인터페이스 활용
var seho: User = {
    age:33,
    name:'세호'
}

//함수에 인터페이스 활용
function getUser(user : User){
    console.log(user)
}

const capt = {
    age: 1,
    name:'캡틴',
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스 활용
// 이함수의 규칙은 이렇게 정의하자 이런식
interface sumFunc{
    (a:number,b:number):number;
}
var sum:sumFunc;
sum = function (a:number, b:number):number {
    return a+b;
}

//인덱싱
interface StringArrayP{
    [index:number]:string;
}
var arr = ['a','b','c'];
// arr[0] = 10;// -> x

//인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
    [key:string]:RegExp;
}

var obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFiles: /\.css$/,
    jsFile: /\.js$/ 
}

Object.keys(obj).forEach(function(value){})

// 인터페이스 확장
interface Person1{
    name:string;
    age:number;
}

interface Developer2 extends Person1{
    language : string;
}

var captain : Developer2 = {
    language:'ts',
    age:100,
    name:'캡틴'
}