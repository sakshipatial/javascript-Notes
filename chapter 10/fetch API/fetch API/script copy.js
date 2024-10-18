const url="https://meowfacts.herokuapp.com"

const catfacts=document.querySelector("#catfacts");
const btn=document.querySelector("#btn")

//promise by async/await

const facts=async ()=>{
console.log("getting data.....")
let response=await fetch(url);
let b=await response.json();
catfacts.innerText=b.data[0];
}
btn.addEventListener("click", facts);   

//promise by promise chaining

// const promise=fetch(url)
// const fact= ()=>{
// promise.then((response)=>{
//    return response.json();
// }).then((value)=>{
//     const catfacts=document.querySelector("#catfacts");
//     catfacts.innerText=value.data[0]
//  })
// }
// btn.addEventListener("click", facts);   