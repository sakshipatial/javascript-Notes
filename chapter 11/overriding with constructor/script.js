class employee{
    constructor(){
        console.log("welcom office employee's ")
    }
    login(){
console.log("employee has logged in")
    }
    logout(){
console.log("employee has logged out")
    }
    requestleave(leaves){
        console.log("employee has requested "+leaves +"  leaves")
    }

}
class programmer extends employee{
//if there is no constructor in child class ,this is created automatically
// constructor(...args){ 
//     super(...args);
// }


//program's constructor is here.This newly written constructor
constructor(name){
    super();
    this.name=name;
    console.log(name)
}

   
        
    requestcoffe(x){
        console.log("employee has requested "+x+ coffees)
    }
    requestleave(leaves){
       super.requestleave(leaves)
       console.log("one extra has granted")
    }
}
let a=new programmer("sakshi");
 