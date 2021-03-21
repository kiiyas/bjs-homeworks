'use strict'

// 2

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    sleep(100); // Замедление на половину секунды.
    return args.reduce( (sum, arg) => { return (sum += +arg); }, 0 );
}

function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
}

//compareArrays([8, 9], [6]); // false, разные значения
//compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
//compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
//compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
//compareArrays([8, 1, 2], [8, 1, 2]); // true

function memorize(fn, limit) {
    let memory = [];

    return function inMemorize (...args) {
        let findedResult = memory.find(item => compareArrays(item.args, args));
        
        if (finded !== undefined) {
            return finded.result;
          }
          while (memory.length >= limit) {
            memory.shift();
          }
          memory.push({
            args: args,
            result: fn(...args),
          });
        
        return memory[memory.length - 1].result; //последний       
        
    }
}

const sumM = sum(1, 1, 1);
//memorize(sumM, 2);
