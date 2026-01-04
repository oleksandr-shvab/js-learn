'use strict';

// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    let num = 5;
    while (num <= 10) {
        console.log(num);
        num++;
    }


}

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    let i;
    for (i = 20; i >= 10; i--) {
        if (i === 13) {
            break;
        } else {
            console.log(i);
        }
    }

}

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    let i;
    for (i = 1; i <= 10; i++) {
        if (i % 2 === 0) console.log(i);
        continue;
    }


}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    let num = 2;
    while (num <= 16) {
        if (num % 2 === 0) {
            num++;
            continue;
        } else {
            console.log(num);
        }
        num++;
    }


}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];
    let i;

    // Пишем решение вот тут
    for (i = 5; i <= 10; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    // Не трогаем
    return arrayOfNumbers;
}