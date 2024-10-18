// let p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(345)},4000)
// })
// let get_a=async ()=>{
//    let  a=await  p
//    console.log(a)
//    let  b=await  p
//    console.log(b)
//    let  c=await  p
//    console.log(c)
// }
// get_a();

// we want ki ek ek kr ke  values aaye pr they are getting print together. Thsis is happening coz  (promise a) is  a single promise and that's why  it will take only  4secconds to get resolved.so we'll make this promise a function. so whenever we w'll call( P asa a function) it a new promise return.

// let p=()=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(345)},4000)
// })}
// let get_a=async ()=>{
//    let  a=await  p()
//    console.log(a)
//    let  b=await  p()
//    console.log(b)
//    let  c=await  p()
//    console.log(c)
// }
// get_a();

//but doing this way is very hassel so javascript comes with IIFE
// As per JS ,it will hard to make and call the same function againa and again.so, it provide us  ashortcut which is IIFE

let p = () =>{ 
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(345)},4000)
})}
(async ()=>{
   let  a=await  p()
   console.log(a)
   let  b=await  p()
   console.log(b)
   let  c=await  p()
   console.log(c)
})() // tum is chiz ko bracket me wrap kr dege and then call it. and isi ko IIFE bolte h.

//sometime by mistake you pollute the global name-space.which means there are numerous variable inside the function .I want this entire entity  to be excuted at once. and the memory occupied by the variables to be released.  as  soon as the execution get over the memory reserved by the variable  will be released by javascrpt.
