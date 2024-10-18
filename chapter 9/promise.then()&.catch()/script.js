let promise= new Promise(function(resolve, reject){
setTimeout( ()=>{
    alert("Iam a promise and Iam fullfilled")
})
})






// promise syntax say ,whatever work you do inside me will be executed into the background.And after its execution you will be notified.HOW?===with the help of .then() and .catch().
// what is the meaning of fullfilled, 