console.log("sakshi");
let boxes = document.getElementsByClassName("box");
// console.log(boxes);

boxes[2].style.backgroundColor = "red";
// note: backgroundColor me color ka  C  capital hoga that's why its not working  coz i write c  small.

document.getElementById("blue").style.backgroundColor = "blue";

/** document.querySelector(".box").style.backgroundColor="yellow";
1.querySelector only apply in first element,it will work with the first selector that matches.if we want all of them,then we use (document.querySelectorAll)
 2.when yo do(.qureySelector(.box)then it return first element which matches the .box selector **/

let boxes1=(document.querySelectorAll(".box"))
/**when you do (.querySelectorAll) it will return you HTML collection. so if you want to use suppose backgroundcolor in ech element then you hava to itterate the element.
 * so query selecor return multiple elements in node list.bs us node list ko hme itterate krna pdega ,and then we have to work with their individual element.+
*/
console.log(boxes);
boxes1.forEach(element => {
    element.style.backgroundColor="yellow"
});

// we can also use classical loop instead of using modern foreach method .
// for(let i=0;i<5;i++){
//     boxes[i].style.backgroundColor="yellow"
// }

// let boxes3=document.getElementsByTagName("div");
// console.log(boxes3);
/** (.getElementsByTagName("div")) jitne bhi div element h uski collection hme return kr ke dega.*/


let e=document.getElementsByTagName;
e[4].matches(".box");
/** if (.box) class e[4]  me  lgi hui h toh ye (true) return krega. */

e[4].closest(".container");

e[4].closest("Html");
/*{<html lang=​"en">​<head>​…​</head>​<body>​…​</body>​<div class=​"container">​…​</div>​<script src=​"script.js">​</script>​</body>​</html>​} */

document.querySelector(".container").contains(e[4]);
// return true values if element is inside element.
document.querySelector(".container").contains(document.querySelector("body"));
// false    
