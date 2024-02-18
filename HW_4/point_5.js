//даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах
// совпадают  по значению и позиции
// и сколько только по значению (3487 и 3794 ---> 1 и 2 ) ваш
// код должен работать с любыми заданными 2 числами.


let number1 = 1251;
let number2 = 1711;
let equalValue = 0;
let equalValueAndPosition = 0;

const arrayOfDigits1 = Array.from(String(number1), Number);

const arrayOfDigits2 = Array.from(String(number2), Number);

console.log(arrayOfDigits1);
console.log(arrayOfDigits2);

for (let i=0; i < arrayOfDigits1.length; i++){
    for (let j=0; j < arrayOfDigits2.length; j++){
        if (arrayOfDigits1[i] === arrayOfDigits2[j]){
            equalValue = equalValue +1;
        }
    }
}
console.log(`Count of Numbers equal by value = ${equalValue}`);

for (let i = 0; i < 4; i++){
    if (arrayOfDigits1[i] === arrayOfDigits2[i]){
        equalValueAndPosition ++;
    }
    }
console.log(`Count of Numbers equal by value and position = ${equalValueAndPosition}`);