/*
EPAM PracticWork #6 task-02
Remizov Maxim, 2019
*/
function mySome(array, callback){
 var res=false;
  array.forEach(function(item, i, array){    
     if(callback(item, i, array)===true) res = true;
  })
  return res;
}
module.exports = mySome;