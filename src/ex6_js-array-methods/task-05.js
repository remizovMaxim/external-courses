/*
EPAM PracticWork #6 task-05
Remizov Maxim, 2019
*/
function myMap(array, callback){
 var res=[];
  array.forEach(function(item, i, array){    
     res.push(callback(item, i, array));
  })
  return res;
}
modle.exports = myMap;