// Ques1 ,2

// class complexnumber{
//     constructor(realno,imgno){
       
//         this.realno=realno;
//         this.imaginaryno=imgno;
//     }
//     add(num){
//     this.realno=this.realno+num.realno
//     this.imaginaryno=this.imaginaryno+num.imaginaryno
//     }
   
// }
// let a=new complexnumber(3,4);
// let b=new complexnumber(2,4);
// a.add(b);
// console.log(a.realno , a.imaginaryno);

//Ques3
// class Human{
//     constructor(name){
//    this.name=name;
//     }
//   walk(){
//     console.log(`${this.name} can walk..`)
//   }
//   study(a){
//     console.log(`${this.name} studying what?`)
//   }
// }
//  class student extends Human{
// study(sub){
//    super.study();
//     console.log(`${this.name} is studying ${sub}`)
// }
//  }

// let a=new student("sakshi")
// a.study("maths");


//Ques4
// console.log(student instanceof Human)// false

//Ques5

class complexno{
    constructor(realno,imgno){
        this._realno=realno
        this._imgno=imgno
    }
    get no(){
        return console.log(`${this._realno},${this._imgno}`)
    }
    set real(r){
        this._realno=r;
        }
    set img(i){
        this._imgno=i;
    }
   
}
  let a= new complexno(5,6)     
  a.no;
  a.real=3;
  a.img=4;
a.no;

  