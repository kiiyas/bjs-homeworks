'use strict'

//КОД ДЛЯ РЕШЕНИЯ КВАДРАТНЫХ УРАВНЕНИЙ

//для уравнения вида ax² + bx + c введите:
let a = 2;
let b = 4;
let c = 2;

showSolutionsMessage(a, b, c);

function getSolutions(a, b, c) {
    // находим дискриминант
    const d = Math.pow(b, 2) - (4 * a * c);

    //определяем ответ (изначально незаполненный)
    let x = {
        D: d,
        roots: []
    };

    //решаем уравнение в зависимости от значения дискриминанта
    let dSqr = Math.sqrt(d);
    let denom = 2 * a;

    if (d === 0) {
        let x1 = -b / denom;
        x.roots[0] = x1;
    } else if (d > 0) {
        let x1 = (-b + dSqr) / denom;
        let x2 = (-b - dSqr) / denom;
        x.roots[0] = x1;
        x.roots[1] = x2;
    }    
    return x;
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(result);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}.`);
    console.log(`Значение дискриминанта: ${result['D']}`);
    if (result['D'] < 0) {
        console.log(`Уравнение не имеет вещественных корней.`);
    } else if (result['D'] == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result['roots'][0]}.`);
    } else if (result['D'] > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result['roots'][0]}, X₂ = ${result['roots'][1]}.`);
    }
}



//КОД ДЛЯ ЖУРНАЛА

//для заполнения табеля:
let data = {
    algebra: [5, 4, 5, 4, 5, 5, 5, 4, 5],
    geometry: [4, 4, 4, 4, 5],
    russian: [4, 3, 4, 3, 4, 4],
    physics: [5, 4],
    music: [3, 4, 4],
    english: [4, 3, 4, 5],
    poetry: [5, 4, 4, 3, 3],
    chemistry: [4, 3, 4, 3, 4, 4],
    french: [5, 4],
    arts: [5, 4, 5, 5]
}

function getAverageScore(data) {    
    
    let averageMark = 0;
    let marksArray;
    let newData;

    for (let discipline in data) { //вычисляет среднее значение к каждому предмету
        marksArray = data[discipline];
        let sum;
        for (let i = 0; i < marksArray.length; i++)
            sum += marksArray[i];
        
        averageMark = sum / marksArray.length;
    }
    
    for (let discipline in data) {
        newData = (`${discipline}: ${averageMark}`);
        //console.log(newData);
    }
    
    let marks;
    let average;

    function getAverageMark(marks) { // вычисляет среднее значение по всем предметам
        for (let discipline in newData) {
            //-сложить все значения свойств newData
            //-разделить на newData.length
        }
        
        return average;
    }

    newData.average = полученное значение
    return newData;
}

