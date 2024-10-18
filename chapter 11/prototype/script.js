const obj={
    name:"sakshi",
    language:"javascript",
    run: ()=>{
        alert("self run")
    }

}
console.log(obj);

let a={
    run: ()=>{
        alert("hello")
    }
}
let p={
    name2:"payal"
}
obj.__proto__=a;
a.__proto__=p;


obj.run()
console.log(obj.name2)
// if you want properties  and method  for any object, then you can set prototype for it.

