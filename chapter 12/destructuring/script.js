let arr=[23,43,4,5,6,7]

//arrays value accessing using traditional approch
// let a=arr[0]
// let b=arr[1]
// console.log(a,b)

//value accessing of array by destructuring
// let [a, , ,...rest]=arr
// console.log(a,rest)


// DEstructuring in objects
// const obj={
//     a:'1',
//     b:'2'
// }
// let{a,b}=obj; 
// console.log(a,b)


// spread operator

// convert array into an object
// let arr1=[1,2,3]
// let obj1={...arr1}
// console.log(obj1)

// function ko array value pass krna 
// function sum(v1,v2,v3){
//   return v1+v2+v3
// }
// console.log(sum(...arr1))


 
// object me value change bhi kr skte h
let obj2={
    name:"deeksha",
    class:"Medical"

}
// console.log({...obj2,name:"sakshi"})
// how this syntax work = ...obj2 me se is  syntax ne sb le lia  name,class etc, and after taking all value from the obj2 it will override that value .


console.log({name:"sakshi",...obj2})
// this will print obj2 object without changing  any value.

