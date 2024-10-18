let h1=document.getElementById('h1')
let input=document.getElementById('digit')
let btn=document.getElementById('btn')
let para=document.getElementById('para')

class password_gernator{
constructor(){
    console.log("welcome to password gernator")
}

random_digits(digit_no){   
let num='1234567890'
let upper_char='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lower_char=upper_char.toLowerCase()
let special_char='!@#$%^&*()_'




// let digit_no=8;
let rdigit="";
if(digit_no<=6){
    para.innerHTML="password should be at least six digit"
}
else
{
for(let i=0;i<digit_no;i++)
{
let random_uchar=upper_char[Math.floor(Math.random()*10)]
let random_lchar=lower_char[Math.floor(Math.random()*10)]
let random_num=num[Math.floor(Math.random()*10)]
let random_schar=special_char[Math.floor(Math.random()*10)]
rdigit=rdigit+random_num+random_uchar+random_lchar+random_schar;
}
   let password=rdigit.substring(0,digit_no)
   input.value=password
}
}
}
let obj = new password_gernator()
// obj.random_digits()


//DOM


btn.addEventListener("click",(evt)=>{
    evt.preventDefault()
    digit_no=input.value
    obj.random_digits(digit_no)
})


 




 