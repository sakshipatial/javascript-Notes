// create a note saving app which stores your note to local storage.

let save=document.getElementById("save")
save.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let inputkey=document.getElementById("key")
    let key= inputkey.value
    
    let inputvalue=document.getElementById("value")
    let value= inputvalue.value
    
    localStorage.setItem(key,value)
    console.log(localStorage.getItem(key));

    
})
// Ques3 fetch he note which was saved.
let fetchnote=document.getElementById("fetchnote")
fetchnote.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let inputkey=document.getElementById("key")
    let key= inputkey.value

   let getnote= localStorage.getItem(key);
   let inputvalue=document.getElementById("value")
    inputvalue.value=getnote;

})

//Ques4 delete the note in the previous ques.
let deletenote=document.getElementById("deletenote")
deletenote.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let inputkey=document.getElementById("key")
    let key= inputkey.value
    localStorage.removeItem(key)
})

// clear all notes which saved in local storage







