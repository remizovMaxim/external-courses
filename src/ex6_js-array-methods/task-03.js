/*
EPAM PracticWork #6 task-03
Remizov Maxim, 2019
*/
function myEvery(array, callback){
 var res=true;
  array.forEach(function(item, i, array){    
     if(!callback(item, i, array)) res = false;
  })
  return res;
}
module.exports = myEvery;