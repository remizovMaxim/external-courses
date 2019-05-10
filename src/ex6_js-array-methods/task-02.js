/*
EPAM PracticWork #6 task-02
Remizov Maxim, 2019
*/
function mySome(array, callback){ 
  for(var i=0;i<array.length;i++){
     var item = array[i];
     if(callback(item, i, array))return true;     
  }
  return false;
}
module.exports = mySome;