//Напишите функцию, которая вставит данные в массив с заданного места в массиве.
// Например дан массив [1, 2, 3, 4, 5] в функцию передается место 3 и [ 'a', 'b', 'c']
// получается массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let mainArr = [1, 2, 3, 4, 5];
let arr = [ 'a', 'b', 'c'] ;
let arrIndex = 3;
let subArr = new Array();

function insertIntoArray(arr, arrIndex, subArr){
 for (i = 0; i < arrIndex; i++) {
  subArr[i] = mainArr.shift(arrIndex-i);
 }

 for (i = 0; i < arr.length; i++){
  mainArr.unshift(arr[i]);
 }
 for (i = subArr.length-1; i >=0 ; i--){
  mainArr.unshift(subArr[i]);
 }
 return mainArr;
}
const updatedArray = insertIntoArray (arr, arrIndex, subArr);
    console.log(updatedArray);

