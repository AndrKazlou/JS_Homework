
//Написать функцию, которая будет записывать в массив ряд фибоначчи начиная с N члена с длинной массива M.
// В функцию надо передать номер числа фибоначчи с которого начинается массив (N) и длину,
// которой должен быть массив (M).

function getFibo(number){
   return number <=1 ? number: getFibo(number - 1) + getFibo(number - 2)
}

let n,m;
let arr = [];

 function arrFibo(n, m){
   for(i=n; i <=m; i++){
      arr.push(getFibo(i));
   }
   return arr
}
const resultArr = arrFibo(3,5);
console.log(resultArr);