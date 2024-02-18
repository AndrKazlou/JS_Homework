/* Эмулировать игру в кубики, 2 человека по очереди бросают кубик,
каждый в итоге бросает одинаковое количество раз (должно работать с любым количеством раз заданным в переменной).
У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья. Выведите результаты в консоль.
 */

const player1 = [];

const player2 = [];
let sum1 = 0;
let sum2 = 0;

let attempt = 3;
let i = 0;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}


while (i < 3) {
    player1[i] = getRandomIntInclusive(1,6);
    sum1 = sum1 + player1[i];
    player2[i] = getRandomIntInclusive(1,6);
    sum2 = sum2 + player2[i];
    i +=1;
}

if (sum1 - sum2 > 0) {
    console.log(`Player 1 attempts: ${player1}. Total = ${sum1}`);
    console.log(`Player 2 attempts: ${player2}. Total = ${sum2}`);
    console.log('WINNER: Player 1');
} else if (sum1 - sum2 < 0){
    console.log(`Player 1 attempts: ${player1}. Total = ${sum1}`);
    console.log(`Player 2 attempts: ${player2}. Total = ${sum2}`);
    console.log('WINNER: Player 2');
} else {
    console.log(`Player 1 attempts: ${player1}. Total = ${sum1}`);
    console.log(`Player 2 attempts: ${player2}. Total = ${sum2}`);
    console.log('It\'s DRAW');
}
