/*
EPAM PracticWork #4 task-06
Remizov Maxim, 2019

Написать функцию, которая принимает строку и возвращает эту же строку, но с заглавным первым символом каждого слова.
*/
var toUpSimbole = function(str) {
  var arr = str.split(' '), newArr = [];
  arr.forEach(function(item){
    if(item !== ''){
      newArr.push(item[0].toUpperCase() + item.slice(1));
    } 
  });
    return newArr.join(' ');
}
module.exports = toUpSimbole;