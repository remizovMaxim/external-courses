/*
EPAM PracticWork #6 task-01
Remizov Maxim, 2019
*/
function mySlice(array, begin, end){
  var newArray = [],
	  endLint = end,
	  beginLint = begin;
  array.forEach(function(item, i){   
    if(!endLint) endLint = array.length;     
    if(endLint < 0) endLint = array.length + endLint;
    if(!beginLint) beginLint = 0;
    if(beginLint < 0) beginLint = array.length + beginLint;                        
    if(i >= beginLint && i < endLint) newArray.push(item);          
  });
  return newArray;
}
module.exports = mySlice;