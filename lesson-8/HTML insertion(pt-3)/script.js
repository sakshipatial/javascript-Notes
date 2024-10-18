// classical method to insert a element
let a=document.getElementsByTagName('div')[0]
// a.innerHTML=a.innerHTML+ '<h1>hello world</h1>'

// now we see some more methods of insertion which we use a/c to our conveince
let div=document.createElement('div');
div.innerHTML='<h1>hyy iam sakshi</h1>';
// a.appendChild(div);
// a.prepend(div);
// a.before(div);
// a.after(div);
 a.replaceWith(div); 
