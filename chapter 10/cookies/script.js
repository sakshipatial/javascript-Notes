alert(document.cookie);

// if you want to add 'name=value' in cookies
document.cookie='name=sakshi'
document.cookie='name1=Ankita'// this is  a set call


// can't replace the existing cookie data but add up on it.
console.log(document.cookie)
 
// update the cookies
document.cookie="name=deeksha"

// bascicall it is a  simple way to store data ,not call it database coz it is not database

let key=prompt("enter your key")
let value=prompt("enter your value")
// document.cookie=`${key}= ${value}`
// console.log(document.cookie)
document.cookie=`${encodeURIComponent(key)}= ${encodeURIComponent(value)}`
console.log(document.cookie)
decodeURIComponent(`${value}`)// decode ; containing value


// what is a set call
document.cookie="name1=Ankita"// this is  a set call
// cookie option= cookie me option dena different h multiple cookie ek sath set krne ke
// hum multiple cookie ek sath set nhi kr skte h,

document.cookie="name1=Ankita path=url/a expires="
// codewithharry/java (website ke is webpage k upr ye cookie dikhe ga). toh hum ek particular page onward pr cookie set kr skte h.





