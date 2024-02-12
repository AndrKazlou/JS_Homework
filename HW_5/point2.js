//Дана строка из четного количества цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
// Если это так - выведите 'да', в противном случае выведите 'нет'.
// Решение должно быть написано функцией и принимать любое число.


let number = '123322015';


function equalityOfSubStrings (number){
    let n = (number.length)/3;
    let arr = [];
    let sumArr = [];

for (let i =0; i < n; i++){
    arr[i] = number.substring(3*i,(3+3*i));
}
console.log(arr);

function sum(arr) {
    let x = 0;
    for (let i = 0; i < 3; i++) {
        x += Number(arr.slice(i, (i + 1)));
    } return  sumArr.push(x);
}

for (let i=0; i < n; i++){
    sum(arr[i]);
}
    console.log(sumArr);

let bool= 1;
for (let i = 0; i < sumArr.length-1; i++){
   if (sumArr[i] - sumArr[i+1] === 0){
       bool = bool*1;
   } else bool = bool*0;
}

if (bool === 1){
    return console.log('Yes');
} else {
   return console.log('No');
}}
equalityOfSubStrings(number);