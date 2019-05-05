/*
EPAM PracticWork #4 task-14
Remizov Maxim, 2019

Написать функцию, которая возвращает целое случайное число в диапазоне от [min; max].
*/
var getRandom=function(min, max){
 return Math.floor(Math.random() * (max - min) + min);
}
module.exports = getRandom;