'use strict'

function getResult(a, b, c) {
    let d = Math.pow(b, 2) - (4 * a * c); // дискриминант
    let dSquare = Math.sqrt(d);
    let x = [];

    if (d < 0) {
        x.push('КОРНЕЙ НЕТ');
    } else if (d === 0) {
        x.push(( -Math.pow(b, 2)/ (2 * a)).toFixed(2) );
    } else if (d > 0) {
        x.push( (-b + dSquare) / (2 * a).toFixed(2) );
        x.push( (-b - dSquare) / (2 * a).toFixed(2) );
    }
    
    return x;
}

function getAverageMark(marks){
    let marksSum = 0;
    let marksNumber = marks.length;
    let averageMark;
    let totalMarks;

    function getMarksAverSum() {
        for (let i = 0; i < totalMarks.length; i++) {
            marksSum += totalMarks[i];
        }

        averageMark = Math.round(marksSum / totalMarks.length);
    }
    

    if (!marksNumber) {
        console.log('оценок нет');
        averageMark == 0;
    }

    if (marksNumber <= 5) {
        totalMarks = marks;
        getMarksAverSum();
    } else if (marksNumber > 5) {
        console.log('Оценок больше пяти! Последние оценки (${marks.slice(5)}) убраны из подсчетов.')
        totalMarks = marks.slice(0, 5);
        getMarksAverSum();
    }        
	
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
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. 
    Могу предложить вам замечательный клюквенный компот!`;
    }

    return result;
}