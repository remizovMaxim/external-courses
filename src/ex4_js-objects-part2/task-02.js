/*
EPAM PracticWork #4 task-02
Remizov Maxim, 2019

Написать функцию, которая создает пустой объект, но без прототипа.
*/

var createObj = function (){
var newObj = Object.create(null);
return newObj;
}
module.exports = createObj;