'use strict';
let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать? Простые, Сложные или Интерактивные?");
let screensPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice = screensPrice + servicePrice1 + servicePrice2;
let rollback = fullPrice * (30 / 100);
let servicePercentPrice = fullPrice - rollback;


if (fullPrice >= 30000) {
    console.log("Даем скидку в 10%");

} else if (fullPrice >= 15000 && fullPrice < 30000){
    console.log("Даем скидку в 5%");

} else if (fullPrice < 15000 && fullPrice >= 0){
    console.log("Скидка не предусмотрена");

} else if (fullPrice < 0) {
    console.log("Что то пошло не так");
}

console.log(title);
console.log(adaptive);
console.log(screens);
console.log(screensPrice);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log("Стоимость " + fullPrice);
console.log("Итоговая стоимость " + Math.ceil(servicePercentPrice));
