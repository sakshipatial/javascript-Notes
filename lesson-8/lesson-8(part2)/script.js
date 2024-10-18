let a=document.body.firstElementChild;
// a.hasAttribute('class')
// to check the existence of attribute
// console show: true

// console.log(a.getAttribute('class'));
// console will give me a the name of class attribute.

// a.setAttribute("hidden","true");
// use to set attribute in html element. 

// console.log(a.hasAttribute("hidden"));

// a.removeAttribute("hidden");
// method to remove attribute form the element.

// console.log(a.attributes);

//custom attribute:
console.log(a.dataset.game);
// we can add custom attribute using data-attribute name and access that using dataset property.