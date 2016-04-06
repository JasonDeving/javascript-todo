#TodoList

```js
"use strict";
let names = ['Larry', 'Curly', 'Moe'];

let removeName = (name)=> {
  //indexOf finds where the string is on the array
  let i = names.indexOf(name)
  //splice removes index#, how many to remove
  return names.splice(i, 1);
}
let addName = (name)=> {
  names.push(name)
}
let list = () => {
	console.log(names);
}

let larry = removeName('Larry');
console.log(larry);
addName("Heather");
list();

```