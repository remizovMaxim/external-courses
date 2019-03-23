/*
EPAM PracticWork #4 task-05
Remizov Maxim, 2019

Написать функцию, которая ищет одну строку в другой строке и возвращает true, если такая строка найдена.
*/
var toFindStr = function(str, str2) {
	if(~str.indexOf(str2)){
		return true;
	}
	return false;
}
module.exports = toFindStr;