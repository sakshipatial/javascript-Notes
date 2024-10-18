let fetchbtn=document.getElementById('fetchBtn')
fetchbtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler()
    {
        console.log("hello")
// Instantiate an xhr obj
      const xhr=new XMLHttpRequest() 
// open the object
       xhr.open('GET','sakshi.txt',true)

//what do on progress(optional)
xhr.onprogress=function () {
    console.log("on progress")
}
// what to do when response is ready
xhr.onload=function () {
    if(this.status===200){
    console.log(this.responseText)
    }
    else
    console.error('some error')
}
//send  the request
xhr.send(); 
    }
    // check http status in google
    / 200 status code means status okk.
