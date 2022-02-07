'use strict';

let title;
let screens;
let screenPrice;
let adaptive;

let fullPrice;
let allServicePrices;
let servicePercentPrice;
let rollback = 30;
let service1;
let service2;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
    title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные или Интерактивные");

    while (!isNumber(screenPrice)) {
        screenPrice = prompt("Сколько будет стоить данная работа?");
    }
    adaptive = confirm("Нужен ли адаптив на сайте?");
}
const showTypeOf = function(variable) {
    console.log(variable);
};

const getAllServicePrices = function() {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?");
        }
        sum += +prompt("Сколько это будет стоить?");
    }
    return sum;
    // return servicePrice1 + servicePrice2;
};

const getTitle = function() {
    return title.trim()[0].toUpperCase() + title.slice(1);
};

function getFullPrice() {
    return screenPrice + allServicePrices;
}

function getServicePercentPrices(rollback) {
    return fullPrice - (fullPrice * (rollback / 100));
}

const getRollbackMessage = function(price) {
    if(price >= 30000) {
        return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%";
    } else if (price < 15000 && price >= 0) {
        return  "Скидка не предусмотрена";
    } else if (price < 0) {
        return "Что то пошло не так";
    }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices(rollback);
title = getTitle();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(screens.toLowerCase().split(", "));
console.log("Итоговая стоимость " + servicePercentPrice + " рублей");