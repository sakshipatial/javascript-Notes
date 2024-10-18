class Animal{
    constructor(name ){
        this.name=name
        
    }
    run(){
        console.log(this.name+" run...")
    }
    eat(){
        console.log(this.name+" eat...")
    }
}
class monkey extends Animal{
    jump(){
        console.log(this.name+" jumps tree to tree")
    }
    eatbanana(){
        console.log("monkey's loves to eat banana")
    }
}
let saksham=new monkey("saksham")
saksham.eat()
saksham.jump()
// so if you make any change in animal class that chages  also happen in monkey class which inherit animal class.
