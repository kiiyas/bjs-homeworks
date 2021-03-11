'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {

    let totalAmount;
    percent = +percent;
    contribution = +contribution;
    amount = +amount;

    //проверка корректности введенных данных
    if (typeof percent !== 'number' || percent < 0 || isNaN(percent)) {
        totalAmount = 'Введены некорректные данные в графе процентов!';
        return totalAmount;
    }

    if (typeof contribution !== 'number' || contribution < 0 || isNaN(contribution)) {
        totalAmount = 'Введены некорректные данные в графе взноса!';
        return totalAmount;
    }

    if (typeof amount !== 'number' || amount <= 0 || isNaN(amount)) {
        totalAmount = 'Введены некорректные данные в графе суммы!';
        return totalAmount;
    }

    //считаем тело кредита
    let credit = amount - contribution;
    
    //сколько месяцев платить
    let now = new Date();   
    let monthsInCurrentYear = 12 - (now.getMonth() + 1); // осталось в этом году
    let clearYearsMonths = (date.getFullYear() - now.getFullYear() - 1) * 12; // месяцев из полных лет платежей
    let monthsInTargetYear = date.getMonth() + 1;
    let paysMonthsNumber = monthsInCurrentYear + clearYearsMonths + monthsInTargetYear;

    if (paysMonthsNumber < 5) { 
        totalAmount = 'Указан слишком короткий срок!';
        return totalAmount;
    }

    //рассчитываем ежемесячный платеж
    let p = percent / 100 / 12;
    let monthlyPay = credit * (p + (p / (((1 + p) ** paysMonthsNumber) - 1)));

    //рассчитываем общую сумму, которую заплатит клиент
    let preTotalAmount = paysMonthsNumber * monthlyPay;
    totalAmount = preTotalAmount.toFixed(2);
    totalAmount = +totalAmount;
    console.log(`Общая сумма платежа за ${paysMonthsNumber} месяцев - ${totalAmount} р.`)

    return totalAmount; //суммa, которую в итоге заплатит клиент
}

function getGreeting(name) {
    if (!name) {
        name = 'Аноним';
    }  

    return `Привет, мир! Меня зовут ${name}.`;
}