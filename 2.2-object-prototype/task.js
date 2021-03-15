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
    roundedAverage = Math.round(averageMark);

    return roundedAverage;
}


// 3
/**
 * 
 * @todo 
 */
function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}
 /* ex

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

*/