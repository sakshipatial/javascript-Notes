// block scope
// {let a=8
//     console.log(a)// access only inside the block
// }
// console.log(a)// can't access outside
// let and const both are blocked scope variable.

const fun=()=>{let a=8
    console.log(a)
}

fun();// let and const are blocked scope and function scoped. block k andr ya function ke through access kr skte h

var c=7;
{
    console.log(c)
}
console.log(c)
// var is global scope h block kandr bhi or bahr bhi accessible h.