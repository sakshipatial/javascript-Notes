// let p1=new Promise((resolve, reject)=>{
// setTimeout(()=>{
//     console.log("resolved after 2 seconds")
//     resolve(56)
// },2000)
// })
// p1.then((value)=>{
//     console.log(value)
   
//     let p2=new Promise((resolve,reject)=>{ setTimeout(()=>{ resolve('promise2')},2000)
//     })
// return p2;
//     }).then((value)=>{
//     console.log("we are done") 
//    return 2;
// }).then((value)=>{
//     console.log("now we are paka done");
// })

//Quick quiz:-Rewrite the loadscript function we wrote in the beginning of the chapter using promises.

const loadScript=(src)=>{
    return new Promise((resolve,reject)=>{
    let script=document.createElement("script")
    script.type="text/javascript"
    script.src=src
    document.body.appendChild(script)
    script.onload=()=>{
       resolve("script has been loaded ");
    }
    script.onerror=()=>{
        reject(0);
    }
})
}
let p1=loadScript("https://cdn.jsdelivr.net/npm/bootstrap1@5.3.3/dist/js/bootstrap.bundle.min.js");
p1.then((value)=>{
    console.log(value);
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
}).then((value)=>{
    console.log(value)
    console.log("second script is loaded")
}).catch((error)=>{
    console.log("sorry we having some problem on loading script")
}) 
// if anyone will fail it automatically catch the error.like if p1 give error then it automatically catch the error.