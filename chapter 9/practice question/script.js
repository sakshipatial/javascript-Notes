
//write a program to load a javascript file in a  browser using promise. use .then() to display an alert when the load is complete.
// const loadScript = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script")

//         script.src = src;

//         script.onload = () => {
//             resolve(src+"  done")
//         }

//         document.head.appendChild(script)
//     })
// }
// const main2 = async () => {
//     console.log(new Date().getMilliseconds());
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
//     console.log(new Date().getMilliseconds());
// }
// main2();


//write the same program from previous question and use async and  await syntax.
// async  function loadScript(src){
//     let p1=new Promise((resolve,reject)=>{
//         let script=document.createElement("script");
//         script.src=src;
//         script.onload=()=>{
//             resolve(src+"script has been loaded")
//         }
//         script.onerror=()=>{
//             reject("0")
//         }
//         document.body.appendChild(script)
     
//     })
//     return p1;
    
// }
// let a=loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{console.log(value)}
// ).catch((error)=>{
//     console.log("srry!there is some error")
// })

// create a promise which reject after 3 seconds .use  an async/await to gets its value.use try and catch to handle its error
// async function fun(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{reject("hyy error succesfull")
//         },3000)
//     })
    
// } 
// const res=async ()=>{
// try {
//    let a=await fun();
//    console.log(a);
// } catch (error){
//     console.log(error);
// }
// }
// res();

// write a program using Promise.all() inside an async/await to await 3 promises.compare its result with the case where we await these promises one by one
let p1=async ()=>{ 
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10)
    },2000)
})
}
let p2=async ()=>{ 
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20)
    },1000)
})}
let p3=async ()=>{ new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },3000)
})
}
const main1=async ()=>{
// console.time("main1")
// let a1=await p1()
// let a2= await p2()
// let a3= await p3()
// console.log(a1,a2,a2)
// console.timeEnd("main1")

console.time("main1")
let a1a2a3=await Promise.all([p1,p2,p3])
console.log(a1a2a3);
console.timeEnd("main1")
}
main1();