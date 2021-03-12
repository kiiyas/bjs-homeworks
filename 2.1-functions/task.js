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

getAverageScore(data)
    //счетчик не зависит от количиства предметов
    //вычисляем среднее значение к каждому предмету
    function getAverageScore(data) {    

    let averageMark = 0; 
    let marksArray;
    let newData;
    let newDataArr = [];
    let marks = [];

    //вычисляем среднее значение к каждому предмету
    for (let discipline in data) { 
        marksArray = data[discipline];

    let sumInDiscipline = 0;  
    for (let i = 0; i < marksArray.length; i++) {
        sumInDiscipline += marksArray[i];
    }

    if (marksArray.length == 0) {        
        marks.push(0);
    } else { 
        averageMark = sumInDiscipline / marksArray.length; 
        marks.push(averageMark);
        }

    newData = (`${discipline}`); 
    newDataArr.push(newData);
    }

    //вычисляем среднее общее
    function getAverageMark(marks) {    
        let marksSum = 0;
        for (let i = 0; i < marks.length; i++) {
            marksSum += marks[i];
            }
        return marksSum / marks.length;
    }  
    let average = getAverageMark(marks);  

    //получаем два ассоц.массива
    console.log(newDataArr);
    console.log(marks);
    //и новое значение
    console.log(average);

    //собираем новый объект по новым данным
    let postData = {};

    for (let i = 0; i < newDataArr.length; i++) {
        let newProp = newDataArr[i];
        postData[newProp] = marks[i];
    }  
    postData['average'] = average;

    console.log(postData);  
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