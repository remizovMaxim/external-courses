/*
EPAM PracticWork #4 task-12
Remizov Maxim, 2019

Написать функцию, которая складывает два числа и результат округляется до 3го знака после запятой. Возвращаемый результат должен быть числом.
*/
var toRound=function(num1, num2){
  return +(num1+num2).toFixed(3);
}
module.exports = toRound;