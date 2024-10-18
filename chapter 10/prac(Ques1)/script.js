    let btn=document.getElementById('btn')
    btn.addEventListener('click',async (evt)=>{
        evt.preventDefault();
        try{
        let select=document.getElementById("dropdown")
        let type=select.value 
        
        let inputno=document.getElementById("number");
        let number=inputno.value;
        number=parseInt(number)
        
    
     let url=`http://numbersapi.com/${number}/${type}`
      let response=await fetch(url)
      let data=await response.text()
      let getfact=document.getElementById("para");
      getfact.innerHTML=data;
      para.append(getfact)
        }
        catch(error){
          
        }
    })
// what I learn from htis project
 /** jb bhi koi event k lia event handler bnaege toh bo event handler us event k hone pr hi chlega . */
    
