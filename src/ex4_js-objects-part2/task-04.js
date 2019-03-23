/*
EPAM PracticWork #4 task-04
Remizov Maxim, 2019

Написать функцию, которая принимает строку и возвращает эту же строку, но с заглавным первым символом.
*/
var toUp = function (str) {
	var newStr;
	if(str[0] === ' '){
    newStr = str.slice(1);
	}
	newStr = str[0].toUpperCase() + str.slice(1);
	return newStr;
}
module.exports = toUp;
