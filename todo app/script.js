/**  create a to do list app capable of storing your to do's in local storage .add an option to create,delete and access on the todo's  */

let key=document.getElementById("key");
let dis=document.getElementById("value")
let date=document.getElementById("date")

let create=document.getElementById("create")
create.addEventListener("click",(evt)=>{
    evt.preventDefault();
    enter_key=key.value
   enter_value=dis.value
     enter_date=date.value
   localStorage.setItem(enter_key,JSON.stringify([enter_value,enter_date]))

   key.value=""
    dis.value=""
   } )
 
   let show=document.getElementById("show")
   show.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let enter_key=key.value;
    let get_value=localStorage.getItem(enter_key);
    // dis.value=get_value 
    get_value=JSON.parse(get_value)// js object me convert kr dia
    let a=get_value.toString()
    dis.value=a;

   })

let del=document.getElementById("delete")
del.addEventListener("click",(evt)=>{
    evt.preventDefault();
  let _key=key.value;
  localStorage.removeItem(_key)  

  key.value=""
    dis.value=""
})