let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject(new Error("error"));
        resolve("value 1")
    },1000)
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 2");
    },2000)
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3");
    },3000)
})

// p3.then((value)=>{
//     p1.then((value)=>{
//         console.log(value)
//     })
//     p2.then((value)=>{
//         console.log(value)
//         return value;
//     })
//     console.log(value);
//    })

// let promise_all= Promise.all([p1,p2,p3])

// let promise_allSettled= Promise.allSettled([p1,p2,p3])
// promise_allSettled.then((value)=>{
//     console.log(value);
// })

// let promise_race=Promise.race([p1,p2,p3]);
// promise_race.then((value)=>{
//     console.log(value);
// })

// let promise_any=Promise.any([p1,p2,p3]);
// promise_any.then((value)=>{
//     console.log(value);
// })

// let promise_resolve=Promise.resolve(6);
// promise_resolve.then((value)=>{
//     console.log(value);
// })

let promise_reject=Promise.reject(new Error("hey"));
