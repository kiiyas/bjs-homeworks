// 1
/**
 * @borrows String - function isPalindrome()
 * @returns {Boolean} to polindromChecker()
 * @this для обращения к текущей строке на которой применяется функция
 */
String.prototype.isPalindrome = function isPalindrome() {
    let string = this.toLowerCase().replace(/\s+/g, '').split(''); 
    console.log(string);
    return string.join('') === string.reverse().join('');
}



// 2
/**
 * @function for getting rounded average marks
 * @param {Array} marks 
 * @returns rounded average marks to initCalculateStatement()
 */
function getAverageMark(marks) {
    
    let averageMark = 0;
    if (marks.length == 0) {
        return averageMark;
    }

    let marksSum = 0;    
    for (let i = 0; i < marks.length; i++) {
        marksSum += marks[i];
    }
    averageMark = marksSum / marks.length;
    const roundedAverage = Math.round(averageMark);

    return roundedAverage;
}


// 3

function checkBirthday(birthday) {
    const now = Date.now(new Date());
    const dateOfBirthday = +new Date(birthday);
    //console.log(dateOfBirthday);
    let diff = now - dateOfBirthday;
    let age = diff / (1000 * 60 * 60 * 24 * 365.25);
    return (age >= 18);
}
