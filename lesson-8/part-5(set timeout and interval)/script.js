document.write("hello")
// let a=setTimeout(function(){alert("iam inside of setTimeout")},5000);
// let b=prompt("do you want to run setTimeout?")
// if('n'==b){
// clearTimeout(a);
// }
// if I use clearTimeout() then Iam stopping the execution of setTimeout.

// console.log(a);
// it print (1) in js console.so,what is this (1)?= this 1 is a timer ID.

//    EXAMPLE OF SET TIMEOUT
// const sum=(a,b)=>{
//     console.log(`yes Iam running ${a}+${b}`);
//  a+b
// }
// setTimeout(sum,1000,3,2);

//    EXAMPLE OF SETINTERVAL
// let hello=()=>{
//     alert("hellow world")
// }
// setInterval(hello,5000);

   function sum(a,b){
    c=a+b
    alert(`sum of n=${c}`)
}
setInterval(sum,2000,3,2)