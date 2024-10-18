    class animal{
        constructor(name){
             this._name=name
        }
        fly(){
            console.log("udti phiru ")
        }
        get name(){
           return this._name
        }
        set name(newName){
            this._name=newName
        }
    }
    class rabit extends animal{
        eat(){
            console.log("rabit eat")
        }
    }
    let a= new rabit("sakshi")
    console.log(a.name) 

a.name="payal"
console.log(a.name)
console.log(a instanceof animal)
console.log(a instanceof rabit)
