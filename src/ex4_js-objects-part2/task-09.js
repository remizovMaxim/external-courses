/*
EPAM PracticWork #4 task-09
Remizov Maxim, 2019

Написать функцию, которая принимает строку в другую строку, после переданного номера слова.
*/
var toPasteStr = function(str1, str2, num){
  var newStr = '';
  var arr = str1.split(' ');
  arr.splice(num+1, 0, str2);
  newStr = arr.join(' ');
  return newStr;
}
module.exports = toPasteStr;