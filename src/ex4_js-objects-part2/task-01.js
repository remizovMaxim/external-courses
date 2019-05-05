/*
EPAM PracticWork #4 task-01
Remizov Maxim, 2019

Написать функцию, которая принимает имя свойства и объект и ищет данное свойство только в прототипе переданного объекта (объект создать заранее через Object.create()).
*/
var obj = {a:1},
    myObj = Object.create(obj);
var toFindProp = function (prop, paramObj){
	return Object.getPrototypeOf(myObj)[prop];
}
module.exports = toFindProp;