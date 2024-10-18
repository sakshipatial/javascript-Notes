let x=function(e){
    alert("hello 1")
    console.log(e.target);
    console.log(e);
}
// let y=function(e){
//     alert("hello 2")
// }
btn.addEventListener('click',x);
// btn.addEventListener('click',y);
// let b=prompt("enter a no")
// if(b=='2')
// btn.removeEventListener('click',x);



 // reference of the fxn should be same.removeEventLiustener only work when fxn object is same.
 /** console.log(e)=it gernate pointer evnet:-(___vscode_livepreview_injected_script:139 PointerEvent {isTrusted: true, pointerId: 0, width: 1, height: 1, pressure: 0, …})
 
 pointer event is  an event object and in this there are many things.

 if we do:-  console.log(e.target)
 we get :- <button id="btn">click me</button>
 in place of e.target we got the button we clicked.
 */


//  methods which return the  collection of all  element as  anode list object. addEventListener adds  alistener to one  element. you have to find a method that adds for the listener for each of the elements.