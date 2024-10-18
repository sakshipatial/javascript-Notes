 // the solution of callback hell is promises.a promise is a promise od code execution.the code is either execute or fails,In the both case subscriber will be notify.


let promise = new Promise(function(resolve,reject){
    console.log("hello")
    resolve(56)
})
console.log("hello1");
setTimeout(function() {
    console.log("hello2")
},2000);
console.log("hello3");
console.log(promise);