let p1= new Promise((resolve,reject)=>{
    console.log("hyy Iam not resolved")
     setTimeout(()=>{
           resolve(1); 
     },2000)
})
p1.then(()=>{
    console.log("congratulation this promise now resolved")
})

p1.then(()=>{
    console.log("hurray!")
})
// If I put the hurray message promise before 1st one ,then it will show 1st in console and after it other.
//So, whichever handler we wil put first will show us first. And like this I can attach multiple handlers
