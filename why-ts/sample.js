
// @ts-check
/**
 * 
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 * @returns 
 */

function sum(a,b){
    return a+b;
}

// js는 이게 잘못됐다고 해주진 않지만 -> @ts-check 이걸 넣어주면 타입스크립트처럼 해줌
sum(10,20)