/*
EPAM PracticWork #4 task-02
Remizov Maxim, 2019

Написать функцию, которая создает пустой объект, но без прототипа.
*/
var createObj = function (){
return Object.create(null);
}
module.exports = createObj;