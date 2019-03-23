/*
EPAM PracticWork #4 task-07
Remizov Maxim, 2019

Написать функцию, которая принимает два аргумента, строку и число. Если длина строки больше, чем переданное число, то строка урезается и в конец добавляется «…», так чтобы длина отрезанной строки вместе с «…» (многоточие) равнялась переданному числу.
*/
var toAddSimbole = function(str, num){
	var newStr;
	if(str.length > num){
		for(i=0; i<num; i++){
			newStr = str.slice(0, num-1) + '…';
		}
	}
	return newStr;
}
module.exports = toAddSimbole;