// window.document.body.style.backgroundColor="green";


/**  1.window global element hota h.
 
   2.javascript me hmare html page ko ek object bna dia jata h jiska name document hota h.**/

// document.body.childNodes;
// document.body.childNodes[0];
/** 1. childnodes me next line and comments ko bhi jo count kia jata h as a child nodes.
 if I want ki hm sirf element bale nodes hi le toh hm use krege.(firstElementChild)(lastElementChild)**/

// document.body.firstElementChild;
// document.body.lastElementChild;


// document.body.firstElementChild.children;
// document.body.firstElementChild.children[0]
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

// document.body.firstElementChild.childNodes;
// document.body.firstElementChild.childNodes[0];
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
/** if I say childnodes ,then all the nodes will come in it .which includes text nodes and comment nodes also.
 * if I say children ,then I will get only the HTMl elements inside it.
 */

// document.body.firstElementChild.children[3].nextElementSibling;
// document.body.firstElementChild.children[3].previousElementSibling;
 /**(nextElementSibling) means which one will be next element sibling of box 3,it will be box4,means sibling whose parents is same,are called siblings. 
  *(previousElementmentSibling) which one is previous element sibling of box3.
 */
//   document.body.firstElementChild.children[3].previousSibling;
// If we write (previoussibling) then we will get text-node.coz here we are not asking for only elementsiblingg.


let a=document.body.firstElementChild;
console.log(a);
console.log(document.body.parentNode);
console.log(a.parentNode);
conmsole.log(a.parentElement);
// parentNode will only return something if its a node.it'll return in case of comment node ,text node.parent node just has to be node.
// parentElement only return a valid html element otherwise null.

console.log(a.nextSibling);
console.log(a.previousSibling);