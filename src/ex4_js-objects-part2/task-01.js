/*
EPAM PracticWork #4 task-01
Remizov Maxim, 2019

Написать функцию, которая принимает имя свойства и объект и ищет данное свойство только в прототипе переданного объекта (объект создать заранее через Object.create()).
*/
var obj = {a:1};

var toFindProp = function (prop){
	var myObj = Object.create(obj);
	return Object.getPrototypeOf(myObj)[prop];
}
module.exports = toFindProp;