/*
EPAM PracticWork #4 task-13
Remizov Maxim, 2019

Написать функцию, которая возвращает случайное число в диапазоне [0; 100].
*/
var getRandom=function(){
 return Math.floor(Math.random() * (100 - 0 + 1)) + 0;
}
module.exports = getRandom;