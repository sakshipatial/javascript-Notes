localStorage.setItem('name','sakshi')

let key=prompt("enter key")
let value=prompt("enter value")
localStorage.setItem(`${key}`,`${value}`);
console.log(`${localStorage.getItem(key)}`)// by using this method you can get value stored in particular key.

// if(key=='red' || key=='blue'){
//     localStorage.removeItem(key)
// }// remove items

// if(key='0'){
//     localStorage.clear();
// }// puri local storage ko clear kr dega

// also be can  update value of any key

localStorage.key(1)
// get key present in 1 index

localStorage.one=1// we can set and get value like an object
// key value jo h bo string honi chaiye even if you use no browser convert it into a string.