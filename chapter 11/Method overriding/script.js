class employee{
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
    requestcoffe(x){
        console.log("employee has requested "+x+ coffees)
    }
    requestleave(leaves){
       super.requestleave(leaves)
       console.log("one extra has granted")
    }
}
let a=new programmer;
a.requestleave(3);


//we override  requestleave method. and granted 1 extra leave in its child class where we override requestleave
// but now we want grant leaves like earlier without one extra .And after that we will ask question (do you want another leave?).then we will automatically grant the second leave.
// so if we copy parent class method and paste it. then In future if we will make any change it will not reflect in override method
// is there any way where we call this method as it is.
// by using super keyword we can able to use employee class method in programmer class which means requestleave method was overridden but I didn't completely neglected it.but with the help of super.requestleave I started it.