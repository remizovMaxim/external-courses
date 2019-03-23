/*
EPAM PracticWork #4 task-11
Remizov Maxim, 2019

Написать функцию, которая посчитает сколько раз каждый символ встречается в строке.
*/
var toCount = function(str){ 
  var arr = str.split('');
  var newArr = [];
  arr.forEach(function(item){
    if(newArr.indexOf(item) === -1){
      newArr.push(item);
    }
  });  
  newArr.forEach(function(itemNewArr){
    var count = 0;
    arr.forEach(function(itemArr){
      if(itemNewArr === itemArr){
        count++;
      }
    })
    console.log(itemNewArr + ': ' + count);
  })
}
module.exports = toCount;