class employee{
    constructor(name){
        this.name=name;
    }
    login(){
        alert(`${employee.capitalize(this.name)} login`)
    }
    logout(){
        alert(`${this.name} logout`)
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }


}

let sakshi=new employee("akshi")
sakshi.login();
// we want ki koi bhi apna name dal rha h toh uska first letter capital hoe kr aaye uske lia hm ek method implemment krege.
//ye method hme kisi bhi word ka first letter capital kr ke dega.is method ko hm static method bna dege taki hm isko throughout the prgram khi bhi use kr ske.
