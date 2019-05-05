/*
EPAM PracticWork #4 task-08
Remizov Maxim, 2019

Написать функцию, которая принимает строку и возвращает данную строку, но в lowerCamelCase нотации. Каждый набор символов, отделённый пробелом, считается отдельным словом
*/
var toCamelCase = function (str){
  var newStr = '';  
  var lowStr = str.toLowerCase();
	for(i=0; i<lowStr.length; i++){
		if(lowStr[i] === ' '){            
			newStr = newStr + lowStr[i+1].toUpperCase();          
			i++;
		}else{
			newStr = newStr + lowStr[i];       
		}
	}
	return newStr;
}
module.exports = toCamelCase;