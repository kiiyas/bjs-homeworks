'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
    //percent = percent.parseInt();
    //contribution = contribution.parseInt();
    //amount = amount.parseInt();

    //считаем тело кредита
    let credit = amount - contribution;
    
    //сколько месяцев платить
    let now = new Date();
    let monthsInCurrentYear = 12 - (now.getMonth() + 1); // осталось в этом году
    let clearYearsMonths = (date.getFullYear() - now.getFullYear() - 1) * 12; // месяцев из полных лет платежей
    let monthsInTargetYear = date.getMonth() + 1;
    let paysMonthsNumber = monthsInCurrentYear + clearYearsMonths + monthsInTargetYear;

    //рассчитываем ежемесячный платеж
    let p = percent / 100 / 12;
    let monthlyPay = credit * (p + (p / (((1 + p) ** paysMonthsNumber) - 1)));

    //рассчитываем общую сумму, которую заплатит клиент
    let preTotalAmount = paysMonthsNumber * monthlyPay;
    let totalAmount = preTotalAmount.toFixed(2);
    totalAmount = +totalAmount;
    console.log(`Общая сумма платежа за ${paysMonthsNumber} месяцев - ${totalAmount} р.`)

    return totalAmount; //суммa, которую в итоге заплатит клиент
}

function getGreeting(name) {
    if (!name) {
        name = 'Аноним';
    }    
    let greeting = `Привет, мир! Меня зовут ${name}.`

    return greeting;
}