// console.log("my name is sakshi");
// console.info("hyy! iam info")
// console.warning("This is  a warning")
// console.error(err)

// obj={a:1,b:2,c:5}
// console.table(obj);
// console.assert(45>98);
// console.clear();


console.time("forloop");
for(let i=0;i<=5;i++){
    console.log("sakshi");
}
console.timeEnd("forloop")

console.time("whileloop");
let i=0;
while(i<=5){
    console.log("sakshi");
    i++;
}
console.timeEnd("whileloop")

// console.time() and console.timeEnd() used to measure    how much time will taken by any process.