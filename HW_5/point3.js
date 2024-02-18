//дан массив arr. Найдите среднее арифметическое его элементов.
// Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
// Решение должно быть написано функцией и принимать любое массив.

let arr = [12, 15, 20, 25, 59, 79];

function avgSumOfElements (arr){
    let avgSum=0;
    for (i = 0; i < arr.length; i++){
        avgSum = avgSum + arr[i];
    }
    return avgSum;
}
const x = avgSumOfElements(arr);
console.log(x);






