"use strict";

// Задачи:

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). 
// Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. 
// Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). 
// Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). 
// Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). 
// Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:
// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
// Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:
// findMaxNumber(1, 5, 6.6, 11); =>  11
// findMaxNumber(1, 5, '6', '10');  =>  0

// У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)

// Место для первой задачи
function getTimeFromMinutes(number) {
    if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }
    const hours = Math.trunc(number / 60);
    const min = number - (hours * 60);

    let hourstr;
    if (hours === 1) {
        hourstr = "час";
    } else if (hours === 2 || hours === 3 || hours === 4) {
        hourstr = "часа";
    } else {
        hourstr = "часов";
    }

    return `Это ${hours} ${hourstr} и ${min} минут`
}

console.log(getTimeFromMinutes(150));

// Место для второй задачи
function findMaxNumber(one, two, three, four) {
    if (typeof (one) !== "number" || typeof (two) !== "number" || typeof (three) !== "number" || typeof (four) !== "number") {
        return 0;
    } else {
        return Math.max(one, two, three, four);
    }
}

console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(1, 5, '6', '10'));