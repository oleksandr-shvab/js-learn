"use strict";

// Иногда можно встретить просто нереальные вещи, построенные только при помощи кода. Но мы с вами займемся базовой фигурой. 
// Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// (Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах. В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС)

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
let stars = 1;
const totalStars = lines * 2 + 1

for (let i = 0; i <= lines; i++) {
    let spaces = (totalStars - stars) / 2;
    result += (" ".repeat(spaces)) + ("*".repeat(stars)) + (" ".repeat(spaces)) + "\n";
    stars += 2;
}

console.log(result);



const lines2 = 5;
let result2 = '';

for (let i = 0; i <= lines2; i++) {
    for (let j = 0; j < lines2 - i; j++) {
        result2 += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result2 += "*";
    }
    result2 += "\n";
}

console.log(result2);

console.log(result == result2);