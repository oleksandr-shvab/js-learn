"use strict";

// Задача:

// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. 
// Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. 
// Причем, их количество должно быть равно переданному аргументу.

// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

// Пример:
// fib(4) => ''0 1 1 2"
// fib(7) => ''0 1 1 2 3 5 8"
// fib('7') => ''"
// fib(1) => "0"
// fib(0) => ''"

function fib(number) {
    let a = 0,
        b = 1,
        result = "0 1";

    if (typeof (number) !== "number" || number === 0 || !Number.isInteger(number)) {
        return "";
    }

    if (number === 1) {
        return "0";
    }

    for (let i = 2; i < number; i++) {
        const absum = a + b;
        a = b;
        b = absum;
        result += ` ${absum}`;
    }

    return result
}

console.log(fib(4));
console.log(fib(7));
console.log(fib('7'));
console.log(fib(1));
console.log(fib(0));
console.log(fib(2));