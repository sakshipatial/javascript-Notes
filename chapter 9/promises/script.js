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

// there are two things in promise object - state and result.

//WHY WE USE PROMISES?===
// fetch google.com home page  -->console.log("done")
// fetch data APi 
// fetch pictures form the server
// print downloading

// so we can do all these work parllely. so understand that we use promises for parallel execution.becouse therere is no point to do do these things one after one.so ,In next topic we will learn how to do these parallel execution.s