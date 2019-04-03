/*
EPAM PracticWork #4 task-03
Remizov Maxim, 2019

Написать функцию, которая удаляет первый и последний пробел с строке и возвращает строку без начального и завершающего пробела.
*/
var toDeleteTab = function (str){
return str.slice(1,str.length-1);
}
module.exports = toDeleteTab;