
// sessionStorage.setItem('name1','aanchal')
// sessionStorage.getItem('name1')
// //every method same like session storage

// storage event
sessionStorage.setItem('name1','aanchal')
window.onstorage=(e)=>{
    alert("changed");
    console.log(e)
}