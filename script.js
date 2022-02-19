'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let service2;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let rollback = 30;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
    title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные или Интерактивные");

    do {
        screenPrice = +prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(screenPrice));

    adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function() {
    let sum = 0;
    let servicePrice;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?");
            servicePrice = +prompt("Сколько это будет стоить?");
            while (!isNumber(servicePrice)) {
                servicePrice = +prompt("Сколько это будет стоить?");
            }
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?");
            servicePrice = +prompt("Сколько это будет стоить?");
            while (!isNumber(servicePrice)) {
                servicePrice = +prompt("Сколько это будет стоить?");
            }
        }

        sum += servicePrice;
    }
    return sum;
    // return servicePrice1 + servicePrice2;
};

function getFullPrice() {
    return screenPrice + allServicePrices;
}

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

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

const getTitle = function() {
    title = title.trim().toLowerCase();
    return title = title[0].toUpperCase() + title.slice(1);
};


function getServicePercentPrices() {
    return fullPrice - (fullPrice * (rollback / 100));
}


asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log("title", typeof title);
console.log("screenPrice", typeof screenPrice);
console.log("adaptive", typeof adaptive);

console.log(screens.toLowerCase().split(", "));
console.log("Итоговая стоимость " + servicePercentPrice + " рублей");