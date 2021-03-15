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
    french: [],
    arts: [5, 4, 5, 5]
}

getAverageScore(data)

function getAverageScore(data) {

    let marksArray; //массив оценок в предмете
    let averageMark; //средняя оценка по предмету
    let dataKeys = Object.keys(data); //массив с предметами
    let dataMarks = []; //массив со средними оценками соответственно списку предметов
    let average; //общий средний балл по всем предметам
    let newData = {};
    
  /**
  * @function Вспомогательная функция для нахождения 
  * среднего арифметического из массива чисел 
  * 
  * @param {Array} marks - любой готовый массив оценок 
  * @returns {Number} среднее арифметическое
  */
    function getAverageMark(marks) {
        
        let sum = 0;
        let length = marks.length;
    
        for (let i = 0; i < length; i++) {
            if (typeof marks[i] !== 'number') {
                console.log('Некорректно введены одна или несколько оценок!');
                return;
            } else if (!marks[i]) {
                marks.push(0);
            }
            sum += marks[i];    
        }
        
        if (Number.isNaN(sum / length)) {
            return 0;
        } else return sum / length;
    }

  /**
  * @name newData - создание нового объекта из полученных массивов:
  * @property из dataKeys
  * @values  из dataMarks
  * 
  * + Добавление нового свойства в новый объект
  */
    for (let discipline in data) {
        marksArray = data[discipline];
        averageMark = getAverageMark(marksArray);
        dataMarks.push(averageMark);
    }  
    
    for (let i = 0; i < dataKeys.length; i++) {
      newData[dataKeys[i]] = dataMarks[i];
    }

    average = getAverageMark(dataMarks);
    newData['average'] = average;
    
    console.log(newData); 
}



//КОД ДЛЯ РАСШИФРОВКИ

let secretData = {
    aaa: 0,
    bbb: 1
}
let decodedData = {};

let secret = getPersonData(secretData);

function getPersonData(secretData) {
  let secret;
  let firstName = secretData.aaa;
  let lastName = secretData.bbb;
  return secret = [firstName, lastName];
}

function getDecodedValue(secret) {
  if (secret[0] == 0) {
    decodedData.firstName = 'Родриго';
  } else {decodedData.firstName = 'Эмильо';}

  if (secret[1] == 0) {
    decodedData.lastName = 'Родриго';
  } else {decodedData.lastName = 'Эмильо';}

  return decodedData;
}

getDecodedValue(secret)