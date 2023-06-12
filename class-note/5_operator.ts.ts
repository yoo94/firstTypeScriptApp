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
