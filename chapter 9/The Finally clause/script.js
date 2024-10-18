let f=()=>{
try {
    let a = 0
    // console.log(program)
    console.log(a + "iam sucefuuly execute")
    return 
}
catch (error) {
    console.log(error);
    console.log(p)
}
finally{
console.log("hyy iam finally")
}
}
f();
//but the question is why we are using it? even if we write console.log() without finally it will still run.becouse we already catch the error.

   //let's say catch is also throwing an error.
   // so catch has an error now  and when that happens , then the line of code inside  finally run.
