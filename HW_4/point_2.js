/*
2. Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу.
Пример: разбить 15 на 3 части (сумма трех чисел будет равна 15) (4,6,5) -
Ваш код должен работать с любым числом заданным в переменной (не только с 15) и с любым количеством частей
на которые надо разбить число..
а. числа изначальное число целое, числа разбивки - целые (4,6,5)
б. числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)
 */

let maxNumber=15;
let randomNumber = 0;
let part=3;

let arrNumber = [];

function getRandomIntInclusive(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}


 for (let i=0; i < (part-1); i++){
  randomNumber = getRandomIntInclusive(0, maxNumber);
  if (randomNumber < maxNumber) {
   arrNumber.push(randomNumber);
   maxNumber = maxNumber - randomNumber;
  } else {
   maxNumber = 0;
  arrNumber.push(0);
  }
  }
arrNumber.push(maxNumber);
console.log(arrNumber);

