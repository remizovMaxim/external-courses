/*
EPAM PracticWork #6 task-03
Remizov Maxim, 2019
*/
function myEvery(array, callback){
  for(var i=0;i<array.length;i++){
     var item = array[i];
     if(!callback(item, i, array))return false;     
  }
  return true;
}
module.exports = myEvery;