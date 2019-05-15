/*
EPAM PracticWork #6 task-04
Remizov Maxim, 2019
*/
function myFilter(array, callback){
 var res=[];
  array.forEach(function(item, i, array){    
     if(callback(item, i, array)) res.push(item);     
  })
  return res;
}
module.exports = myFilter;