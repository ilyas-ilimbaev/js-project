let title = "2 урок по js";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 2000;
let rollback = 50;
let fullPrice = 30000;
let adaptive = true;

//заголовок
console.log(title);
//цена
console.log(fullPrice);
//наличие адаптивности
console.log(adaptive);
//вывод длины строки
console.log("Длина строки" + ": " + screens.length);
//вывод стоимости верстки экрана
console.log("Cтоимость верстки экрана" + ": " + screenPrice + " рублей/ " + "384 долларов/ " + "11 094 гривен/ " + "244,329 юани");
//вывод стоимости разработки сайта
console.log("Cтоимость разработки сайта" + ": " + fullPrice + " рублей/ " + "384 долларов/ " + "11 094 гривен/ " + "244,329 юани");
//работа со строкой screens
console.log(screens.toLowerCase());
console.log(screens.split(" ", 2));
//вывод процент отката посреднику за работу
console.log("Процент отката посреднику за работу" + ": " + fullPrice * (rollback/100));
