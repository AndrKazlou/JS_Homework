// найти максимальное значение числа в массиве ([3,67,15...])

let  arr = [3,7,45,66,77,11,33,4101];
let max = 0;

for (let i= 0; i < arr.length; i++)
{
    if (arr[i] >= max){
        max = arr[i];
    } else max = max;
}
console.log(max);