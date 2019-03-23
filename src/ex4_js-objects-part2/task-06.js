/*
EPAM PracticWork #4 task-06
Remizov Maxim, 2019

Написать функцию, которая принимает строку и возвращает эту же строку, но с заглавным первым символом каждого слова.
*/
var toUpSimbole = function(str) {
var newStr = '';
	for (i=0;i<str.length;i++){
		if(str[i] === ' '){
			i++;
			newStr = newStr + ' ' + str[i].toUpperCase();
		}else{
			newStr = newStr + str[i];
		}
	}
	return newStr;
}
module.exports = toUpSimbole;