'use strict'

function getResult(a, b, c) {
    const d = Math.pow(b, 2) - (4 * a * c); // дискриминант
    let dSquare = Math.sqrt(d);
    let x = [];
    let denom = 2 * a;
    if (d === 0) {
        x.push( -b / denom );
    } else if (d > 0) {
        x.push( (-b + dSquare) / denom );
        x.push( (-b - dSquare) / denom );
    }    
    return x;
}

function getAverageMark(marks) {
    let averageMark = 0;
    if (marks.length == 0) {
        return averageMark;
    }

    if (marks.length > 5) {
        console.log('Оценок больше пяти! Последние оценки (${marks.slice(5)}) убраны из подсчетов.');
    }

    let marksSum = 0;
    marks = marks.slice(0, 5);
    for (let i = 0; i < marks.length; i++) {
        marksSum += marks[i];
    }
    averageMark = Math.round(marksSum / marks.length);

    return averageMark;
}

function askDrink(name, dateOfBirthday) {
    let result;
    let now = new Date();            
    let age = now.getFullYear() - dateOfBirthday.getFullYear();    

    if (now.getMonth() - dateOfBirthday.getMonth() < 0 && now.getDate() - dateOfBirthday.getDate() < 0) {
        age -= 1;
    };
        
    if (age >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }

    return result;
}