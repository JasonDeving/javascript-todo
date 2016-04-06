"use strict";
var names = ['Larry', 'Curly', 'Moe'];

var removeName = function(name) {
  //indexOf finds where the string is on the array
  var i = names.indexOf(name)
  //splice finds  
  return names.splice(i, 1);
}
var addName = function(name){
  names.push(name)
}
var list = function() {
   console.log(names);
}
var larry = removeName('Larry');
console.log(larry);
addName("Heather");
list();