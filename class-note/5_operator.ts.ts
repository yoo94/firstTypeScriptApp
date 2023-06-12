// function logMessage(value : any) {
//     console.log(value);
// }

logMessage('gg');

function logMessage(value:string | number){
    if(typeof value == 'number'){
        value.toLocaleString();
    }
    if (typeof value == 'string') {
        value.toString();
    }
    console.log(value);
}

interface Developer {
    name : string;
    skill : string;
}

interface Person {
    name: string;
    age: string;
}

function askSomeone(someone : Developer | Person){
    someone.name;
    // 아래 애들은 불안정하기 때문에 공통된 속성만 접근 가능
    // someone.age;
    // someone.skill;
}

//developer
askSomeone({ name: 'dd', skill: '웹!' });
//person
askSomeone({ name: 'dd', age: '웹!' });

//인터섹션 - & 은 공통되지 않아도 모두 받을수있다.
function askSomeone2(someone: Developer & Person) {
    someone.name;
    someone.age;
    someone.skill;
}
askSomeone2({ name: 'dd', age: '웹!' ,skill:'dd'});