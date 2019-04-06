/*
EPAM PracticWork #6 task-01
Remizov Maxim, 2019
*/
function mySlice(array, begin, end){
  var newArray = [];
  array.forEach(function(item, i){   
    if(end === undefined) end = array.length;     
    if(end < 0) end = array.length + end;
    if(begin === undefined) begin = 0;
    if(begin < 0) begin = array.length + begin;                        
    if(i >= begin && i < end) newArray.push(item);          
  });
  return newArray;
}
module.exports = mySlice;