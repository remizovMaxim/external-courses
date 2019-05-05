/*
EPAM PracticWork #4 task-10
Remizov Maxim, 2019

Написать функцию, которая принимает строку и возвращает перевернутую строку.
*/
var toReverseStr = function(str){
  var newStr = '';
  var arr = str.split('');
  arr.reverse();
  newStr = arr.join('');
  return newStr;
}
module.exports = toReverseStr;