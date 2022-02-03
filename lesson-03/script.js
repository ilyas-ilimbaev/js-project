'use strict';
let title = prompt("Как называется ваш проект?");
console.log(title);
let screens = prompt("Какие типы экранов нужно разработать? Простые, Сложные или Интерактивные?");
console.log(screens);
let screensPrice = +prompt("Сколько будет стоить данная работа?");
console.log(screensPrice);

let adaptive = prompt("Нужен ли адаптив на сайте?");
console.log(adaptive == "Да");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);
let servicePrice1 = +prompt("Сколько это будет стоить?");
console.log(servicePrice1);
let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);
let servicePrice2 = +prompt("Сколько это будет стоить?");
console.log(servicePrice2);

let fullPrice = screensPrice + servicePrice1 + servicePrice2;
console.log("Стоимость " + fullPrice);

let servicePercentPrice = fullPrice - (fullPrice / 100 * 30);
console.log("Итоговая стоимость " + Math.ceil(servicePercentPrice));

let terms;

if (fullPrice > 30000) {
    console.log(terms = "Даем скидку в 10%");

} else if (fullPrice > 15000 && fullPrice < 30000){
    console.log(terms = "Даем скидку в 5%");

} else if (fullPrice < 15000 && fullPrice > 0){
    console.log(terms = "Скидка не предусмотрена");

} else if (fullPrice < 0) {
    console.log(terms = "Что то пошло не так");
}